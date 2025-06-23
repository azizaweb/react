import React from "react";
import Logo from "../assets/Logo.png";
import HeroBg from "../assets/Eat.png"; 
import Phones from "../assets/Phones.png"; 
const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="max-w-screen-xl  mx-auto  px-6">
        <nav className="flex items-center justify-between h-[80px] w-full">
          <img src={Logo} alt="Bella Onojie Logo" className="h-20 w-auto" />

          <ul className="flex items-center gap-20 font-medium">
            <li className="relative after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-full after:bg-[#FA4A0C]">
              <a href="#" className="text-[#FA4A0C]">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FA4A0C] transition-colors duration-300">Product</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FA4A0C] transition-colors duration-300">Faq</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FA4A0C] transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <section className="relative mt-8">
   
          <img src={HeroBg} alt="Assorted dishes"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <span className="uppercase font-medium tracking-wider text-sm mb-4">Food app</span>

            <h1 className="font-bold leading-tight mb-6 text-3xl sm:text-4xl md:text-5xl max-w-3xl">
              Why stay hungry when <br className="hidden md:block" /> you can order
              from Bella Onojie
            </h1>

            <a href="#"className="mb-8 text-sm font-medium">
              Download the bella onoje’s food app now on
            </a>

            <div className="flex gap-6 flex-wrap justify-center">
              <button className="bg-[#FA4A0C] hover:bg-[#d84006] transition-colors duration-300 text-white font-semibold px-10 py-3 rounded-full">
                Playstore
              </button>
              <button className="border border-white hover:bg-white hover:text-[#FA4A0C] transition-colors duration-300 font-semibold px-10 py-3 rounded-full">
                App store
              </button>
            </div>
          </div>
    
        <div className="absolute top-[70%] left-[30%]">
          <img src={Phones} alt="Phone mockups" className="w-auto h-[600px]" />
        </div>
      </section>
    </header>
  );
};

export default Header;

   