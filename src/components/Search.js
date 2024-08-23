import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    

 
    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 p-2 pl-4 border-none outline-none"
      />
      <button
        className="flex items-center justify-center p-2  bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform transform hover:scale-110"
        aria-label="Search"
      >
        <IoSearch />
      </button>
      </div>
  )
}

export default Search
