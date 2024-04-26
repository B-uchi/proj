import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from "axios";
import { TiStarFullOutline } from "react-icons/ti";
import { connect } from "react-redux";
import { toast } from "sonner";

const TradeTable = ({ bitcoinData }) => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cLoading, setCLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const fetchTrades = async () => {
      const options = {
        method: "GET",
        url: "http://localhost:8080/user/getTrades",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.slice(18)}`,
        },
      };
      await axios
        .request(options)
        .then((response) => {
          if (response.status === 200) {
            setData(response.data.trades);
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error("An error occurred. Please try again later.");
        });
    };
    fetchTrades();
  }, []);

  const closeTrade = async (tradeId) => {
    setLoading(true);
    const options = {
      method: "POST",
      url: "http://localhost:8080/user/closeTrade",
      data: { tradeId, exitPrice: Number(bitcoinData.price) },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.slice(18)}`,
      },
    };
    await axios
      .request(options)
      .then((response) => {
        if (response.status === 200) {
          toast.success(
            `Trade closed successfully with profit of ${response.data.profit}!`
          );
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.error(err.response.data.message);
          return console.log(err.response.data.message);
        }
        console.error(err);
        toast.error("An error occurred. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
        setShowModal(false);
      });
  };

  const cancelTrade = async (tradeId) => {
    setCLoading(true);
    const options = {
      method: "POST",
      url: "http://localhost:8080/user/cancelTrade",
      data: { tradeId },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.slice(18)}`,
      },
    };
    await axios
      .request(options)
      .then((response) => {
        if (response.status === 200) {
          toast.success(`Trade cancelled successfully!`);
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.error(err.response.data.message);
          return console.log(err.response.data.message);
        }
        console.error(err);
        toast.error("An error occurred. Please try again later.");
      })
      .finally(() => {
        setCLoading(false);
        setShowModal(false);
      });
  };

  return (
    <div className="bg-white dark:bg-[#191d2b] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] h-[50vh] overflow-y-auto">
      <div className="p-3 h-full w-[150vw] md:w-full overflow-x-auto">
        <table className="w-full">
          <thead className="">
            <tr className="border-b-[2px] dark:border-[#1f1f1f] border-[#f1f1f1]">
              <th className="p-2 text-left">Pair </th>
              <th className="p-2 text-left">Type</th>
              <th className="p-2">Entry</th>
              <th className="p-2">Leverage</th>
              <th className="p-2">Total</th>
              <th className="p-2">Profit</th>
              <th className="p-2">Status</th>
              <th className="p-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item) => (
                <tr
                  key={item.id}
                  className="border-b-[1px] dark:border-[#1f1f1f] border-[#f1f1f1]"
                >
                  <td className="p-2 ">
                    <div className="flex items-center gap-2">
                      <TiStarFullOutline /> {item.pair}
                    </div>
                  </td>
                  <td className="p-2 text-left">{item.type}</td>
                  <td className="p-2 text-center">${item.entryPrice}</td>
                  <td className="p-2 text-center">{item.leverage}%</td>
                  <td className="p-2 text-center">${item.total.toFixed(3)}</td>
                  {!item.profit ? (
                    <td className="p-2 text-center">N/A</td>
                  ) : (
                    <td className="p-2 text-center">${item.profit.toFixed(4)}</td>
                  )}
                  <td className="p-2 text-center">{item.status}</td>
                  <td className="p-2 text-right">
                    <button
                      onClick={() => {
                        setShowModal(true);
                        setSelectedId(item.id);
                      }}
                      className="p-2 bg-[#345d96] rounded-lg text-[#ffffff] hover:bg-[#1a4b8d] transition duration-300 ease-in-out focus:outline-none"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="mx-auto flex justify-center p-3 mt-20">
                <td className="mx-auto">
                  <div className="text-[#cccccc]">
                    <IoCloseCircleOutline size={60} className="mx-auto" />
                    <p>No data found</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {showModal && (
        <div className="bg-[#f1f1f1] absolute w-full top-0 h-full flex justify-center items-center bg-opacity-75">
          <div className="bg-white md:-translate-x-[50%] dark:bg-[#191d2b] border-[2px] rounded-md dark:border-[#1f1f1f] p-3 border-[#f1f1f1]">
            <h1 className="text-xl font-bold mb-2">
              Actions for selected Trade
            </h1>
            <div className="flex p-2 justify-between mb-2">
              <button
                onClick={() => {
                  closeTrade(selectedId);
                }}
                className="p-2 bg-[#345d96] rounded-lg text-[#ffffff] flex gap-2 items-center hover:bg-[#1a4b8d] transition duration-300 ease-in-out focus:outline-none"
              >
                Close Trade {loading ? <div className="loader"></div> : null}
              </button>
              <button
                onClick={() => cancelTrade(selectedId)}
                className="p-2 bg-red-600 rounded-lg text-[#ffffff] flex gap-2 items-center hover:bg-red-500 transition duration-300 ease-in-out focus:outline-none"
              >
                Cancel Trade {cLoading ? <div className="loader"></div> : null}
              </button>
            </div>
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="p-2 bg-[#345d96] rounded-lg text-[#ffffff] hover:bg-[#1a4b8d] transition duration-300 ease-in-out focus:outline-none w-full"
            >
              Close Popup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bitcoinData: state.coins.bitcoinData,
});

export default connect(mapStateToProps)(TradeTable);
