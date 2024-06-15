import React from "react";
import Navbar from "../components/Navbar";
import ViewUsers from "../components/ViewUsers";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const requestOptions = {
        method: "GET",
        url: "http://localhost:8080/admin/getUsers",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.slice(18)}`,
        },
      };
      await axios
        .request(requestOptions)
        .then((response) => {
          if (response.status === 200) {
            setUsers(response.data.users);
            console.log(response.data.users);
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
  }, []);

  if (loading) {
    return (
      <div className="">
        <Toaster richColors position="top-right" />
        <div className="newtons-cradle absolute left-[50%] top-[50vh]">
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Toaster richColors position="top-right" />
      <ViewUsers data={users} />
    </div>
  );
};

export default Dashboard;
