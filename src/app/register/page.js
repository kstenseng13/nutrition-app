import CreateAccount from '../components/createAccount';

export default function Register() {
    return (
        //Pixabay. (2020, April 28). Tree, Park, Nature image. Free for use. [Photograph]. palinska. https://pixabay.com/photos/tree-park-nature-forest-landscape-5102896/
        <div className="min-h-screen bg-cover bg-[radial-gradient(circle,rgba(31,41,55,0.9),rgba(31,41,55,0.4)),url('https://cdn.pixabay.com/photo/2020/04/28/05/57/tree-5102896_1280.jpg')] flex flex-col">
            <div className='flex-grow flex items-center justify-center py-16'>
                <div className='bg-beige w-full mx-16 md:w-1/3 p-8 rounded-lg shadow-lg'>
                    <h1 className='text-3xl my-8 font-semibold text-center'>Join Us</h1>
                    <div className='flex items-center justify-center'>
                        <CreateAccount />
                    </div>
                </div>
            </div>
        </div>
    );
};
