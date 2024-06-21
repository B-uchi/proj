import React, { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";

const Wallets = () => {
  const [wallets, setWallets] = useState([]);
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    const fetchWallets = async () => {
      const request = {
        url: "http://localhost:8080/admin/getWallets",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      await axios
        .request(request)
        .then((response) => {
          if (response.status == 200) {
            setWallets(response.data.wallets);
          }
        })
        .catch((error) => {
          toast.error("An error occured when fetching wallets");
          console.log(error);
        });
    };
    fetchWallets();
  }, []);
  return (
    <div className="">
      <div className="">
        <Toaster position="top-right" richColors />
        <div className="p-3 rounded-md">
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="font-montserrat font-bold text-lg -mb-2">
                All Wallets
              </h1>
              <small className="font-inter">
                All available wallets for deposit
              </small>
            </div>
            <div className="mr-10">
              <button>
                <FaPlus size={20} />
              </button>
            </div>
          </div>
          <div className="mt-10">
            {wallets && wallets.length > 0 ? (
              wallets.map((wallet) => (
                <div
                  key={wallet.walletAddress}
                  className="bg-white p-3 flex items-center rounded-md border-[1px] gap-3 border-[#e1e1e1]"
                >
                  <FaStar />
                  <div className="">
                    <p>Currency: {wallet.currency}</p>
                    <p className="text-sm">
                      Wallet Address: {wallet.walletAddress}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center">No wallets found</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallets;
