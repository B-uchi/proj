import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const ViewUsers = ({ data }) => {
  return (
    <div className=" border-[2px] p-3 rounded-md border-[#f1f1f1]">
      <h1 className="font-montserrat font-bold text-lg">All Users</h1>
      <div className="p-2 h-full w-[600px] md:w-full overflow-x-scroll">
        <table className="table-auto w-full">
          <thead className="">
            <tr
              className="flex justify-between border-b-[1px] 
             border-black"
            >
              <th className="p-2 w-1/6 text-left">Username</th>
              <th className="p-2 w-1/6 text-left">First Name</th>
              <th className="p-2 w-1/6 text-center">Last Name</th>
              <th className="p-2 w-1/6 text-center">KYC Completed</th>
              <th className="p-2 w-1/7 text-left">Location</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item) => (
                <tr
                  key={item.id}
                  className="flex justify-between items-center p-2 border-b-[1px] border-[#f1f1f1]"
                >
                  <td className="w-1/6">{item && item.username}</td>
                  <td className="w-1/6">{item && item.firstName}</td>
                  <td className="w-1/6 text-center">{item && item.lastName}</td>
                  <td className="w-1/6 text-center">
                    {item && item.kycCompleted ? "Yes" : "No"}
                  </td>
                  <td className="w-1/7">{item && item.location}</td>
                </tr>
              ))
            ) : (
              <tr className="mx-auto flex justify-center p-3 mt-20">
                <td className="mx-auto">
                  <div className="text-black">
                    <IoCloseCircleOutline size={60} className="mx-auto" />
                    <p>No data found</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUsers;
