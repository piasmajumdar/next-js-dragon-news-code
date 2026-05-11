"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleLoginFunc = async (data) => {
        console.log("data", data);
        const { email, name, photo, password } = data;
        // console.log(name, photo, email, password);

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });
        
        console.log(res, error)
    }
    // console.log(watch('email'))  // watch input value by passing the name of it

    console.log(errors, "errors")

    return (
        <div className='w-11/12 mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>

            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-center text-3xl mb-10'>Login your account</h2>

                <form onSubmit={handleSubmit(handleLoginFunc)} className='space-y-4'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text"
                            className="input"
                            placeholder="Type here Name"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text"
                            className="input"
                            placeholder="Type here Photo URL"
                            {...register("photo", { required: "Photo URL is required" })}
                        />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email"
                            className="input"
                            placeholder="Type here email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
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

                    <button className='btn w-full bg-slate-800 text-white'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;