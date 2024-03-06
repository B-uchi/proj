import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TransactionsTable from "../components/TransactionsTable";
import { CiCircleCheck } from "react-icons/ci";
import { GrTransaction, GrAtm } from "react-icons/gr";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaBitcoin } from "react-icons/fa";
import { TbCurrencySolana } from "react-icons/tb";
import { FaEthereum } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import { toast, Toaster } from "sonner";
import axios from "axios";

const WalletDetails = () => {
  const location = useLocation();
  const data = location.state;

  const displayToast = (status) => {
    status === "inactive"
      ? toast.error("You need to complete KYC")
      : toast.success("Wallet Active");
  };
  const [transactions, setTransactions] = useState([]);

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
            setTransactions(
              response.data.transactions.map((item) => {
                  if (item.wallet === data.symbol){
                    return item;
                  }
              }).filter(Boolean) 
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
    <div>
      <div className="p-2 md:p-10">
        <Toaster richColors position="top-right" />
        <div className="">
          <h1 className="text-2xl font-bold dark:text-[#cccccc] flex gap-3">
            My {data.currency} Wallet{" "}
            <span
              className="text-sm cursor-pointer"
              onClick={() => displayToast(data.status.toLowerCase())}
            >
              {data.status === "Active" ? (
                <div className="border-green-600 border-[1px] p-1 rounded-lg text-green-700">
                  {data.status}
                </div>
              ) : (
                <div className="border-red-600 border-[1px] p-1 rounded-lg text-red-700">
                  {data.status}
                </div>
              )}
            </span>
          </h1>
          <small className="font-montserrat">
            View details about your {data.currency} wallet
          </small>
        </div>
        <div className="mt-10">
          <div className="mt-5 flex flex-col md:flex-row gap-5">
            <div className="mt-5 md:w-1/2 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3">
              <div className="gap-3 flex flex-col">
                <div className="flex flex-col justify-center items-center">
                  {data.symbol === "BTC" ? (
                    <FaBitcoin size={80} color="#f7931a" />
                  ) : data.symbol === "USD" ? (
                    <BiSolidDollarCircle size={80} color="#2e9c5c" />
                  ) : data.symbol === "ETH" ? (
                    <FaEthereum
                      size={80}
                      className="text-black dark:text-[#cccccc]"
                    />
                  ) : data.symbol === "LTC" ? (
                    <SiLitecoin size={80} color="#345d96" />
                  ) : (
                    <TbCurrencySolana
                      size={80}
                      className="text-black dark:text-[#cccccc]"
                    />
                  )}
                  <h1 className="font-bold text-2xl font-montserrat">
                    {data.currency}
                  </h1>
                  <p>{data.symbol}</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-full">
                    <p>Available Balance</p>
                    <input
                      type="number"
                      value={data.availableBalance.toFixed(4)}
                      readOnly
                      className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="mt-5 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3">
                <div className="flex items-center gap-2">
                  <GrTransaction />
                  <small className=" font-bold self-center dark:text-[#cccccc]">
                    Total Deposit
                  </small>
                </div>
                <p className="text-2xl">{data.totalDeposit.toFixed(4)}</p>
              </div>
              <div className="mt-5 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3">
                <div className="flex items-center gap-2">
                  <GrAtm />
                  <small className=" font-bold self-center dark:text-[#cccccc]">
                    Total Withdrawal
                  </small>
                </div>
                <p className="text-2xl">{data.totalWithdrawal.toFixed(4)}</p>
              </div>
              <div className="mt-5 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3">
                <div className="flex items-center gap-2">
                  <CiCircleCheck />
                  <small className=" font-bold self-center dark:text-[#cccccc]">
                    Total Orders
                  </small>
                </div>
                <p className="text-2xl">{data.totalOrder.toFixed(4)}</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <TransactionsTable data={transactions && transactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDetails;
