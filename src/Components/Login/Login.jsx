import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../../Firebase/firebase.init';
import { Link } from 'react-router-dom';

const Login = () => {
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const emailRef = useRef();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSuccessMessage(false);
        setErrorMessage('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                if (!result.user.emailVerified) {
                    setErrorMessage('Please Verify Your Email Address');
                } else {
                    setSuccessMessage(true);
                }
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
    };

    const handleForgetPassword = () => {
        const emailr = emailRef.current.value;

        if (!emailr) {
            alert('Please Provide A Valid Email');
        } else {
            sendPasswordResetEmail(auth, emailr)
                .then(() => {
                    alert('Password Reset Email Sent, Please Check Your Email');
                });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
            <div className="flex-col lg:flex-row-reverse bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
                <div className="text-center lg:text-left mb-6 lg:mb-0">
                    <h1 className="text-4xl font-bold text-gray-800">Login now!</h1>
                    <p className="mt-4 text-gray-600">
                        Log in to access all your favorite features and services with ease. Our secure platform is ready to provide you with a safe and seamless experience.
                    </p>
                </div>
                <div className="w-full">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700">Email</span>
                            </label>
                            <input type="email" name='email' ref={emailRef} placeholder="Email" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered w-full" required />
                            <label onClick={handleForgetPassword} className="label text-right">
                                <span className="text-purple-600 cursor-pointer">Forgot password?</span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-purple-600 text-white w-full hover:bg-purple-700">Login</button>
                        </div>
                    </form>

                    {successMessage && <p className="text-green-500 text-sm text-center mt-4">Login Successful</p>}
                    {errorMessage && <p className="text-red-600 text-sm text-center mt-4">{errorMessage}</p>}

                    <p className="text-center mt-6 text-gray-700">
                        New To This Website? Please Sign Up
                        <br />
                        <Link to="/signup" className="text-purple-600 font-bold underline hover:text-purple-800">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
