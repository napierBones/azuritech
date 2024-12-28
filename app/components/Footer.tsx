import React from 'react'
import Footer_list from './Footer_list'
import Image from 'next/image';
const list1 = [
    {
      content: 'Top Deals is an e-commerce site that connects businesses with customers by providing discounted offers, service coupons, or special offers. Top Deals brings a whole ecommerce platform for business owners and customers to save a lot of money.'
    }
  ];

const list2 = [
    {
      content: 'About Us'
    },
    {
      content: 'Privacy & Policy'
    },
    {
      content: 'Contact Us'
    },
    {
      content: 'FAQs'
    },
    {
      content: 'Terms & Conditions'
    },
  ];
const Footer = () => {
  return (
    <div className='bg-[#FFFFFF] flex md:flex-row flex-col items-start justify-center md:gap-10 gap-3 md:p-5 p-3 relative'>
        <Image src="/LogoD.png" alt="logo" width={50} height={50} className='absolute top-20 left-20'/>
        <div className="flex flex-col md:w-1/5 h-full items-start justify-start gap-5 max-md:mt-40">
            <p className="font-bold text-xl">Top Deals</p>
           <Footer_list list={list1} />
        </div>
        <div className="flex flex-col h-full md:w-1/5 items-start justify-start gap-5">
            <p className="font-bold text-xl">Our Company</p>
           <Footer_list list={list2} />
        </div>
        <div className="flex flex-col h-full md:w-1/5 items-start justify-start gap-5">
            <p className="font-bold text-xl">Our Payment Partners</p>
          <div className="flex flex-row items-center justify-start gap-5">
            <Image src="/cards.png" alt="mastercard" width={400} height={200} />
          </div>
        </div>
     
    </div>
  )
}

export default Footer