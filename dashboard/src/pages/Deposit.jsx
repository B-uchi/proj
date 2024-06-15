import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import QRCode from "react-qr-code";

const Deposit = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    const fetchWalletAddress = async () => {
      const requestOptions = {
        url: "https://proj-server-3j4y.onrender.com/user/getWallet",
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
            setWalletAddress(response.data.wallet);
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error("An error occurred. Please try again later.");
            setTimeout(() => {
              window.location.pathname = "/dashboard";
            }, 3000);
        });
    };
    fetchWalletAddress();
  }, []);

  const createTransaction = async () => {
    setLoading(true);
    const requestOptions = {
      url: "https://proj-server-3j4y.onrender.com/user/createDepositTransaction",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.slice(18)}`,
      },
      data: {
        depositAmtInUSD: data.depositAmtInUSD - 5,
        depositAmt: data.depositAmt,
        depositMethod: data.depositMethod,
      },
    };

    await axios
      .request(requestOptions)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Transaction created successfully");
          window.location.href = "/dashboard";
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("An error occurred. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-3">
      <h1 className="text-xl">Confirm deposit of {data.depositAmt}BTC</h1>
      {page == 1 ? (
        <div className="flex justify-center">
          <div className="mt-5 w-full md:w-1/3 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-5 overflow-y-auto shadow-md flex flex-col gap-3">
            <div className="flex justify-between">
              <p>You send:</p>
              <p>{data.depositAmt} BTC</p>
            </div>
            <div className="flex justify-between">
              <p>Amount in USD:</p>
              <p>${data.depositAmtInUSD}</p>
            </div>
            <div className="flex justify-between">
              <p>Fee</p>
              <p>$5</p>
            </div>
            <div className="flex justify-between">
              <p>You are funded:</p>
              <p>{data.depositAmtInUSD - 5}</p>
            </div>
            <div className="mt-2">
              <div className="mb-3">
                <h1 className="text-xl">
                  Recieving wallet address (BTC only):
                </h1>
                <small>
                  Send your crypto to this wallet address. You will be prompted
                  for a screenshot of your transaction confirmation next
                </small>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <p className="text-sm">{walletAddress}</p>
                {walletAddress ? (
                  <QRCode value={walletAddress} />
                ) : (
                  <div className="loader"></div>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setPage(2)}
                className="bg-[#f1f1f1] dark:bg-[#1f1f1f] text-black dark:text-white px-3 py-1 rounded-md mt-5"
              >
                Confirm {loading ? <div className="loader"></div> : null}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="mt-5 w-full md:w-1/2 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-5 overflow-y-auto shadow-md flex flex-col gap-3 text-center">
            <div className="mt-2">
              <div className="">
                <h1 className="text-lg">
                  Send the transaction confirmation screenshot to{" "}
                </h1>
                <p className="text-2xl mt-2">support@tradestacknetwork.com</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => createTransaction()}
                className="bg-[#f1f1f1] dark:bg-[#1f1f1f] text-black dark:text-white px-3 py-1 rounded-md mt-3"
              >
                Done {loading ? <div className="loader"></div> : null}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deposit;
