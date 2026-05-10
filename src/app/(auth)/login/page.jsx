"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleLoginFunc = (data) => {
        console.log(data)
    }
    // console.log(watch('email'))  // watch input value by passing the name of it

    console.log(errors, "errors")

    return (
        <div className='w-11/12 mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>

            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-center text-3xl mb-10'>Login your account</h2>

                <form onSubmit={handleSubmit(handleLoginFunc)} className='space-y-4'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email"
                            className="input"
                            placeholder="Type here email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.password && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type="password"
                            className="input"
                            placeholder="Type here Password"
                            {...register("password", { required: "Password field is required" })}
                        />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className='btn w-full bg-slate-800 text-white'>Login</button>
                    <p>Don't have an account? <Link href={'/register'} className='text-blue-500'> Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;