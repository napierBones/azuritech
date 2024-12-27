import Image from 'next/image';
import React from 'react';

const Phone = () => {
  return (
    <div className="w-full p-20 flex items-center justify-center">
      <div className="flex w-full items-center justify-center bg-[#F0FFF8] border border-[#BED8CB] p-20 gap-4">
        <div className="w-1/2">
          <Image src="/phone.svg" alt="phone" width={300} height={300} />
        </div>
        <div className="w-1/2 flex flex-col gap-5  justify-center">
        <p className='text-4xl font-bold'>Download Our App To Get Amazing <span className='text-[#219653]'>Deals</span></p>
        <p className='text-sm'>Get new deals every day. Top deals have the best offers and share
        them with you. To avail of offers, find our app in the play store</p>
        <div className="flex items-center gap-5">
        <Image src="/android.png" alt="playstore" width={100} height={100} />
        <Image src="/ios.png" alt="playstore" width={100} height={100} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
