import { IoCloseCircleOutline } from "react-icons/io5";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaBitcoin } from "react-icons/fa";
import { TbCurrencySolana } from "react-icons/tb";
import { FaEthereum } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { data } from "../util/dummyWalletData";

const WalletTable = ({ currentUser }) => {
  const navigate = useNavigate();
  const navitagteToPage = (item) => {
    navigate(`/wallets/${item.symbol.toLowerCase()}`, { state: item });
  };
  return (
    <div className="bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] h-fit overflow-y-auto">
      <div className="p-3 h-full w-[150vw] md:w-full">
        <table className="w-full">
          <thead className="">
            <tr className="w-full">
              <th className="p-3 text-left">Currency | Coin</th>
              <th className="p-3">Available Balance</th>
              <th className="p-3 ">Total Balance</th>
              <th className="p-3 ">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUser.wallets && currentUser.wallets.length > 0 ? (
              currentUser.wallets.map((item) => (
                <tr
                  key={item.currency}
                  className="p-10 border-b-[1px] dark:border-[#1f1f1f] border-[#f1f1f1]"
                >
                  <td className="p-2">
                    <div className="flex items-center gap-2 py-5">
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
                  </td>
                  <td className="p-2 text-center">
                    {item.availableBalance.toFixed(4)}
                  </td>
                  <td className="p-2 text-center">
                    {item.totalBalance.toFixed(4)}
                  </td>
                  <td className="p-2 text-sm text-center ">
                    {item.status === "Active" ? (
                      <div className="border-green-600 border-[1px] p-2 rounded-lg text-green-700">
                        {item.status}
                      </div>
                    ) : (
                      <div className="border-red-600 border-[1px] p-2 rounded-lg text-red-700">
                        {item.status}
                      </div>
                    )}
                  </td>
                  <td className="p-2 text-center text-sm">
                    <button
                      onClick={() => navitagteToPage(item)}
                      className="p-2 bg-[#345d96] rounded-lg text-[#cccccc]"
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
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(WalletTable);
