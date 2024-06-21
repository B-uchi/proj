import { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";

const TransactionTable = () => {
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
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
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
  return (
      <table className="table-auto w-full">
        <thead className="">
          <tr className="flex justify-between border-b-[1px] border-[#e1e1e1]">
            <th className="p-2 w-1/6 text-left">Date</th>
            <th className="p-2 w-1/6 text-center">Transaction Id</th>
            <th className="p-2 w-1/6 text-center">Transaction Type</th>
            <th className="p-2 w-1/6 text-center">Amount</th>
            <th className="p-2 w-1/7 text-left">Status</th>
            <th className="p-2 w-1/7 text-left">Details</th>
          </tr>
        </thead>
        <tbody>
          {transactions && transactions.length > 0 ? (
            transactions.map((item) => (
              <tr
                key={item.transactionId}
                className="flex justify-between items-center p-2 border-b-[1px] dark:border-[#e1e1e1] border-[#f1f1f1]"
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
                  {item && item.transactionType}{" "}
                  {item.transactionType == "Deposit"
                    ? "(" + item.planName + ")"
                    : ""}
                </td>
                <td className="w-1/6 text-center">
                  ${item && item.amountInUSD}
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

export default TransactionTable;
