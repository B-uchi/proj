import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white flex border-green-600 border-[1px]">
      <div className="container mx-auto flex items-center gap-10 p-2 py-3">
        <Link to={"/dashboard"}>
          <h1 className="text-2xl font-bold "> Dashboard</h1>
        </Link>
        <div className="">
          <ul>
            <li className="inline-block mx-3">
              <Link to={"/transactions"}>All Transactions</Link>
            </li>
            <li className="inline-block mx-3">
              <Link to={"/wallets"}>Wallets</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
