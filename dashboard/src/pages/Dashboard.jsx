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
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ currentUser }) => {
  const [kycBanner, showKycBanner] = useState(true);
  const [showWithdrawalConversion, setShowWithdrawalConversion] =
    useState(false);
  const [withdrawalAmt, setWithdrawalAmt] = useState(0);
  const [withdrawalAmtInBtc, setWithdrawalAmtInBtc] = useState(0);
  const [withdrawalMethod, setWithdrawalMethod] = useState("none");
  const [btcRate, setBtcRate] = useState(null);
  const [depositMethod, setDepositMethod] = useState("none");
  const [selectedPlan, setSelectedPlan] = useState("none");
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBitcoinPrice();
    getPlanData();
  }, []);

  const getBitcoinPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      const bitcoinPriceUSD = response.data.bitcoin.usd;
      setBtcRate(bitcoinPriceUSD);
      return;
    } catch (error) {
      console.error("Error fetching Bitcoin price:", error);
      return null;
    }
  };

  const getPlanData = () => {
    const requestOptions = {
      url: "http://localhost:8080/user/getPlans",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.slice(18)}`,
      },
    };
    axios
      .request(requestOptions)
      .then((response) => {
        setPlans(response.data.plans["planArray"]);
      })
      .catch((e) => console.log(e));
  };

  const navitagteToPage = (item) => {
    if (currentUser.currentPlan) {
      return toast.error(
        "Please contact support to terminate your current plan."
      );
    }
    if (depositMethod === "none") {
      return toast.error("Please select a deposit method");
    }
    if (selectedPlan == "none") {
      return toast.error("Please enter a valid amount");
    }
    navigate("/user/deposit", {
      state: { selectedPlan, depositMethod, plans, btcPrice: btcRate },
    });
  };

  const navigateToWithdrawPage = () => {
    if (withdrawalMethod === "none") {
      return toast.error("Please select a withdrawal method");
    }
    if (withdrawalAmt == 0) {
      return toast.error("Please enter a valid amount");
    }
    navigate("/user/withdraw", {
      state: { withdrawalAmt, withdrawalAmtInBtc, withdrawalMethod },
    });
  };

  let accountBalance = 0;
  currentUser &&
    currentUser.wallets.forEach((element) => {
      accountBalance += element.availableBalance;
    });

  return (
    <div>
      <div className="p-2 md:p-10">
        <div className="">
          <h1 className="text-2xl font-montserrat font-bold dark:text-[#cccccc] flex items-center gap-5">
            My Dashboard{" "}
          </h1>
        </div>
        <div className="mt-5">
          {kycBanner & !currentUser.kycComplete ? (
            <div className="border-red-700 border-[1px] z-30 p-3 rounded-sm relative">
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
          ) : null}
          <div className="bg-white dark:bg-[#191d2b] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3">
            <div className="">
              <h1 className="font-inter font-bold dark:text-[#cccccc]">
                Earnings Overview
              </h1>
              <small>Started on: {currentUser.activePlan.startDate}</small>
            </div>
            {currentUser.currentPlan ? (
              <div className="mt-2 flex lg:flex-row flex-col items-center lg:items-start text-center lg:text-left gap-2 justify-between">
                <div className="">
                  <small>Plan Name:</small>
                  <h1 className="font-bold text-2xl">
                    {currentUser.currentPlan}
                  </h1>
                </div>
                <div className="">
                  <small>Trading Period:</small>
                  <h1 className="font-bold text-2xl">
                    {plans.map((plan) => {
                      if (plan.name === currentUser.currentPlan)
                        return plan.period;
                    })}{" "}
                    days
                  </h1>
                </div>
                <div className="">
                  <small>Estimated Returns:</small>
                  <h1 className="font-bold text-2xl">
                    {plans.map((plan) => {
                      if (plan.name === currentUser.currentPlan)
                        return plan.roi[0]
                          ? plan.roi[0] + "-" + plan.roi[1]
                          : plan.roi;
                    })}
                    %
                  </h1>
                </div>
                <div className="mr-3">
                  <small>Profit:</small>
                  <h1 className="font-bold text-2xl">
                    ${currentUser.activePlan.earnings}
                  </h1>
                </div>
              </div>
            ) : (
              <div className="mt-3">
                Make an investment deposit to see more insight.
              </div>
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="mt-5 md:w-1/3 bg-white dark:bg-[#191d2b] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3 h-[40vh] overflow-y-auto shadow-md">
              <div className="">
                <h1 className="font-inter font-bold dark:text-[#cccccc]">
                  Wallet Overview
                </h1>
                <small className="font-montserrat">
                  An overview of all wallets
                </small>
              </div>
              <div className="mt-4 text-center">
                <h1 className="text-4xl">{accountBalance.toFixed(4)}</h1>
                <small>Account Balance</small>
              </div>
              <div className="mt-3 dark:text-[#cccccc] text-black p-3">
                <p>Available wallets:</p>
                {currentUser &&
                  currentUser.wallets.map((item) => (
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
                        <span className="block text-sm">
                          Available balance:
                        </span>
                        {item.availableBalance.toFixed(4)}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="mt-5 md:w-1/3 bg-white dark:bg-[#191d2b] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3 overflow-y-auto shadow-md">
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
                    value={depositMethod}
                    onChange={(e) => setDepositMethod(e.target.value)}
                    className="p-2 mt-2 border-[1px] w-full bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                  >
                    <option value="none" disabled>
                      None
                    </option>
                    <option value="Crypto Transfer">Crypto Transfer</option>
                  </select>
                </div>
                <div className="mt-2">
                  <p className="text-sm">Investment Plan</p>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="p-2 mt-2 border-[1px] w-full bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                  >
                    <option value="none" disabled>
                      None
                    </option>
                    {plans.map((plan, index) => (
                      <option key={plan.name} value={index}>
                        {plan.name} (${plan.minimumDeposit} - $
                        {plan.maximumDeposit})
                      </option>
                    ))}
                  </select>
                </div>
                {/* <div className="mt-2">
                  <p className="text-sm">Amount (in BTC)</p>
                  <input
                    type="number"
                    placeholder="Enter Deposit Amount"
                    value={depositAmt}
                    onChange={(e) => {
                      setDepositAmt(e.target.value);
                      setShowConversion(true);
                      setDepositAmtInUSD((e.target.value * btcRate).toFixed(2));
                    }}
                    className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                  />
                  {showConversion && depositAmt != "" && depositAmt != 0 ? (
                    <div className="mt-2 flex items-center gap-2">
                      <p className="text-sm">
                        {depositAmt}Btc = ${depositAmtInUSD - 5} + $5(fees)
                      </p>
                    </div>
                  ) : null}
                </div> */}
                <div className="mt-3 flex">
                  <button
                    onClick={() => navitagteToPage()}
                    className="bg-[#2e9c5c] hover:bg-green-500 mx-auto p-2 px-3 rounded-md text-white"
                  >
                    Deposit
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 md:w-1/3 bg-white dark:bg-[#191d2b] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3 overflow-y-auto shadow-md">
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
                    value={withdrawalMethod}
                    onChange={(e) => setWithdrawalMethod(e.target.value)}
                    className="p-2 mt-2 border-[1px] w-full bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                  >
                    <option value="none" disabled>
                      None
                    </option>
                    <option value="Crypto Transfer">
                      Crypto Transfer (BTC)
                    </option>
                  </select>
                </div>
                <div className="mt-2">
                  <p className="text-sm">Amount (in dollar)</p>
                  <input
                    type="number"
                    value={withdrawalAmt}
                    onChange={(e) => {
                      setWithdrawalAmt(e.target.value);
                      setWithdrawalAmtInBtc(
                        (withdrawalAmt / btcRate).toFixed(5)
                      );
                      setShowWithdrawalConversion(true);
                    }}
                    placeholder="Enter Amount"
                    className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                  />
                  {showWithdrawalConversion &&
                  withdrawalAmt != "" &&
                  withdrawalAmt != 0 ? (
                    <div className="mt-2 flex items-center gap-2">
                      <p className="text-sm">
                        ${withdrawalAmt} ={" "}
                        {(withdrawalAmt / btcRate).toFixed(5)}BTC
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="mt-3 flex">
                  <button
                    onClick={() => navigateToWithdrawPage()}
                    className="bg-[#345d96] mx-auto p-2 px-3 rounded-md text-white"
                  >
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
              <DepositTable />
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Dashboard);
