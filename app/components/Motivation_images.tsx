import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const images = [
  {
    url: '/motivation.svg',
    text: 'Home',
    color: 'bg-[#D5F4ED]',
  },
  {
    url: '/motivation.svg',
    text: 'Dining',
    color: 'bg-[#F5E3DB]',
  },
  {
    url: '/motivation.svg',
    text: 'Saloon/Spa',
    color: 'bg-[#F5DCDC]',
  },
  {
    url: '/motivation.svg',
    text: 'Entertainment',
    color: 'bg-[#CFE9FE]',
  },
  {
    url: '/motivation.svg',
    text: 'Home Service',
    color: 'bg-[#F5E3DB]',
  },
];
const Motivation_images = () => {
  return (
    <div className="flex flex-row justify-between items-center w-[80%] p-5 mt-28">
      {images.map((image, index) => {
        const { url: link, text, color } = image;
        return (
          <div key={index} className="flex flex-col items-center justify-between gap-2 w-[10%] ">
            <div
              key={index}
              className={cn('border w-full rounded-full p-5', color)}
            >
              <Image
                src={link}
                alt={text}
                layout="responsive"
                width={20}
                height={20}
                className=""
              />
            </div>
            <p className="">{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Motivation_images;
