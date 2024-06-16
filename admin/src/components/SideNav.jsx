import React from "react";
import { connect } from "react-redux";

const SideNav = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <nav
      className="bg-white p-3 h-[100vh] border-r-[1px] border-[
    #e1e1e1]"
    >
      <div className="">
        <h1 className="font-bold text-2xl">Admin Dashboard</h1>
        <div className="">{currentUser.email}</div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(SideNav);
