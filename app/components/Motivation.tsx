import React from 'react';
import Motivation_images from './Motivation_images';
import Motivation_Description from './Motivation_Description';

const Motivation = () => {
  return (
    <div className="w-full h-fit bg-[#F9F9F9] flex flex-col items-center justify-center ">
      <Motivation_images />
      <Motivation_Description/>
    </div>
  );
};

export default Motivation;
