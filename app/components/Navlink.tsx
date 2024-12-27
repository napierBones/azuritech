import React from 'react';
import { FaHome } from 'react-icons/fa';
import { GiSaloon } from 'react-icons/gi';
import { MdDining } from 'react-icons/md';
import { MdOutlineMovie } from "react-icons/md";
import { TbHomeStar } from "react-icons/tb";
const links = [
  {
    icon: FaHome,
    text: 'Home',
  },
  {
    icon: MdDining,
    text: 'Dining',
  },
  {
    icon: GiSaloon,
    text: 'Saloon/Spa',
  },
  {
    icon: MdOutlineMovie,
    text: 'Entertainment',
  },
  {
    icon: TbHomeStar,
    text: 'Home Service',
  },
];

const Navlink = () => {
  return (
    <div className="flex flex-row justify-around px-5">
      {links.map((link, index) => {
        const { icon: Icon, text } = link;
        return (
          <div
            key={index}
            className="flex gap-2 p-2 items-center justify-center"
          >
            <Icon size={20} className=" text-[#219653]" />
            <p className="uppercase font-bold">{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Navlink;
