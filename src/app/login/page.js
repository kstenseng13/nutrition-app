"use client";

import Link from 'next/link';
import UserLogin from '../components/userLogin';
import { useAuth } from '../context/userContext';

export default function Home() {

    const { isLoggedIn } = useAuth();


    return (
        //Pixabay. (2018, March 26). Food, Vegetable, In good health image. Free for use. [Photograph]. GinetteDorais. https://pixabay.com/photos/food-vegetable-in-good-health-fruit-3267619/
        <div className="min-h-screen bg-cover bg-[radial-gradient(circle,rgba(31,41,55,0.9),rgba(31,41,55,0.4)),url('https://cdn.pixabay.com/photo/2018/03/27/22/21/food-3267619_1280.jpg')] flex flex-col">
            <div className='flex-grow flex items-center justify-center py-16'>
                <div className='bg-beige w-full mx-4 md:w-1/3 p-8 rounded-lg shadow-lg flex flex-col items-center'>
                    <h1 className="text-center text-4xl mb-5">Welcome Back!</h1>
                    {/* UPC Code Entry Form */}
                    <div className="w-full">
                        <div className='flex'>
                            <UserLogin />
                        </div>
                        {!isLoggedIn ? (
                            <div className='mt-8 text-center'>
                                <p className='inline-block'>If you do not have an account, you can  </p>
                                <Link href='/register' className='inline-block'><button className="btn-secondary">Register Now</button></Link></div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}