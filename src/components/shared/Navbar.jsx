"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import userAvatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    // console.log(user)

    return (
        <div className='w-11/12 mx-auto flex justify-between items-center gap-4 mt-6'>
            <div></div>

            <ul className='flex justify-between items-center gap-4 text-gray-700'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/career'} className={"text-pink-700"}>Career</NavLink></li>
            </ul>

            {isPending ? <span className="loading loading-spinner loading-lg"></span>
                : user ? (
                    <div className='flex items-center gap-2'>
                        <h2>Hello, {user.name}</h2>
                        <Image src={userAvatar} width={40} height={40} alt='User Avatar'></Image>
                        <button className='btn bg-purple-500 text-white'
                        onClick={async()=>await authClient.signOut()}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <button className='btn bg-purple-500 text-white'>
                        <NavLink href={'/login'}>Login</NavLink>
                    </button>
                )}
        </div>
    );
};

export default Navbar;