import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

const Withdraw = () => {
  const [loading, setLoading] = useState(false);
  const [userWallet, setUserWallet] = useState("");
  const location = useLocation();
  const data = location.state;

  const withdraw = async () => {
    setLoading(true);
    const requestOptions = {
      url: "https://proj-server-3j4y.onrender.com/user/withdraw",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.slice(18)}`,
      },
      data: {
        withdrawalAmt: Number(data.withdrawalAmt),
        withdrawalAmtInBtc: data.withdrawalAmtInBtc,
        userWallet: userWallet,
      },
    };

    await axios
      .request(requestOptions)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Submitted successfully!");
          setLoading(false);
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 3000);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.response.data.message || "An error occurred. Please try again later.");
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="p-3">
        <div className="flex justify-center">
          <div className="mt-5 w-full md:w-1/3 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-5 overflow-y-auto shadow-md flex flex-col gap-3">
            <h1 className="text-xl text-center mb-5">Confirm Withdrawal</h1>
            <div className="flex justify-between">
              <p>Amount in USD:</p>
              <p>${data.withdrawalAmt}</p>
            </div>
            <div className="flex justify-between">
              <p>You are sent:</p>
              <p>{data.withdrawalAmtInBtc}BTC</p>
            </div>
            <div className="mt-2">
              <div className="mb-3">
                <h1 className="text-xl">Your wallet (BTC only):</h1>
                <input
                  type="text"
                  placeholder="Enter Wallet Address"
                  value={userWallet}
                  onChange={(e) => setUserWallet(e.target.value)}
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => withdraw()}
                className="bg-[#f1f1f1] dark:bg-[#1f1f1f] text-black dark:text-white px-3 py-1 rounded-md mt-5"
              >
                Confirm {loading ? <div className="loader"></div> : null}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
