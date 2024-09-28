import Image from "next/image";

//This is the  home page
export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
        <h2>Welcome to the Nutrition App.</h2>
  <button className="btn-primary">Primary Button</button>
  <button className="btn-secondary">Secondary Button</button>
    </div>
  );
}
