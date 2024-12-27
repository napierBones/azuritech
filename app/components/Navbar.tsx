import Image from 'next/image';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import SearchInput from '@/app/components/Search_input';
import { BsCart3 } from 'react-icons/bs';
import User_dropdown from './User_dropdown';
import Navlink from './Navlink';
const Navbar = () => {
  return (
  <div className='bg-[#FFFFFF] flex flex-col'>
      <div className=" flex justify-between py-2 px-10 border-b">
        <div className=" flex items-center justify-center gap-2">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
          <button className="border-[#219653] border rounded-full px-5 py-2 flex items-center justify-center gap-3">
            <Image src="/flag.svg" alt="flag" width={20} height={20} />
            <span>Pakistan</span> <FaChevronDown size={10} />
          </button>
        </div>
  
        <div className=" flex items-center justify-center gap-4">
          <SearchInput />
          <div className=" bg-[#5ACD84] rounded-lg p-2">
            <Image src="/filter.svg" alt="cart" width={20} height={20} />
          </div>
  
          <BsCart3 size={40} className="bg-slate-200  rounded-full p-2 " />
          <User_dropdown />
        </div>
      </div>
      <Navlink/>
  </div>
  );
};

export default Navbar;
