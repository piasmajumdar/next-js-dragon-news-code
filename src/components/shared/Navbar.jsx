import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png"
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center gap-4 mt-6'>
            <div></div>

            <ul className='flex justify-between items-center gap-4 text-gray-700'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/carrer'}>Career</Link></li>
            </ul>

            <div className='flex items-center gap-2'>
                <Image src={userAvatar} width={40} height={40} alt='User Avatar'></Image>
                <button className='btn bg-purple-500 text-white'>
                    <Link href={'/login'}>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;