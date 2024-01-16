import React from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle } from 'react-icons/fa';

const NavBar = () => {
  return (
    <>
      <div className="bg-[#3f72ff] p-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-white text-2xl font-semibold">My App</h1>
            <div className="bg-white ml-4 p-2 rounded relative">
              <input
                className="border-none w-full"
                type="text"
                placeholder="Search anything"
              />
              <div className="absolute inset-y-0 right-0 flex items-center justify-center bg-[#EDA415] w-[60px] rounded-bl-md">
                <button className="text-white">Search</button>
              </div>
            </div>
          </div>
          <div className="text-right flex flex-col items-center md:flex-row gap-x-4">
            {/* Add Product Button */}
            <Link to="/addproductpage">
              <button className="p-2 mt-2 md:mt-0 rounded text-white shadow bg-[#EDA415] px-6 flex items-center">
                <FaPlusCircle className="mr-2" /> Add Product
              </button>
            </Link>
            {/* Add Category Button */}
            <Link to="/categorypage">
              <button className="p-2 mt-2 md:mt-0 rounded text-white shadow bg-[#EDA415] px-6 flex items-center">
                <FaPlusCircle className="mr-2" /> Add Category
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
