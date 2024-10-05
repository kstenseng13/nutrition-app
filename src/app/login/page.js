"use client";

import Link from 'next/link';
import UserLogin from '../components/userLogin';
import { useAuth } from '../context/userContext';

export default function Home() {

    const { isLoggedIn } = useAuth();


    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 text-center">
            
            <h2 className='-ml-20 text-2xl'>UserLogin:</h2>

            <br></br>
            <br></br>
            
            <div className='flex'>
                <UserLogin />
            </div>       

            <br></br>
            {!isLoggedIn ? (
                <Link href='/register'><button className="btn-primary">Create Account</button></Link>
            ) : (
                <div></div>
            )}
        </div>
    );
}