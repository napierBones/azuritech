'use client';
import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa6';

const User_dropdown = () => {
    const [clicked, setClicked] = useState(false);
    const toggleDropdown = () => {
        setClicked((prevClicked) => !prevClicked);
      };
  return (
    <div className="relative">
      <FaRegUser size={40} className="bg-slate-200 rounded-full p-2 cursor-pointer" onClick={toggleDropdown} />
    { clicked && <ul className="border p-5 rounded-lg absolute top-14 right-0 shadow-md">
        <li className="flex p-2 items-center justify-center gap-2">
          <FaRegUser size={15} className="" />
          <span className="whitespace-nowrap">Customer Login</span>
        </li>
        <li className="flex p-2 items-center justify-center gap-2">
          <FaUserTie size={15} className="" />
          <span className="whitespace-nowrap">Customer Login</span>
        </li>
      </ul>}
    </div>
  );
};

export default User_dropdown;
