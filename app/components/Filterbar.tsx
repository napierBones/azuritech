import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Filterbar = () => {
  return (
    <form className="flex flex-wrap items-center justify-center w-[80%] border gap-5 p-5 bg-[#FFFFFF] absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
      <select className="border rounded-lg px-4 py-2 text-gray-600 w-[30%]">
        <option>Dining</option>
        <option>Home</option>
        <option>Saloon/Spa</option>
        <option>Home Services</option>
        <option>Entertainment</option>
      </select>

      {/* Dropdown 2 */}
      <select className="border rounded-lg px-4 py-2 text-gray-600 w-[30%]">
        <option>Select All</option>
        {/* Add more options as needed */}
      </select>

      {/* Dropdown 3 */}
      <select className="border rounded-lg px-4 py-2 text-gray-600 w-[30%]">
        <option>Select Sub Category</option>
        {/* Add more options as needed */}
      </select>

      {/* Dropdown 4 */}
      <select className="border rounded-lg px-4 py-2 text-gray-600">
        <option>Lahore</option>
        {/* Add more options as needed */}
      </select>

      {/* Dropdown 5 */}
      <select className="border rounded-lg px-4 py-2 text-gray-600">
        <option>Destination</option>
        {/* Add more options as needed */}
      </select>

      {/* Search Bar */}
      <div className="flex items-center border rounded-lg px-4 py-2 w-[40%]">
        <FaSearch size={20} className="text-gray-400 mr-2 cursor-pointer" />

        <input
          type="text"
          placeholder="Search"
          className="outline-none w-full text-gray-600"
        />
      </div>

      {/* Search Button */}
      <button className="bg-[#013D29] text-white px-6 py-2 rounded-lg">
        Search
      </button>
    </form>
  );
};

export default Filterbar;
