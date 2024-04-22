import { connect } from "react-redux";
import { setShowSideNav } from "../redux/nav/sideNav.actions";
import { useEffect, useState } from "react";
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
  bitcoinData,ethereumData, solanaData
}) => {
  const [loading, setLoading] = useState(true);
  const [detailsTab, setDetailsTab] = useState("details");
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
                  className="underline underline-offset-[12px] text-[#bcc0ce] cursor-pointer hover:bg-slate-400 p-2 rounded-sm"
                  onClick={() => setDetailsTab("details")}
                >
                  Details
                </p>
                <p
                  className="text-[#a6afce] cursor-pointer hover:bg-slate-400 p-2 rounded-sm"
                  onClick={() => setDetailsTab("pairs")}
                >
                  Markets
                </p>
              </div>
              {detailsTab === "details" ? (
                <div className="">
                  {" "}
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
                      <p>Volume: </p>
                      <p>${Number(bitcoinData["24hVolume"])}</p>
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
                        <td className="text-left flex py-3 items-center"><TiStarFullOutline/>BTC/USD</td>
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
                        <td className="text-left py-3 flex items-center"><TiStarFullOutline/>ETH/USD</td>
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
                        <td className="text-left py-3 flex items-center"><TiStarFullOutline/>SOL/USD</td>
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
                        <td className="text-left py-3 flex items-center"><TiStarFullOutline/>ETH/SOL</td>
                        <td>${(Number(ethereumData.price)/Number(solanaData.price)).toFixed(3)}</td>
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
          <div className="bg-white dark:bg-[#191d2b] border-[2px] rounded-md dark:border-[#1f1f1f] flex-grow border-[#f1f1f1] p-3">
            fhrt
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Trade);
