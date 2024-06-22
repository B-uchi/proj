import React from "react";
import { connect } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { LiaWalletSolid } from "react-icons/lia";
import { GrTransaction } from "react-icons/gr";

const SideNav = ({ currentUser }) => {
  const signOut = () =>{
    sessionStorage.clear()
    window.location.pathname = '/sign_in'
  }

  return (
    <nav
      className="bg-white p-3 h-[100vh] border-r-[1px] border-[
    #e1e1e1]"
    >
      <div className="h-full flex flex-col justify-between">
        <div className="">
          <h1 className="font-bold text-2xl text-[#5c5b5b]">Admin Dashboard</h1>
          <div className="flex items-center gap-3 mt-5">
            <CgProfile />
            <div className="flex flex-col">
              <small>
                {currentUser.firstName} {currentUser.lastName}
              </small>
              <small>{currentUser.email}</small>
            </div>
          </div>
        </div>
        <div className="">
          <ul>
            <Link to={"/"}>
              <li className="p-3 mb-2 cursor-pointer flex gap-2 items-center bg-[#efefef] rounded-md">
                <IoHomeOutline  size={20}/>
                Home
              </li>
            </Link>
            <Link to={"/users"}>
              <li className="p-3 mb-2 flex gap-2 items-center cursor-pointer bg-[#efefef] rounded-md">
                <FaUsers  size={20}/>
                Users
              </li>
            </Link>
            <Link to={"/wallets"}>
              <li className="p-3 mb-2 cursor-pointer flex gap-2 items-center bg-[#efefef] rounded-md">
                <LiaWalletSolid  size={20}/>
                Wallets
              </li>
            </Link>
            <Link to={"/transactions"}>
              <li className="p-3 mb-2 cursor-pointer flex gap-2 items-center bg-[#efefef] rounded-md">
                <GrTransaction size={20} />
                Transactions
              </li>
            </Link>
          </ul>
        </div>
        <div className="">
          <button onClick={()=>{signOut()}} className="p-5 cursor-pointer">Log Out</button>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(SideNav);
