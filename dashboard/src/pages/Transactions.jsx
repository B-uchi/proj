import { useEffect, useState } from "react";
import TransactionsTable from "../components/TransactionsTable";
import { MdOutlineFilterList } from "react-icons/md";
import axios from "axios";
import {toast} from 'sonner'

const Transactions = () => {

  return (
    <div>
      <div className="p-2 md:p-10">
        <div className="">
          <h1 className="text-2xl font-bold dark:text-[#cccccc]">
            Transactions History
          </h1>
          <small className="font-montserrat">
            View all your transaction history
          </small>
        </div>
        <div className="mt-5">
          <div className="mt-5 bg-white dark:bg-[#191d2b] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3">
            <h1 className="text-xl mb-3 font-bold dark:text-[#cccccc]">
              Filter Options
            </h1>
            <div className="flex md:flex-row flex-col gap-3">
              <div className="md:w-1/4">
                <p className="text-sm">Transaction ID</p>
                <input
                  type="text"
                  placeholder="Enter transaction ID"
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
              <div className="md:w-1/4">
                <p className="text-sm">Transaction Status</p>
                <select
                  name=""
                  id=""
                  className="p-2 mt-2 border-[1px] w-full bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                >
                  <option selected value="All">
                    All
                  </option>
                  <option value="Deposit">Pending</option>
                  <option value="Deposit">Successful</option>
                  <option value="Deposit">Rejected</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <p className="text-sm">Transaction Type</p>
                <select
                  name=""
                  id=""
                  className="p-2 mt-2 border-[1px] w-full bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                >
                  <option selected value="Deposit">
                    All
                  </option>
                  <option value="Deposit">Deposit</option>
                  <option value="Deposit">Withdrawal</option>
                </select>
              </div>
              <div className="md:w-1/4 flex">
                <button className="bg-[#2e9c5c] hover:bg-green-500 w-[50%] mx-auto text-white flex justify-center items-center gap-3 p-2 rounded-md mt-5">
                  <MdOutlineFilterList size={25} />
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <TransactionsTable/>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
