import React from 'react';
import Fon from '../assets/Fon.png'; // Назови изображение фона правильно и помести его в /assets

import Logo from '../assets/Logo.png'



const Footer = () => {
  return (
    <footer className="w-full bg-white">
      {/* Секция с изображением и текстом поверх */}
      <div className="relative w-full h-[516px]">
        <img
          src={Fon}
          alt="Fon"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Download the app now.
          </h2>
          <p className="max-w-xl mb-6 opacity-90">
            Available on your favorite store. Start your premium experience now
          </p>
          <div className="flex gap-4">
            <button className="bg-[#FA4A0C] text-white py-2 px-6 rounded-md text-sm font-medium hover:bg-orange-600 transition">
              Playstore
            </button>
            <button className="bg-white text-[#FA4A0C] py-2 px-6 rounded-md text-sm font-medium hover:bg-orange-100 transition">
              App store
            </button>
          </div>
        </div>
      </div>
     <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto py-6 px-4 border-t">
  
   
     <img src={Logo} alt="Bella Onojie Logo" className="h-20 w-auto" />
     <div className="text-sm text-gray-400 mt-4 md:mt-0">
          Copyright 2020 Bella Olonje.com
        </div>
       </div>
       
    </footer>
  );
};

export default Footer;
