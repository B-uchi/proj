import { data } from "../util/dummyWalletData";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaBitcoin } from "react-icons/fa";
import { TbCurrencySolana } from "react-icons/tb";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";
import { BiLineChart } from "react-icons/bi";
import { SiLitecoin } from "react-icons/si";
import TransactionsTable from "../components/TransactionsTable";
import DepositTable from "../components/DepositTable";
import { useState } from "react";

const Dashboard = () => {
  const [kycBanner, showKycBanner] = useState(true);
  return (
    <div>
      <div className="p-10">
        <div className="">
          <h1 className="text-2xl font-montserrat font-bold dark:text-[#cccccc]">
            My Dashboard
          </h1>
        </div>
        <div className="mt-5">
          {kycBanner && (
            <div className="border-red-700 border-[1px] p-3 rounded-sm relative">
              <h1 className="text-xl text-red-600">KYC Required</h1>
              <p className="font-siliguri">
                Your account will be temporarily restricted till you complete
                KYC. Click{" "}
                <a href="user/kyc" className="underline">
                  here
                </a>{" "}
                to proceed
              </p>
              <button
                onClick={() => showKycBanner(false)}
                className="absolute top-3 right-3"
              >
                <IoCloseCircleOutline />
              </button>
            </div>
          )}
          <div className="mt-5 flex flex-col md:flex-row gap-5">
            <div className="md:w-1/4 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3 flex items-center gap-3">
              <AiOutlineLoading3Quarters color="#345d96" size={28} />
              <div className="">
                <small>Open Orders</small>
                <h1 className="text-xl">0</h1>
              </div>
            </div>
            <div className="md:w-1/4 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3 flex items-center gap-3">
              <CiCircleCheck color="green" size={30} />
              <div className="">
                <small>Closed Orders</small>
                <h1 className="text-xl">0</h1>
              </div>
            </div>
            <div className="md:w-1/4 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3 flex items-center gap-3">
              <IoCloseCircleOutline color="red" size={30} /> 
              <div className="">
                <small>Cancelled Orders</small>
                <h1 className="text-xl">0</h1>
              </div>
            </div>
            <div className="md:w-1/4 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3 flex items-center gap-3">
              <BiLineChart color="#2e9c5c" size={30} />
              <div className="">
                <small>Total Trade</small>
                <h1 className="text-xl">0</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="mt-5 md:w-1/3 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3 h-[40vh] overflow-y-auto">
              <div className="">
                <h1 className="font-inter font-bold dark:text-[#cccccc]">
                  Wallet Overview
                </h1>
                <small className="font-montserrat">
                  An overview of all wallets
                </small>
              </div>
              <div className="mt-4 text-center">
                <h1 className="text-4xl">0.0000</h1>
                <small>Total Balance</small>
              </div>
              <div className="mt-3 dark:text-[#cccccc] text-black p-3">
                <p>Available wallets:</p>
                {data.map((item) => (
                  <div
                    key={item.currency}
                    className="border-b-[1px] flex items-center dark:border-[#1f1f1f] border-[#f1f1f1] justify-between"
                  >
                    <div className="flex items-center gap-2 py-3">
                      {item.symbol === "BTC" ? (
                        <FaBitcoin size={35} color="#f7931a" />
                      ) : item.symbol === "USD" ? (
                        <BiSolidDollarCircle size={35} color="#2e9c5c" />
                      ) : item.symbol === "ETH" ? (
                        <FaEthereum
                          size={35}
                          className="text-black dark:text-[#cccccc]"
                        />
                      ) : item.symbol === "LTC" ? (
                        <SiLitecoin size={35} color="#345d96" />
                      ) : (
                        <TbCurrencySolana
                          size={35}
                          className="text-black dark:text-[#cccccc]"
                        />
                      )}
                      {item.currency}
                    </div>
                    <p className="p-2 text-right">
                      <span className="block text-sm">Available balance:</span>
                      {item.availableBalance.toFixed(4)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 md:w-1/3 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3 overflow-y-auto">
              <div className="">
                <h1 className="font-inter font-bold dark:text-[#cccccc]">
                  Deposit
                </h1>
                <small className="font-montserrat">Fund your wallets</small>
              </div>

              <div className="mt-5">
                <div className="">
                  <p className="text-sm">Deposit Method</p>
                  <select
                    name=""
                    id=""
                    className="p-2 mt-2 border-[1px] w-full bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                  >
                    <option value="Deposit" disabled selected>
                      None
                    </option>
                    <option value="Deposit">Crypto Transfer</option>
                  </select>
                </div>
                <div className="mt-2">
                  <p className="text-sm">Amount (in crypto)</p>
                  <input
                    type="text"
                    placeholder="Enter transaction ID"
                    className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                  />
                </div>
                <div className="mt-3 flex">
                  <button className="bg-[#2e9c5c] mx-auto p-2 px-3 rounded-md text-[#cccccc] ">
                    Deposit
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 md:w-1/3 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3 overflow-y-auto">
              <div className="">
                <h1 className="font-inter font-bold dark:text-[#cccccc]">
                  Withdraw
                </h1>
                <small className="font-montserrat">
                  Withdraw from your wallet balance
                </small>
              </div>
              <div className="mt-5">
                <div className="">
                  <p className="text-sm">Withdrawal Method</p>
                  <select
                    name=""
                    id=""
                    className="p-2 mt-2 border-[1px] w-full bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                  >
                    <option value="Deposit" disabled selected>
                      None
                    </option>
                    <option value="Deposit">Crypto Transfer</option>
                  </select>
                </div>
                <div className="mt-2">
                  <p className="text-sm">Amount (in dollar)</p>
                  <input
                    type="text"
                    placeholder="Enter transaction ID"
                    className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                  />
                </div>
                <div className="mt-3 flex">
                  <button className="bg-[#345d96] mx-auto p-2 px-3 rounded-md text-[#cccccc] ">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2">
              <div className="">
                <h1 className="font-inter text-xl mb-3 font-bold dark:text-[#cccccc]">
                  Recent Deposits:
                </h1>
              </div>
              <DepositTable />{" "}
            </div>
            <div className="md:w-1/2">
              <div className="">
                <h1 className="font-inter text-xl mb-3 font-bold dark:text-[#cccccc]">
                  Recent Transactions:
                </h1>
              </div>
              <TransactionsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
