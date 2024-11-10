import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase.init';
import { Link } from 'react-router-dom';

const Login = () => {

    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setSuccessMessage(false);
        setErrorMessage('')

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccessMessage(true)
            })
            .catch(error => {
                console.log('Error', error.message)
                setErrorMessage(error.message)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Log in to access all your favorite features and services with ease. Our secure platform is ready to provide you with a safe and seamless experience.
                    </p>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    {
                        successMessage && <p className="text-green-500 text-sm text-center">Login Succesful</p>
                    }
                    {
                        errorMessage && <p className="text-red-600 text-sm text-center">{errorMessage}</p>
                    }

                    <p className="text-center mt-4 text-lg text-gray-700">
                        New To This Website? Please Sign Up
                        <br />
                        <Link to="/signup" className="text-[#9538e2] font-bold underline hover:text-[#7224b9]">
                            Sign Up
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );

};

export default Login;