import CreateAccount from '../components/createAccount';

export default function Register() {
    return (
        //Pixabay. (2017, January 9). Dumbbell, sports, weights, gym [Photograph]. Pixabay. https://pixabay.com/photos/dumbbell-sports-weights-gym-1966247/
        <div className="min-h-screen bg-cover bg-[radial-gradient(circle,rgba(31,41,55,0.9),rgba(31,41,55,0.4)),url('https://cdn.pixabay.com/photo/2017/01/09/11/30/dumbbell-1966247_1280.jpg')] flex flex-col">
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
