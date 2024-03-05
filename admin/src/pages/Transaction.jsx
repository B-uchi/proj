import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const verifyDeposit = async (transactionId) => {
    const prompt = window.confirm(
      "Are you sure you want to verify this deposit?"
    );
    if (prompt) {
      const requestOptions = {
        method: "POST",
        url: "http://localhost:8080/admin/verifyDeposit",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.slice(18)}`,
        },
        data: {
          transactionId,
        },
      };
      await axios
        .request(requestOptions)
        .then((response) => {
          if (response.status === 200) {
            toast.success("Transaction verified successfully");
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error("An error occurred. Please try again later.");
        });
    }
  };

  useEffect(() => {
    const getTransactions = async () => {
      const requestOptions = {
        method: "GET",
        url: "http://localhost:8080/admin/getTransactions",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.slice(18)}`,
        },
      };
      await axios
        .request(requestOptions)
        .then((response) => {
          if (response.status === 200) {
            setTransactions(response.data.transactions);
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
    getTransactions();
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
    <div className="">
      <Navbar />
      <div className="">
        <Toaster position="top-right" richColors/>
        <div className=" border-[2px] p-3 rounded-md border-[#f1f1f1]">
          <h1 className="font-montserrat font-bold text-lg">All Users</h1>
          <div className="p-2 h-full w-[600px] md:w-full overflow-x-scroll">
            <table className="table-auto w-full">
              <thead className="">
                <tr
                  className="flex justify-between border-b-[1px] 
             border-black"
                >
                  <th className="p-2 w-1/6 text-left">Date</th>
                  <th className="p-2 w-1/6 text-left">Transaction Type</th>
                  <th className="p-2 w-1/6 text-left">Transaction ID</th>
                  <th className="p-2 w-1/6 text-left">Amount (BTC) </th>
                  <th className="p-2 w-1/6 text-left">Amount (USD)</th>
                  <th className="p-2 w-1/7 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions && transactions.length > 0 ? (
                  transactions.map((item) => (
                    <tr
                      key={item.transactionId}
                      className="flex justify-between items-center p-2 border-b-[1px] border-[#f1f1f1]"
                    >
                      <td className="w-1/6">
                        {item &&
                          new Date(
                            item.createdAt._seconds * 1000 +
                              Math.round(item.createdAt._nanoseconds / 1000000)
                          )
                            .toDateString()
                            .slice(4, 15)}
                      </td>
                      <td className="w-1/6 text-center">
                        {item && item.transactionType}
                      </td>
                      <td className="w-1/6 text-center">
                        {item && item.transactionId}
                      </td>
                      <td className="w-1/6 text-center">
                        {item && item.amount}
                      </td>
                      <td className="w-1/6 text-right">
                        ${item && item.amountInUSD}
                      </td>
                      <td className="w-1/6 text-right">
                        <button
                          onClick={() => {
                            verifyDeposit(item.transactionId);
                          }}
                        >
                          {item && item.status === "Completed" ? (
                            <span className="text-green-500">Completed</span>
                          ) : (
                            <span className="text-red-500">Pending</span>
                          )}
                        </button>
                      </td>
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
      </div>
    </div>
  );
};

export default Transaction;
