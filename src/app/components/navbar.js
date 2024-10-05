// /app/components/Navbar.js

export default function Navbar() {
    return (
        <nav className="bg-gunmetal p-4">
            <div className="container mx-auto flex justify-between">
                <a href="/upcentry" className="text-white text-lg font-bold">Nutrition App</a>
                <ul className="flex space-x-4">
                    <li><a href="/login" className="text-white">Login</a></li>
                    <li><a href="/about" className="text-white">About</a></li>
                    <li><a href="/contact" className="text-white">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}


