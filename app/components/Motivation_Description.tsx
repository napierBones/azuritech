import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const paras = [
  {
    heading: 'Amazing Last Minute Discounts',
    text: 'Get Amazing Last Minute Discounts on your favorite categories food, of beauty, getaways & more.',
    icon: '/discount.svg',
  },
  {
    heading: 'Save',
    text: 'Save Money with our deals of & offers',
    icon: '/save.svg',
  },
  {
    heading: 'Secure Payments',
    text: 'The Secure payment methods throughout the checkout process of to keep your data secure & safe.',
    icon: '/payment.svg',
  },
];

const Motivation_Description = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between justify-center items-center md:w-[80%] p-5 border-t max-md:pt-[300px]">
      {paras.map((para, index) => {
        const { heading, text, icon: Icon } = para;
        return (
          <div
        
             className={cn(
                'p-5 flex flex-row items-center justify-between gap-5 md:w-1/3 w-full h-full',
                { 'md:border-r-2 md:border-l-2': index === 1 } 
              )}
            key={index}
          >
            <div className="w-[20%] h-full flex items-center justify-center">
              <Image
                src={Icon}
                alt={heading}
                layout="responsive"
                width={50}
                height={50}
              />
            </div>
            <div className="w-[80%] flex flex-col gap-2 items-start justify-start h-full">
              <p className='font-bold text-xl md:h-22  xl:h-11  '>{heading}</p>
              <p>{text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Motivation_Description;
