import Image from 'next/image';
import React from 'react';

const Phone = () => {
  return (
    <div className="w-full md:p-20 p-2 flex items-center justify-center">
      <div className="flex md:flex-row flex-col w-full items-center justify-center bg-[#F0FFF8] border border-[#BED8CB] md:p-20 md:gap-4 p-2 gap-2">
        <div className="md:w-1/2 w-full">
          <Image src="/phone.svg" alt="phone" width={300} height={300} />
        </div>
        <div className="md:w-1/2 w-full flex flex-col md:gap-5 gap-2  justify-center max-md:items-center">
        <p className='text-4xl font-bold'>Download Our App To Get Amazing <span className='text-[#219653]'>Deals</span></p>
        <p className='text-sm'>Get new deals every day. Top deals have the best offers and share
        them with you. To avail of offers, find our app in the play store</p>
        <div className="flex md:flex-row flex-col w-full items-center gap-5">
        <Image src="/android.png" alt="playstore" width={100} height={100} />
        <Image src="/ios.png" alt="playstore" width={100} height={100} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
