import { connect } from "react-redux";
import { setShowSideNav } from "../redux/nav/sideNav.actions";
import { useEffect, useRef, useState } from "react";
import BigChart from "../components/BigChart";
import TradeTable from "../components/TradeTable";
import axios from "axios";
import { toast } from "sonner";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import {
  setBitcoinData,
  setEthereumData,
  setSolanaData,
} from "../redux/coins/coin.actions";

const Trade = ({
  setShowSideNav,
  setBitcoinData,
  setEthereumData,
  setSolanaData,
  bitcoinData,
  ethereumData,
  solanaData,
  currentUser,
}) => {
  useEffect(() => {
    const fetchCoinDetails = () => {
      const solana = {
        method: "GET",
        url: "https://coinranking1.p.rapidapi.com/coins",
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          "tiers[0]": "1",
          orderBy: "marketCap",
          search: "SOLANA",
          orderDirection: "desc",
          limit: "50",
          offset: "0",
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_XRAPIDAPI_KEY,
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };
      const bitcoin = {
        method: "GET",
        url: "https://coinranking1.p.rapidapi.com/coins",
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          "tiers[0]": "1",
          orderBy: "marketCap",
          search: "BTC",
          orderDirection: "desc",
          limit: "50",
          offset: "0",
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_XRAPIDAPI_KEY,
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };
      const ethereum = {
        method: "GET",
        url: "https://coinranking1.p.rapidapi.com/coins",
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          "tiers[0]": "1",
          orderBy: "marketCap",
          "uuids[0]": "razxDUgYGNAdQ",
          orderDirection: "desc",
          limit: "50",
          offset: "0",
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_XRAPIDAPI_KEY,
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };

      axios
        .all([
          axios.request(bitcoin),
          axios.request(solana),
          axios.request(ethereum),
        ])
        .then(
          axios.spread((res1, res2, res3) => {
            setBitcoinData(res1.data.data.coins[0]);
            setSolanaData(res2.data.data.coins[0]);
            setEthereumData(res3.data.data.coins[0]);
          })
        )
        .catch((e) => {
          toast.error(
            "An error occurred while fetching data. Please try again later."
          );
          console.log(e);
        })
        .finally(() => setLoading(false));
    };
    fetchCoinDetails();
    setShowSideNav(false);
  }, []);

  const [loading, setLoading] = useState(true);
  const [detailsTab, setDetailsTab] = useState("details");
  const [buyAmount, setBuyAmount] = useState(undefined);
  const [buyTotal, setBuyTotal] = useState(undefined);
  const [sellAmount, setSellAmount] = useState(undefined);
  const [sellTotal, setSellTotal] = useState(undefined);
  const [buyLeverage, setBuyLeverage] = useState(undefined);
  const [sellLeverage, setSellLeverage] = useState(undefined);
  const [buyLoading, setBuyLoading] = useState(false);
  const [sellLoading, setSellLoading] = useState(false);
  const tabs = document.querySelectorAll(".tab");

  const setAsActive = (e) => {
    tabs.forEach((tab) => tab.classList.remove("active-tab"));
    e.target.classList.add("active-tab");
  };

  const buy = () => {
    setBuyLoading(true);
    if (buyAmount == null || buyLeverage == null) {
      setBuyLoading(false);
      return toast.error("All parameters are required to buy");
    }
    const buyOptions = {
      method: "POST",
      url: "https://proj-server-3j4y.onrender.com/user/openTrade",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.slice(18)}`,
      },
      data: {
        pair: "BTC/USD",
        type: "BUY",
        total: buyTotal,
        leverage: buyLeverage,
        entryPrice: Number(bitcoinData.price).toFixed(3),
      },
    };
    axios
      .request(buyOptions)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Buy was successful");
        }
      })
      .catch((e) => {
        if (e.response.status === 400) {
          console.log(e.response.data.message);
          return toast.error(e.response.data.message);
        }
        console.error(e);
        toast.error(
          "An error occurred while opening trade. Please try again later"
        );
      })
      .finally(() => setBuyLoading(false));
  };

  const sell = () => {
    setSellLoading(true);
    if (sellAmount === null || sellLeverage === null) {
      setSellLoading(false);
      return toast.error("All parameters are required to sell");
    }
    const buyOptions = {
      method: "POST",
      url: "https://proj-server-3j4y.onrender.com/user/openTrade",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.slice(18)}`,
      },
      data: {
        pair: "BTC/USD",
        type: "SELL",
        total: sellTotal,
        leverage: sellLeverage,
        entryPrice: Number(bitcoinData.price).toFixed(3),
      },
    };
    axios
      .request(buyOptions)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Sell was successful");
        }
      })
      .catch((e) => {
        if (e.response.status === 400) {
          console.log(e.response.data.message);
          return toast.error(e.response.data.message);
        }
        console.error(e);
        toast.error(
          "An error occurred while opening trade. Please try again later"
        );
      })
      .finally(() => setSellLoading(false));
  };

  return (
    <div className="p-2 flex flex-col ">
      <h1 className="text-2xl font-montserrat font-bold dark:text-[#cccccc] p-3 flex items-center gap-5">
        Live Trade (BTC/USD)
      </h1>
      <div className="md:h-[610px] h-[70vh] overflow-y-hidden flex justify-between">
        <BigChart />
      </div>
      {loading ? (
        <div className="">
          <div className="newtons-cradle mx-auto">
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-5">
          <div className="bg-white md:w-1/3 dark:bg-[#191d2b] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3">
            <div className="text-center">
              <div className="text-left flex gap-3 mb-3">
                <p
                  className="active-tab dark:text-[#a6afce] tab cursor-pointer p-2 rounded-sm"
                  onClick={(e) => {
                    setDetailsTab("details");
                    setAsActive(e);
                  }}
                >
                  Details
                </p>
                <p
                  className="dark:text-[#a6afce] tab cursor-pointer p-2 rounded-sm"
                  onClick={(e) => {
                    setDetailsTab("pairs");
                    setAsActive(e);
                  }}
                >
                  Markets
                </p>
              </div>
              {detailsTab === "details" ? (
                <div className="">
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <img src={bitcoinData.iconUrl} alt="" className="w-8" />
                    <p>BTC/USD</p>
                  </div>
                  <h1 className="text-3xl flex items-center justify-center gap-2">
                    ${Number(bitcoinData.price).toFixed(3)}{" "}
                    {bitcoinData.change.charAt(0) === "-" ? (
                      <span className="text-red-500 text-sm flex items-center">
                        <FaCaretDown />
                        {bitcoinData.change}%
                      </span>
                    ) : (
                      <span className="text-green-500 text-sm flex items-center">
                        <FaCaretUp />
                        {bitcoinData.change}%
                      </span>
                    )}
                  </h1>
                  <div className="text-left mt-4">
                    <div className="flex p-3 itemx-center justify-between">
                      <p>Market Cap: </p>
                      <p>${Number(bitcoinData.marketCap)}</p>
                    </div>
                    <div className="flex p-3 itemx-center justify-between">
                      <p>24h Volume: </p>
                      <p>${Number(bitcoinData["24hVolume"])}</p>
                    </div>
                    <div className="flex p-3 itemx-center justify-between">
                      <p>Low Volume: </p>
                      <p>{String(bitcoinData.lowVolume)}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <table className="w-full">
                    <thead>
                      <tr className="">
                        <th className="text-left">Pairs</th>
                        <th>Price</th>
                        <th className="text-right">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-sm details cursor-pointer hover:bg-slate-700">
                        <td className="text-left flex py-3 items-center">
                          <TiStarFullOutline />
                          BTC/USD
                        </td>
                        <td>${Number(bitcoinData.price).toFixed(3)}</td>
                        <td className="text-right">
                          {bitcoinData.change.charAt(0) === "-" ? (
                            <span className="text-red-500 justify-end flex items-center">
                              <FaCaretDown />
                              {bitcoinData.change}%
                            </span>
                          ) : (
                            <span className="text-green-500 justify-end flex items-center">
                              <FaCaretUp />
                              {bitcoinData.change}%
                            </span>
                          )}
                        </td>
                      </tr>
                      <tr className="text-sm details cursor-pointer hover:bg-slate-700">
                        <td className="text-left py-3 flex items-center">
                          <TiStarFullOutline />
                          ETH/USD
                        </td>
                        <td>${Number(ethereumData.price).toFixed(3)}</td>
                        <td className="text-right">
                          {ethereumData.change.charAt(0) === "-" ? (
                            <span className="text-red-500 justify-end flex items-center">
                              <FaCaretDown />
                              {ethereumData.change}%
                            </span>
                          ) : (
                            <span className="text-green-500 justify-end flex items-center">
                              <FaCaretUp />
                              {ethereumData.change}%
                            </span>
                          )}
                        </td>
                      </tr>
                      <tr className="text-sm details cursor-pointer hover:bg-slate-700">
                        <td className="text-left py-3 flex items-center">
                          <TiStarFullOutline />
                          SOL/USD
                        </td>
                        <td>${Number(solanaData.price).toFixed(3)}</td>
                        <td className="text-right">
                          {solanaData.change.charAt(0) === "-" ? (
                            <span className="text-red-500 justify-end flex items-center">
                              <FaCaretDown />
                              {solanaData.change}%
                            </span>
                          ) : (
                            <span className="text-green-500 justify-end flex items-center">
                              <FaCaretUp />
                              {solanaData.change}%
                            </span>
                          )}
                        </td>
                      </tr>
                      <tr className="text-sm details cursor-pointer hover:bg-slate-700">
                        <td className="text-left py-3 flex items-center">
                          <TiStarFullOutline />
                          ETH/SOL
                        </td>
                        <td>
                          $
                          {(
                            Number(ethereumData.price) /
                            Number(solanaData.price)
                          ).toFixed(3)}
                        </td>
                        <td className="text-right">
                          {ethereumData.change.charAt(0) === "-" ? (
                            <span className="text-red-500 justify-end flex items-center">
                              <FaCaretDown />
                              {ethereumData.change}%
                            </span>
                          ) : (
                            <span className="text-green-500 justify-end flex items-center">
                              <FaCaretUp />
                              {ethereumData.change}%
                            </span>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white dark:bg-[#191d2b] border-[2px] rounded-md dark:border-[#1f1f1f] flex flex-col gap-5 md:gap-0  flex-grow border-[#f1f1f1] p-3">
            <div className="flex justify-between bg-[#f1f1f1] dark:bg-[#303444] p-2 mb-2 rounded-sm">
              <p>Available USD: </p>
              <p>${currentUser.wallets[0].availableBalance.toFixed(4)}</p>
            </div>
            <div className="flex md:flex-row flex-col gap-10">
              <div className="md:w-1/2 md:border-r-[2px] px-2 dark:border-[#3b3b3b] border-[#f1f1f1]">
                <div className="w-full border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] flex items-center p-1 rounded-md justify-between">
                  <p className="text-sm">Price</p>
                  <input
                    type="text"
                    readOnly
                    value={Number(bitcoinData.price).toFixed(3)}
                    className="w-full p-2 text-right rounded-md bg-transparent outline-none"
                  />
                  <p className="text-sm">USD</p>
                </div>
                <div className="w-full border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] flex items-center p-1 rounded-md justify-between">
                  <p className="text-sm">Amount</p>
                  <input
                    type="number"
                    placeholder="10-100,000"
                    value={buyAmount}
                    onChange={(e) => {
                      setBuyAmount(e.target.value);
                      setBuyTotal(
                        e.target.value * Number(bitcoinData.price).toFixed(3)
                      );
                    }}
                    className="w-full p-2 text-right rounded-md bg-transparent outline-none"
                  />
                  <p className="text-sm">BTC</p>
                </div>
                <div className="w-full border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] flex items-center p-1 rounded-md justify-between">
                  <p className="text-sm">Leverage</p>
                  <input
                    type="text"
                    placeholder="1-100"
                    value={buyLeverage}
                    onChange={(e) => setBuyLeverage(e.target.value)}
                    className="w-full p-2 text-right rounded-md bg-transparent outline-none"
                  />
                  <p className="text-sm">%</p>
                </div>
                <div className="w-full border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] flex items-center p-1 rounded-md justify-between">
                  <p className="text-sm">Total</p>
                  <input
                    type="text"
                    placeholder="0.00"
                    readOnly
                    value={buyTotal}
                    className="w-full p-2 text-right rounded-md bg-transparent outline-none"
                  />
                  <p className="text-sm">USD</p>
                </div>
                <div className="mt-3">
                  <button
                    className="w-full bg-green-700 text-white hover:bg-green-500 p-2 rounded-md flex justify-center items-center gap-2"
                    onClick={() => buy()}
                  >
                    <p>Buy</p>
                    {buyLoading ? <div className="loader"></div> : null}
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 px-2">
                <div className="w-full border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] flex items-center p-1 rounded-md justify-between">
                  <p className="text-sm">Price</p>
                  <input
                    type="text"
                    readOnly
                    value={Number(bitcoinData.price).toFixed(3)}
                    className="w-full p-2 text-right rounded-md bg-transparent outline-none"
                  />
                  <p className="text-sm">USD</p>
                </div>
                <div className="w-full border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] flex items-center p-1 rounded-md justify-between">
                  <p className="text-sm">Amount</p>
                  <input
                    type="text"
                    placeholder="10-100,000"
                    value={sellAmount}
                    onChange={(e) => {
                      setSellAmount(e.target.value);
                      setSellTotal(
                        e.target.value * Number(bitcoinData.price).toFixed(3)
                      );
                    }}
                    className="w-full p-2 text-right rounded-md bg-transparent outline-none"
                  />
                  <p className="text-sm">BTC</p>
                </div>
                <div className="w-full border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] flex items-center p-1 rounded-md justify-between">
                  <p className="text-sm">Leverage</p>
                  <input
                    type="number"
                    placeholder="1-100"
                    value={sellLeverage}
                    onChange={(e) => setSellLeverage(e.target.value)}
                    className="w-full p-2 text-right rounded-md bg-transparent outline-none"
                  />
                  <p className="text-sm">%</p>
                </div>
                <div className="w-full border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] flex items-center p-1 rounded-md justify-between">
                  <p className="text-sm">Total</p>
                  <input
                    type="text"
                    placeholder="0.00"
                    value={sellTotal}
                    className="w-full p-2 text-right rounded-md bg-transparent outline-none"
                  />
                  <p className="text-sm">USD</p>
                </div>
                <div className="mt-3">
                  <button
                    className="w-full hover:bg-red-500 text-white bg-red-700 p-2 rounded-md flex justify-center items-center gap-2"
                    onClick={() => sell()}
                  >
                    <p>Sell</p>
                    {sellLoading ? <div className="loader"></div> : null}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-10">
        <div className="">
          <h1 className="font-inter text-xl mb-3 font-bold dark:text-[#cccccc]">
            Recent Orders:
          </h1>
          <TradeTable />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setShowSideNav: (value) => dispatch(setShowSideNav(value)),
  setBitcoinData: (data) => dispatch(setBitcoinData(data)),
  setSolanaData: (data) => dispatch(setSolanaData(data)),
  setEthereumData: (data) => dispatch(setEthereumData(data)),
});

const mapStateToProps = (state) => ({
  bitcoinData: state.coins.bitcoinData,
  solanaData: state.coins.solanaData,
  ethereumData: state.coins.ethereumData,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Trade);
