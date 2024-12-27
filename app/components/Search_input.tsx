import { FaSearch } from 'react-icons/fa';

export default function SearchInput() {
  return (
    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white shadow-sm">
      <FaSearch size={20} className="text-gray-400 mr-2 cursor-pointer" />
      <input
        type="text"
        placeholder="Search..."
        className="outline-none w-full text-gray-700 placeholder-gray-400"
      />
    </div>
  );
}
