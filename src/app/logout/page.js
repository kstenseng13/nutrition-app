import Link from 'next/link';
import Logout from '../components/logout';
//import Logout from '../components/Logout';

export default function Home() {
    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
            <h2>Are you sure you want to Logout?</h2>
            <br></br>
            <Link href='/Logout'><button className="btn-primary">Logout</button></Link>
        </div>

        
    );
}