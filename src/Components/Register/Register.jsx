import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase.init';

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        setErrorMessage('');
        setSuccessMessage('');

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccessMessage('Registration Successful! Please check your email for verification.');
            })
            .catch(error => {
                console.log('ERROR', error);
                setErrorMessage(error.message);
            });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-4xl font-bold text-center text-gray-800 mb-6">Register</h3>

                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-6 w-6 text-gray-400 mr-3">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="email" name='email' className="w-full py-2 outline-none" placeholder="Email" required />
                    </div>
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-6 w-6 text-gray-400 mr-3">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="password" name='password' className="w-full py-2 outline-none" placeholder='Password' required />
                    </div>
                    <button type="submit" className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300'>Register</button>
                </form>

                {errorMessage && <p className="text-red-600 text-center mt-4">{errorMessage}</p>}
                {successMessage && <p className="text-green-600 text-center mt-4">{successMessage}</p>}
            </div>
        </div>
    );
};

export default Register;
