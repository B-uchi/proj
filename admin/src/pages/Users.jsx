import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import UsersTable from "../components/UsersTable";

const Users = () => {
  // if (loading) {
  //   return (
  //     <div className="">
  //       <Toaster richColors position="top-right" />
  //       <div className="newtons-cradle absolute left-[50%] top-[50vh]">
  //         <div className="newtons-cradle__dot"></div>
  //         <div className="newtons-cradle__dot"></div>
  //         <div className="newtons-cradle__dot"></div>
  //         <div className="newtons-cradle__dot"></div>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className="">
      <div className="">
        <Toaster position="top-right" richColors />
        <div className="p-3 rounded-md">
          <h1 className="font-montserrat font-bold text-lg">All Users</h1>
          <div className="p-2 h-full w-[600px] md:w-full overflow-x-scroll">
            <UsersTable/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Users;
