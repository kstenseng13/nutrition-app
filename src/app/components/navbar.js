import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="bg-gunmetal p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white text-lg font-bold">
                    <Image src="/logo.png" height={40} width={40} alt="Logo" className="inline-block" />
                </a>
                <ul className="flex space-x-6">
                    <li><a href="/login" className="text-white">Login</a></li>
                    <li><a href="/upcEntry" className="text-white">Check UPC</a></li>
                    <li><a href="/contact" className="text-white">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}