import React from "react";
import { IoIosMoon, IoMdSunny } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" h-10 fixed  top-0 w-full  border-b border-gray-700  ">
      <div className=" flex justify-start px-10 pt-2 font- items-center">
        <Link to="/" className="cursor-pointer">
          <h1>TaskManger</h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
