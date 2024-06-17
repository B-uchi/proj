import React from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="w-full h-[3em] mb-2 bg-white flex border-[#e1e1e1] border-b-[1px]">
      <div className="container mx-auto flex items-center gap-10 p-2 py-3">
        <div className="block md:hidden">
          <h1 className="font-bold text-2xl text-[#5c5b5b]">Admin Dashboard</h1>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
