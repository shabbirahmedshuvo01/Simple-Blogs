import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }



    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }


    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            window.alert('sent email');
        }
        else {
            window.alert('please enter your email address');
        }
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
                                            <form onSubmit={handleSubmit}>
                                                <p class="mb-4">Please login to your account</p>
                                                <div class="mb-4">
                                                    <input
                                                        type="email"
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Email"
                                                        required
                                                        ref={emailRef}
                                                    />
                                                </div>
                                                <div class="mb-4">
                                                    <input
                                                        type="password"
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Password"
                                                        ref={passwordRef}
                                                    />

                                                    <input className='btn btn-primary mt-2' type="submit" value="Log In" />
                                                </div>
                                                <a onClick={resetPassword} class="text-gray-500" href="#!">Forgot password?</a>
                                                <div class="">
                                                    <p class="mb-0 mr-2">Don't have an account? <span><Link class="text-blue-600" to={'/signup'}>Sign Up</Link></span> </p>
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

export default Login;