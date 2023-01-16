import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    if (user) {
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name,email,password)

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <section class="h-full gradient-form bg-gray-200 md:h-screen">
                <div class="container py-12 px-6 h-full">
                    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div class="xl:w-10/12">
                            <div class="block bg-white shadow-lg rounded-lg">
                                <div class="lg:flex lg:flex-wrap g-0">
                                    <div class="lg:w-6/12 px-4 md:px-0">
                                        <div class="md:p-12 md:mx-6">
                                            <div class="text-center">
                                                <img
                                                    class="mx-auto w-48"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                    alt="logo"
                                                />
                                                <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">We are The Lotus Team</h4>
                                            </div>
                                            <form onSubmit={handleRegister}>
                                                <p class="mb-4">Please Create to your account</p>
                                                <div class="mb-4">
                                                    <input
                                                        type="text" name="name" id="" placeholder='Your Name' required
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                                </div>
                                                <div class="mb-4">
                                                    <input
                                                        type="email" name="email" id="" placeholder='Email address' required
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                                </div>
                                                <div class="mb-4">
                                                    <input
                                                        type="password" name="password" id="" placeholder='Password' required
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                                </div>
                                                <div class="text-center pt-1 mb-12 pb-1">
                                                    <input
                                                        className='btn btn-success mt-2' type="submit" value="register" />
                                                    <br />
                                                    <a class="text-gray-500 mt-5" href="#!">Forgot password?</a>
                                                </div>
                                                <div class="">
                                                    <p class="mb-0 mr-2">Don't have an account? <span><Link class="text-blue-600" to={'/login'} >Sign Up</Link></span> </p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;