import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { toast } from "sonner";
import axios from "axios";

const TransactionsTable = () => {
  const [data, setData] = useState([]);

  const compareCreatedAt = (a, b) => {
    const dateA = new Date(
      a.createdAt._seconds * 1000 + a.createdAt._nanoseconds / 1000000
    );
    const dateB = new Date(
      b.createdAt._seconds * 1000 + b.createdAt._nanoseconds / 1000000
    );
    return dateA - dateB;
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      const requestOptions = {
        url: "https://proj-server-3j4y.onrender.com/user/getTransactions",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.slice(18)}`,
        },
      };

      await axios
        .request(requestOptions)
        .then((response) => {
          if (response.status === 200) {
            setData(
              response.data.transactions.sort(compareCreatedAt).reverse()
            );
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error("An error occurred. Please try again later.");
        });
    };
    fetchTransactions();
  }, []);
  return (
    <div className="bg-white dark:bg-[#191d2b] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] h-[50vh] overflow-y-auto">
      <div className="p-2 h-full w-[600px] md:w-full overflow-x-scroll">
        <table className="table-auto w-full">
          <thead className="">
            <tr className="flex justify-between rounded-lg border-b-[2px] dark:border-[#1f1f1f] border-[#f1f1f1]">
              <th className="p-2 w-1/6 text-left">Date</th>
              <th className="p-2 w-1/6 text-center">Tr Id</th>
              <th className="p-2 w-1/6 text-center">Currency | Type</th>
              <th className="p-2 w-1/6 text-center">Amount</th>
              <th className="p-2 w-1/7 text-left">Status</th>
              <th className="p-2 w-1/7 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item) => (
                <tr
                  key={item.id}
                  className="flex justify-between items-center p-2 border-b-[1px] dark:border-[#1f1f1f] border-[#f1f1f1]"
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
                  <td className="w-1/6 overflow-x-hidden">
                    {item && item.transactionId}
                  </td>
                  <td className="w-1/6 text-center">
                    {item && item.transactionType}
                  </td>
                  {item && item.transactionType === "Profit" ? (
                    <td className="w-1/6 text-center">
                      {item && item.amount.toFixed(4)} USD
                    </td>
                  ) : (
                    <td className="w-1/6 text-center">
                      {item && item.amount} BTC
                    </td>
                  )}
                  <td className="w-1/7">{item && item.status}</td>
                  <td className="w-1/7">
                    <button
                      onClick={() => {}}
                      className="p-2 bg-[#345d96] rounded-lg text-[#cccccc]"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="mx-auto flex justify-center p-3 mt-20">
                <td className="mx-auto">
                  <div className="text-[#cccccc]">
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

export default TransactionsTable;
