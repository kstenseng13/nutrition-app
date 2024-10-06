import Image from "next/image";

const StyleGuide = () => {
    return (
        <div>
            <a name="Top"></a>
            <div className="mx-12 my-8 ">
                <div className="mr-12 inline-block w-full xl:w-48 align-top">
                    <ul className="border">
                        <li className="border-b p-2 font-semibold hover:text-gray-500">
                            <a href="#logo">Logo</a>
                        </li>
                        <li className="border-b p-2 font-semibold hover:text-gray-500">
                            <a href="#font">Font</a>
                        </li>
                        <li className="border-b p-2 font-semibold hover:text-gray-500">
                            <a href="#colorTheme">Color Theme</a>
                        </li>
                        <li className="border-b p-2 font-semibold hover:text-gray-500">
                            <a href="#headings">Headings</a>
                        </li>
                        <li className="border-b p-2 font-semibold hover:text-gray-500">
                            <a href="#buttons">Buttons</a>
                        </li>
                        <li className="border-b p-2 font-semibold hover:text-gray-500">
                            <a href="#formElements">Form Elements</a>
                        </li>
                        <li className="p-2 font-semibold hover:text-gray-500">
                            <a href="#messages">Messages</a>
                        </li>
                    </ul>
                </div>

                <div className="w-full xl:w-5/6 mt-8 xl:mt-0 inline-block align-top">
                    <div className="mb-4">
                        <div className="w-auto border-b border-stone-300 pb-2">
                            <h2><a name="about"></a>My Styles</h2>
                        </div>
                        <p className="pt-4">This page contains specific style guide information for the front end interface.</p>
                    </div>

                    <div className="mb-4">
                        <div className="w-auto border-b border-stone-300 pb-2">
                            <h2><a name="logo"></a>Logo</h2>
                        </div>
                        <p className="pt-4">The logo that will be used throughout the application.</p>
                        <div className="flex flex-wrap">
                            <div className="w-64 h-64 m-4">
                                <Image src="/logo.png" alt="Main Logo" width={200} height={200} />
                            </div>
                        </div>
                    </div>

                    <div className="my-4">
                        <div className="w-auto border-b border-stone-300 mb-4">
                            <h2><a name="fonts"></a>Fonts</h2>
                        </div>
                        <p>My application utilizes the Geist Sans and Geist Mono font-families in gunmetal black as
                            default.</p>
                    </div>
                    <div className="mt-4 underline text-[--color-salmonDark]">
                        <a href="#Top" className="link">Back to Top</a>
                    </div>

                    <div className="my-4">
                        <div className="w-auto border-b border-stone-300 mb-4">
                            <h2><a name="colorTheme"></a>Color Theme</h2>

                        </div>
                        <p>My application utilizes following color scheme as primary colors in its interface.</p>
                        <div className="flex flex-wrap py-4">
                            <div className="w-48 h-48 bg-matcha mr-8">
                                <div className="text-center mt-16">
                                    <p className="font-semibold">Matcha</p>
                                    <p>Hex: #84A07C</p>
                                </div>
                            </div>
                            <div className="w-48 h-48 bg-copper mr-8">
                                <div className="text-center mt-16">
                                    <p className="font-semibold">Copper</p>
                                    <p>Hex: #D4A373</p>
                                </div>
                            </div>
                            <div className="w-48 h-48 bg-terracotta mr-8">
                                <div className="text-center mt-16">
                                    <p className="font-semibold">Terracotta</p>
                                    <p>Hex: #E07A5F</p>
                                </div>
                            </div>
                            <div className="w-48 h-48 bg-gunmetal text-white mr-8">
                                <div className="text-center mt-16">
                                    <p className="font-semibold">Gunmetal</p>
                                    <p>Hex: #1F2937</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 underline text-[--color-salmonDark]">
                        <a href="#Top" className="link">Back to Top</a>
                    </div>

                    <div className="my-4">
                        <div className="w-auto border-b border-stone-300 mb-4">
                            <h2 className="ahsing"><a name="headings"></a>Headings</h2>
                        </div>
                        <p className="pb-4">The below font sizes and styles are used in the application for various content headings
                            and other displays.</p>
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                    </div>
                    <div className="mt-4 underline text-[--color-salmonDark]">
                        <a href="#Top" className="link">Back to Top</a>
                    </div>

                    <div className="my-4">
                        <div className="w-auto border-b border-stone-300 mb-4">
                            <h2 className="ahsing"><a name="buttons"></a>Buttons</h2>
                        </div>
                        <p className="pb-4">The application will feature buttons that contain the below color and shape.</p>
                        <form>
                            <div className="mb-4">
                                <button className="btn-primary">Primary</button>
                                <button className="btn-secondary">Secondary</button>
                            </div>
                            <div className="flex items-center mb-4">
                                <input id="checkbox" type="checkbox" value="" /><label for="checkbox">Checkbox</label>
                            </div>
                            <div className="flex items-center">
                                <input id="radio" type="radio" name="radio" />
                                <div><label for="radio">Radio</label></div>
                            </div>
                            <div className="flex items-center mb-4">
                                <input id="radio2" type="radio" name="radio" />
                                <div><label for="radio2">Radio</label></div>
                            </div>
                        </form>

                    </div>
                    <div className="mt-4 underline text-[--color-salmonDark]">
                        <a href="#Top" className="link">Back to Top</a>
                    </div>

                    <div className="my-4">
                        <div className="w-auto border-b border-stone-300 mb-4">
                            <h2 className="ahsing"><a name="formElements"></a>Form Elements</h2>
                        </div>
                        <p className="pb-4">For the varous forms that the application will contain, it will contain input fields and
                            labels with the below styling:</p>
                        <div className="w-1/2">
                            <div className="mb-5">
                                <label for="fontElement" className="block mb-2 text-sm font-medium"> One Column Input</label>
                                <input type="text" id="fontElement" className="p-2.5" placeholder="Some text here" required />
                            </div>
                            <div>
                                <div className="inline-block mb-5 w-full xl:w-[48%] mr-1">
                                    <label for="firstName" className="block mb-2 text-sm font-medium">Two Column Input</label>
                                    <input type="text" id="firstName" className="p-2.5" placeholder="Input" required />
                                </div>
                                <div className="inline-block mb-5 w-full xl:w-1/2">
                                    <label for="lastName" className="block mb-2 text-sm font-medium">Two Column Input</label>
                                    <input type="text" id="lastName" className="p-2.5" placeholder="Input" required />
                                </div>
                                <div className="container mx-auto">
                                    <label for="category" className="block mb-2 text-sm font-medium">Category</label>
                                    <select id="category" className="shadow-md bg-white border border-matcha text-sm leading-5 rounded-md block w-full focus:ring-matcha focus:border-matcha outline-2 outline-offset-2">
                                        <option value="" disabled selected>Select a category</option>
                                        <option value="nutrition">Azarath</option>
                                        <option value="fitness">Metrion</option>
                                        <option value="wellness">Zinthos</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 underline text-[--color-salmonDark]">
                        <a href="#Top" className="link">Back to Top</a>
                    </div>

                    <div className="my-4">
                        <div className="w-auto border-b border-stone-300 mb-4">
                            <h2 className="ahsing"><a name="messages"></a>Messages</h2>
                        </div>
                        <p className="pb-4">For various completed tasks, application notifications will be presented to the user based. The following contextual messages will be used.</p>
                        <div className="w-1/2">
                            <div className="text-white shadow-md bg-amber-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4">
                                <label>Warning!</label>
                            </div>
                            <div className="text-white shadow-md bg-rose-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4">
                                <label>Error!</label>
                            </div>
                            <div className="text-white shadow-md bg-matchaDark font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4">
                                <label>Success!</label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 underline text-[--color-salmonDark]">
                        <a href="#Top" className="link">Back to Top</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StyleGuide;

