export default function Footer() {
    return (
        <footer className="bg-gunmetal p-4 py-4">
            <div className="container mx-auto text-center text-white">
                <p>&copy; {new Date().getFullYear()} Nutrition App. All rights reserved.</p>
            </div>
        </footer>
    );
}