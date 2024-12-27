'use client';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = () => {
  const [clickedStars, setClickedStars] = useState<number>(0); 

  const handleStarClick = (index: number) => {
   
    setClickedStars((prev) => (prev === index + 1 ? 0 : index + 1));
  };

  return (
    <div className="flex flex-row items-center gap-2">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          onClick={() => handleStarClick(index)} 
          color={index < clickedStars ? '#FFC107' : '#ECECEC'} 
          className="cursor-pointer"
        />
      ))}
    </div>
  );
};

export default Rating;
