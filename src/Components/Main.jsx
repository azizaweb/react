import React from 'react'; 
import Phone from '../assets/Phone.png';
import Tel from '../assets/Tel.png';
import Phoone from '../assets/Phoone.png'

const Main = () => {
  return (
    <section className="w-full bg-white pt-[440px] pb-20">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center">
        <div className="w-[700px] h-[2px] bg-gray-300 mb-6"></div>
        <h2 className="text-center text-[40px] m-3.5 font-semibold text-black font-['Poppins'] opacity-80">
          How the app works
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <img src={Phone} alt="Phone mockup" className="md:mr-10" />
          <div className="text-left max-w-xl mt-8 md:mt-0">
            <p className="text-[#FA4A0C] text-sm font-semibold mb-2">Create an account</p>
            <h3 className="text-[32px] font-bold text-[#252B42] mb-4 leading-tight">
              Create/login to an existing <br /> account to get started
            </h3>
            <p className="text-gray-600 text-base">
              An account is created with your email <br /> and a desired password
            </p>
          </div>
        </div>

  
     <div className="flex flex-col-reverse md:flex-row items-center justify-between ">
  <div className="text-left max-w-xl  md:mt-0 md:ml-50"> {/* Сдвинули текст вправо */}
    <p className="text-[#FA4A0C] text-sm font-semibold mb-2">Explore varieties</p>
    <h3 className="text-[32px] font-bold text-[#252B42] mb-4 leading-tight">
      Shop for your favorites <br /> meal as a dey hot.
    </h3>
    <p className="text-gray-600 text-base">
      Shop for your favorite meals or drinks <br /> and enjoy while doing it.
    </p>
  </div>
  <img src={Tel} alt="Phone screen" className="md:ml-25" /> {/* Немного сдвинули картинку */}
</div>

      </div>
       <div className="flex flex-col md:flex-row items-center">
          <img src={Phoone} alt="Phone mockup" className="md:ml-50" />
          <div className=" max-w-xl mt-8 md:mt-0">
            <p className="text-[#FA4A0C] text-sm font-semibold mb-2">Checkout</p>
            <h3 className="text-[32px] font-bold text-[#252B42] mb-4 leading-tight">
       When you done check out
 <br />and get it delivered.
            </h3>
            <p className="text-gray-600 text-base">
             When you done check out and get it 
 <br /> delivered with ease.
            </p>
          </div>
 </div>
    </section>
  );
};

export default Main;
