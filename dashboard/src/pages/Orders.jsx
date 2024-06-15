import TradeTable from "../components/TradeTable";
import TransactionsTable from "../components/TransactionsTable"
import { MdOutlineFilterList } from "react-icons/md";

const Orders = () => {
  return (
    <div>
      <div className="p-2 md:p-10">
        <div className="">
          <h1 className="text-2xl font-bold dark:text-[#cccccc]">
            My Orders
          </h1>
          <small className="font-montserrat">
            View all your orders and trade history
          </small>
        </div>
        <div className="mt-5">
          <div className="mt-5 bg-white dark:bg-[#191d2b] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3">
            <h1 className="text-xl mb-3 font-bold dark:text-[#cccccc]">
              Filter Options
            </h1>
            <div className="flex md:flex-row flex-col gap-3">
              <div className="md:w-1/4">
                <p className="text-sm">Order Parameters</p>
                <input
                  type="text"
                  placeholder="Currency | Pair "
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
              <div className="md:w-1/4">
                <p className="text-sm">Order Status</p>
                <select
                  name=""
                  id=""
                  className="p-2 mt-2 border-[1px] w-full bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                >
                  <option selected value="Deposit">
                    All
                  </option>
                  <option value="Open">Open</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <p className="text-sm">Order Type</p>
                <select
                  name=""
                  id=""
                  className="p-2 mt-2 border-[1px] w-full bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                >
                  <option selected value="All">
                    All
                  </option>
                  <option value="Buy">Buy</option>
                  <option value="Sell">Sell</option>
                </select>
              </div>
              <div className="md:w-1/4 flex">
                <button className="bg-[#2e9c5c] hover:bg-green-500 w-[50%] mx-auto text-white flex justify-center items-center gap-3 p-2 rounded-md mt-5">
                  <MdOutlineFilterList size={25}/>Filter
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <TradeTable />
        </div>
      </div>
    </div>
  )
}

export default Orders