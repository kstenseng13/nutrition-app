import Link from 'next/link';
import UserLogin from '../components/userLogin';

export default function Home() {
    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 text-center">
            
            <h2 className='-ml-20 text-2xl'>UserLogin:</h2>

            <br></br>
            <br></br>
            
            <div className='flex'>
                <UserLogin />
            </div>       

            <br></br>
            <Link href='/register'><button className="btn-primary">Create Account</button></Link>
        </div>
    );
}