import React from 'react';
import { CiLocationOn } from 'react-icons/ci';

const Popup_more = () => {
  return (
    <div className="border-[#219653] border-2 w-fit flex flex-col gap-2 p-2  h-fit min-h-[50%] bg-[#FFFFFF] rounded-lg absolute -top-36 -right-10  ">
      <p className='text-black'>Locations</p>
      <p className="whitespace-nowrap flex flex-row gap-2 items-center px-2 text-sm ">
        <span className="">
          <CiLocationOn color="#219653" />
        </span>
        <span className=" opacity-50">Southwest, Washington D.C. </span>
      </p>
      <p className="whitespace-nowrap flex flex-row gap-2 items-center px-2 text-sm ">
        <span className="">
          <CiLocationOn color="#219653" />
        </span>
        <span className=" opacity-50">East Village, New York </span>
      </p>
    </div>
  );
};

export default Popup_more;
