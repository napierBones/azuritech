import React from 'react';
import Deal_like from './Deal_like';
import Image from 'next/image';
import Rating from './Rating';
import { PiSealPercentFill } from 'react-icons/pi';
import { CiLocationOn } from 'react-icons/ci';
import Popup_more_button from './Popup_more_button';
interface NearbyDeal {
  image: string;
  avatar: string;
  class: string;
}
const Deal_card1 = ({ deal }: { deal: NearbyDeal }) => {
  return (
    <div className=" h-[500px] flex flex-col items-start justify-start border rounded-2xl overflow-hidden w-full">
      <div className="w-full h-1/2 relative">
        <Deal_like />
        <Image src={deal.image} alt="deals" fill className="object-cover" />
      </div>

      <div className="p-2 flex flex-col  h-1/2 gap-2 w-full">
        <div className="flex flex-row items-center justify-between gap-1 p-1">
          <Rating />
          <p className="whitespace-nowrap flex flex-row gap-1 items-center">
            <span>
              <PiSealPercentFill color="#219653" />
            </span>
            Flat 15% Off
          </p>
        </div>
        <p className="px-2 text-lg font-bold">Loaded Fries At Aloo Cart</p>
        <p className="whitespace-nowrap flex flex-row gap-2 items-center px-2 text-sm ">
          <span className="">
            <CiLocationOn color="#219653" />
          </span>
          <span className=" opacity-50">Pakistan, Lahore </span>
        </p>
        <div className="whitespace-nowrap flex flex-row gap-2 items-center px-2 text-sm ">
          <span className="">
            <CiLocationOn color="#219653" />
          </span>
          <span className=" opacity-50">Pakistan, Lahore </span>
          <Popup_more_button />
        </div>
        <div className="border-t  flex flex-row items-center justify-between px-2 mt-auto w-full py-5 ">
          <div className="flex flex-row gap-2">
            <Image
              src={deal.avatar}
              alt="star"
              width={30}
              height={30}
              className="rounded-full"
            />{' '}
            <p>Aloo Cart</p>
          </div>
          <button className="bg-[#219653] text-white rounded-full px-4 py-1">
            Get Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deal_card1;
