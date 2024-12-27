import Image from 'next/image';
import React from 'react';

const Top_notification = () => {
  return (
    <div className="bg-[#013D29] w-full flex items-center justify-between px-5 py-1 ">
      <div className="flex items-center gap-5">
        <Image
          src="/bell-icon.svg"
          alt="bell"
          width={24}
          height={24}
          className=""
        />
        <p className="text-white">
          Delivery lead time will be impacted due to COVID-19. Stay safe!
        </p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <p className="text-[#669082] px-5 ">Select Language:</p>
        <p className="text-white border-r-[1px] border-[#678B7F] px-5 cursor-pointer">
          English
        </p>
        <p className="text-[#669082] px-5 cursor-pointer">العربیہ</p>
      </div>
    </div>
  );
};

export default Top_notification;
