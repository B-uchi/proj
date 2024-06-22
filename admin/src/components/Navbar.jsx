import React from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = ({ setShowSideNav }) => {
  return (
    <nav className="w-full h-[7vh] bg-white flex border-[#e1e1e1] border-b-[1px]">
      <div className="container mx-auto flex items-center gap-10 p-2 py-3">
        <div className=" md:hidden flex gap-3 items-center">
          <button onClick={() => setShowSideNav(true)}>
            <IoMenu size={25} />
          </button>
          <h1 className="font-bold text-2xl text-[#5c5b5b]">Admin Dashboard</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
