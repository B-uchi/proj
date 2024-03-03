import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const TransactionsTable = ({ data }) => {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] h-[50vh] overflow-y-auto">
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
                    {item && new Date(
                      item.createdAt._seconds * 1000 +
                        Math.round(item.createdAt._nanoseconds / 1000000)
                    )
                      .toDateString()
                      .slice(4, 15)}
                  </td>
                  <td className="w-1/6 overflow-x-hidden">{item && item.transactionId}</td>
                  <td className="w-1/6 text-center">{item && item.transactionType}</td>
                  <td className="w-1/6 text-center">
                    {item && item.amount}BTC
                  </td>
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
