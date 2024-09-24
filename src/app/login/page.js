import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
            <h2>This is the login page.</h2>
            <Link href='/register'><button  className="btn-primary">Create Account</button></Link>
        </div>
    );
}