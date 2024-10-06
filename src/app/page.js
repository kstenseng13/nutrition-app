import Image from "next/image";

//This is the  home page
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Pixabay. (2021, November 2). Spring roll, Roll, Food image. Free for use. [Photograph]. phamkhanhquynhtrang. https://pixabay.com/photos/spring-roll-roll-food-vietnamese-6760871/ */}
      <section className="flex items-center justify-center bg-[url('https://cdn.pixabay.com/photo/2021/11/01/15/52/spring-roll-6760871_1280.jpg')] bg-cover bg-center h-[60vh] text-white">
        <div className="bg-gray-900 bg-opacity-60 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Welcome to The Nutrition App</h1>
          <p className="text-lg mb-4">Your personal nutrition tracker for dietary restrictions.</p>
          <a href="/login" className="btn-secondary">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full xl:w-1/3">
              {/* Pixabay. (2015, March 29). Bananas, Fruits, Food image. Free for use. [Photograph]. StockSnap. https://pixabay.com/photos/bananas-fruits-food-grocery-store-698608/ */}
              <img src="https://cdn.pixabay.com/photo/2015/03/30/12/43/bananas-698608_1280.jpg" alt="Bananas" className="mx-auto w-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enter UPC Code</h3>
              <p>Simply enter the UPC code of a product to get nutritional information.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full xl:w-1/3">
              {/* Pixabay. (2017, September 15). Salad, Fruit, Berry image. Free for use.[Photograph]. silviarita. https://pixabay.com/photos/salad-fruit-berry-healthy-vitamins-2756467/ */}
              <img src="https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg" alt="Salad" className="mx-auto w-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Diet Assessment</h3>
              <p>Receive instant feedback on whether the product is a great, fine, or bad option for your dietary needs.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full xl:w-1/3">
              {/* Pixabay. (2019, June 25). Girl, Yoga, Beach image. Free for use. [Photograph]. MallorcaGraphics. https://pixabay.com/photos/girl-yoga-beach-meditation-4300034/*/}
              <img src="https://cdn.pixabay.com/photo/2019/06/26/09/52/girl-4300034_1280.jpg" alt="Yoga" className="mx-auto w-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Low-Fat & Low-Sodium</h3>
              <p>Find products suitable for low-fat and/or low-sodium dietary restrictions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}