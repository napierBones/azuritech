import React from 'react';
import Filterbar from './Filterbar';

const Hero = () => {
  return (
    <div className="w-full md:h-[40vw] bg-[#F0FFF8] flex flex-col md:flex-row items-center justify-center relative">
      <div className="w-full md:w-[60%] h-1/2 md:h-full flex flex-col items-start justify-center gap-5 p-20">
        <p className="text-3xl lg:text-4xl xl:text-5xl font-bold">
          Get The Best <span className="text-[#219653] font-bold">Deals</span>
          Near By You!
        </p>
        <p className="text-2xl">
          Explore nearby deals on map and buy deals to enjoy quality food with
          your family
        </p>
        <button className="bg-[#013D29] text-white font-bold py-2 px-7 rounded-full text-2xl">
          Explore
        </button>
      </div>
      <div className="w-full md:w-[60%] h-[400px] md:h-full">
        <video
          src="/hero-video.mp4"
          className="w-full h-full object-cover"
          controls
          loop
          muted
        ></video>
      </div>
      <Filterbar/>
    </div>
  );
};

export default Hero;
