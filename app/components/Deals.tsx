import React from 'react';
import Deal_card from './Deal_card';
import { cn } from '@/lib/utils';
import Deal_card1 from './Deal_card1';

const Nearby_deals = [
  { image: '/p1.png', avatar: '/a1.png', class: 'w-1/3  bg-[#FFFFFF]' },
  { image: '/p2.png', avatar: '/a2.png', class: 'w-1/3  bg-[#FFFFFF]' },
  { image: '/p3.png', avatar: '/a3.png', class: 'w-1/3  bg-[#FFFFFF]' },
];

const Deals = ({ bg }: { bg: string }) => {
  return (
    <div className={cn(' flex items-center justify-center py-20', bg)}>
      <div className="w-[80%] flex flex-col gap-5 ">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-5">
            <p className="font-bold text-4xl">
              Nearby <span className="text-[#219653]">Deals</span>
            </p>
            <p className="">
              Explore nearby deals on map and buy deals to enjoy quality food
              with your family
            </p>
          </div>

          <button className="bg-[#013D29] hidden md:block rounded-full px-5 text-white py-2">
            View on Map
          </button>
        </div>
        <div className="hidden md:flex flex-row justify-between items-center gap-5">
          {Nearby_deals.map((Deal, index) => (
            <Deal_card key={index} deal={Deal} />
          ))}
        </div>
        <div className="md:hidden flex flex-col justify-between items-center">
        
           <Deal_card1 deal={Nearby_deals[0]} />
     
        </div>
      </div>
    </div>
  );
};

export default Deals;
