import React from "react";
// import { FaBitcoin, FaUser } from "react-icons/fa";
// import { FaMoneyBillTransfer, FaWallet } from "react-icons/fa6";
// import { GrTransaction } from "react-icons/gr";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";
import TransactionTable from "../components/TransactionTable";
import UsersTable from "../components/UsersTable.jsx";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalDeposit: 0,
    totalBTCDeposit: 0,
    totalUsers: 0,
    activeWallets: 0,
    pendingTransactions: 0,
  });
  const [loading, setLoading] = useState(true);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const getUsers = async () => {
      const requestOptions = {
        method: "GET",
        url: "http://localhost:8080/admin/getUsers",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
    const getStats = async () => {
      const requestOptions = {
        method: "GET",
        url: "http://localhost:8080/admin/getStats",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      };
      await axios
        .request(requestOptions)
        .then((response) => {
          if (response.status === 200) {
            setStats(response.data);
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
    getStats();
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
      <Toaster richColors position="top-right" />
      <div className="p-3 h-[93vh]">
        <div className="">
          <h1 className="font-bold text-2xl">Overview</h1>
          <small>An overview of the admin dashboard</small>
        </div>
        <div className="flex lg:flex-row flex-col w-full mt-8 gap-2 lg:gap-5">
          <div className="p-2 border-[1px] border-[#efefef] rounded-md bg-white lg:w-1/5">
            <small>Total Deposit:</small>
            <h1 className="text-2xl">${stats.totalDeposit.toFixed(4)}</h1>
          </div>
          <div className="p-2 border-[1px] border-[#efefef] rounded-md bg-white lg:w-1/5">
            <small>Total BTC:</small>
            <h1 className="text-2xl">{stats.totalBTCDeposit.toFixed(4)} BTC</h1>
          </div>
          <div className="p-2 border-[1px] border-[#efefef] rounded-md bg-white lg:w-1/5">
            <small>Total Users:</small>
            <h1 className="text-2xl">{stats.totalUsers}</h1>
          </div>
          <div className="p-2 border-[1px] border-[#efefef] rounded-md bg-white lg:w-1/5">
            <small>Pending Transactions:</small>
            <h1 className="text-2xl">{stats.pendingTransactions}</h1>
          </div>
          <div className="p-2 border-[1px] border-[#efefef] rounded-md bg-white lg:w-1/5">
            <small>Active Wallets:</small>
            <h1 className="text-2xl">{stats.activeWallets}</h1>
          </div>
        </div>
        <div className="w-full mt-5 flex gap-5">
          <div className="w-1/2">
            <h1 className="font-bold text-xl">Transactions:</h1>
            <div className="bg-white border-[1px] border-[#efefef] rounded-md">
              <TransactionTable />
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="font-bold text-xl">Users:</h1>
            <div className="bg-white border-[1px] border-[#efefef] rounded-md">
              <UsersTable/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
