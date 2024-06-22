import axios from "axios";
import React, { useEffect, useState } from "react";

const UsersTable = ({ full }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const path = window.location.pathname == "/" ? false : true;

  useEffect(() => {
    const getUsers = async () => {
      const requestOptions = {
        method: "GET",
        url: "http://localhost:8080/admin/getUsers",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      };
      await axios
        .request(requestOptions)
        .then((response) => {
          if (response.status === 200) {
            setUsers(response.data.users);
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error("An error occurred. Please try again later.");
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getUsers();
  }, [path]);

  return (
    <table className="table-auto w-[1200px]">
      <thead className="">
        <tr className="flex border-b-[1px] border-[#e1e1e1]">
          <th className="py-2 text-left w-[10%]">Created At</th>
          <th className="py-2 text-left w-[16%]">Name</th>
          <th className="py-2 text-left w-[22%]">Email</th>
          <th className="py-2 text-left w-[15%]">Location</th>

          <th className="py-2 text-center w-[15%]">KYC Completed</th>
          <th className="py-2 text-center w-[15%]">Registered Plan</th>
          {path && <th className="py-2 text-right flex-grow">Details</th>}
        </tr>
      </thead>
      <tbody>
        {users && users.length > 0 ? (
          users.map((user) => (
            <tr
              key={user.id}
              className="flex items-center py-2 border-b-[1px] dark:border-[#e1e1e1] border-[#f1f1f1]"
            >
              <td className="w-[10%]">
                {user &&
                  new Date(
                    user.createdAt._seconds * 1000 +
                      Math.round(user.createdAt._nanoseconds / 1000000)
                  )
                    .toDateString()
                    .slice(4, 15)}
              </td>
              <td className="w-[16%] overflow-x-hidden text-left">
                {user && user.firstName ? (
                  user.firstName + " " + user.lastName
                ) : (
                  <p className="font-bold">Profile Incomplete!</p>
                )}
              </td>
              <td className="w-[22%] text-left">{user && user.email}</td>
              <td className="w-[15%] text-left">
                {user && user.location ? (
                  user.location
                ) : (
                  <p className="font-bold">Profile Incomplete!</p>
                )}
              </td>
              <td className="w-[15%] text-center">
                {user && user.kycComplete ? "True" : "False"}
              </td>
              <td className="w-[15%] text-center">
                {user && user.currentPlan ? user.currentPlan : "None"}
              </td>
              {path && (
                <td className="flex-grow text-right">
                  <button
                    onClick={() => {}}
                    className="p-2 bg-[#345d96] rounded-lg text-[#ffffff]"
                  >
                    View
                  </button>
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr className="mx-auto flex justify-center p-3 mt-20">
            <td className="mx-auto">
              <div className="text-[#cccccc]">
                {/* <IoCloseCircleOutline size={60} className="mx-auto" /> */}
                <p>No data found</p>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UsersTable;
