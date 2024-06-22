import React from "react";
import { toast, Toaster } from "sonner";
import TransactionTable from "../components/TransactionTable";

const Transaction = () => {
   
  return (
    <div className="">
      <div className="">
        <Toaster position="top-right" richColors />
        <div className="p-3 rounded-md">
          <h1 className="font-montserrat font-bold text-lg">
            All Transactions
          </h1>
          <div className="p-2 h-full w-[600px] md:w-full overflow-x-scroll">
            <TransactionTable/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
