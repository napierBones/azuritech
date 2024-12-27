'use client';
import React, { useState } from 'react';
import Popup_more from './Popup_more';

const Popup_more_button = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" text-[#219653]  cursor-pointer underline relative" onClick={() => setIsOpen(!isOpen)}>
      +2 more
      {isOpen && <Popup_more />}
    </div>
  );
};

export default Popup_more_button;
