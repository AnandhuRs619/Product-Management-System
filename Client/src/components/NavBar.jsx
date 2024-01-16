import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom"
// import { Box, Flex, Input, Button } from '@chakra-ui/react';


const NavBar = () => {
    return (
        <>
        <div className="bg-[#003F62]">
          <div className="w-[75%] mx-auto h-[90px] mt-4 flex items-center justify-between">
            <div className="w-full" >
              <div className="flex items-center justify-center  ">
                <h1>My App</h1>
                <div className="bg-white w-[280px] p-2 rounded relative">
                  <input
                    className="border-none w-full"
                    type="text"
                    placeholder="Search anything"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center justify-center bg-[#EDA415] w-[60px] rounded-bl-md">
                    <button>Search</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right flex gap-x-3">
             
  
             
            </div>
          </div>
        </div>
        {/* <Single whishlist={isWhishlist} /> */}
      </>
      );
    };
    

export default NavBar