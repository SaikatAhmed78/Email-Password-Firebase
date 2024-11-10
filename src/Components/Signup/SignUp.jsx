import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showpassword, setShowPassword] = useState(false)

    const handleSignUp = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.cheched;

        if(!terms){
            setErrorMessage('Plese Accept Our Terms And Condition')
            return;
        }

        setErrorMessage('');
        setErrorMessage(false);

        if (password.length > 6) {
            setErrorMessage('Password Should Be 6 Character Or Longer');
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

        if (!passwordRegex) {
            setErrorMessage('At least one uppercase, one lowercase, one number and one special character')
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccessMessage(true);
            })
            .catch(error => {
                console.log(error.message)
                setErrorMessage(error.message)
                setSuccessMessage(false)
            })
    }

    return (


        <div className="card bg-gray-800 w-full mx-auto my-12 max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl mx-auto font-bold my-2">Sign Up Now!</h1>

            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>

                    <input
                        type="email"
                        name='email'
                        placeholder="email"
                        className="input input-bordered"
                        required />
                </div>

                <div className="form-control relative">

                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>

                    <input
                        type={showpassword ? "text" : "password"}
                        name='password'
                        placeholder="password"
                        className="input input-bordered"
                        required />

                    <button
                        onClick={() => setShowPassword(!showpassword)}
                        className='btn btn-xs absolute right-2 top-12'
                    >
                        {
                            showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />
                        }
                    </button>

                    <label className="label">
                        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>

                </div>

                <div className="form-control">

                    <label className="label cursor-pointer justify-start">

                    <input type="checkbox" name='terms' className="checkbox" />

                        <span className="label-text ml-3">Accept Our Terms & Condition</span>

                    </label>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>

            {
                errorMessage && <p className="text-red-600 text-sm text-center">{errorMessage}</p>
            }

            {
                successMessage && <p className='text-green-500 text-sm text-center'>Sign Up Succesful</p>
            }
        </div>
    );
};

export default SignUp;