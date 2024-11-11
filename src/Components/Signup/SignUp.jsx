import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        if (!terms) {
            setErrorMessage('Please Accept Our Terms And Conditions');
            return;
        }

        setErrorMessage('');
        setSuccessMessage(false);

        if (password.length < 6) {
            setErrorMessage('Password Should Be 6 Characters Or Longer');
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setSuccessMessage(true);

                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log(result, 'Verification Email Sent');
                    });

                    const profile = {
                        displayName : name,
                        photoURL :  photo
                    }

                    updateProfile(auth.currentUser, profile)
                    .then( () => {
                        console.log('user Profile Updated')
                    })
            })
            .catch(error => {
                setErrorMessage(error.message);
                setSuccessMessage(false);
            });
    }

    return (
        
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 p-6">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-2 mt-12">Sign Up Now!</h1>

                <form onSubmit={handleSignUp} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700">Name</span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Name"
                            className="input input-bordered w-full"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name='photo'
                            placeholder="Photo URL"
                            className="input input-bordered w-full"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700">Email</span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Email"
                            className="input input-bordered w-full"
                            required />
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-gray-700">Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password'
                            placeholder="Password"
                            className="input input-bordered w-full"
                            required />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-3 top-10 text-gray-600'
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div className="form-control">
                        <label className="label cursor-pointer justify-start">
                            <input type="checkbox" name='terms' className="checkbox" />
                            <span className="label-text ml-3 text-gray-700">Accept Our Terms & Conditions</span>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-indigo-600 text-white w-full hover:bg-indigo-700">Sign Up</button>
                    </div>
                </form>

                {errorMessage && <p className="text-red-600 text-center mt-4">{errorMessage}</p>}
                {successMessage && <p className="text-green-600 text-center mt-4">Sign Up Successful! Please verify your email.</p>}

                <p className="text-center mt-6 text-gray-700">
                    Already Have an Account? Please Login
                    <br />
                    <Link to="/login" className="text-indigo-600 font-bold underline hover:text-indigo-800">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
