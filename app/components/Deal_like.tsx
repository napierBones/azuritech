"use client";
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const Deal_like = () => {
  const [liked, setLiked] = useState(false); 

  return (
    <>
      <AiOutlineHeart
        size={30}
        onClick={() => setLiked(!liked)} 
        className={cn(
          'bg-white rounded-full p-2 absolute z-10 top-2 right-2 cursor-pointer',
          { 'bg-red-600 text-white': liked } 
        )}
      />
    </>
  );
};

export default Deal_like;
