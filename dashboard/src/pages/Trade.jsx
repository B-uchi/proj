import { connect } from "react-redux";
import { setShowSideNav } from "../redux/nav/sideNav.actions";
import { useEffect } from "react";
import BigChart from "../components/BigChart";
import TradeTable from "../components/TradeTable";

const Trade = ({ setShowSideNav }) => {
  useEffect(() => {
    setShowSideNav(false);
  }, []);
  return (
    <div className="p-2 flex flex-col ">
      <h1 className="text-2xl font-montserrat font-bold dark:text-[#cccccc] p-3 flex items-center gap-5">
        Live Trade
      </h1>
      <div className="h-[610px] overflow-y-hidden flex justify-between">
        <BigChart />
        <div className="flex-grow flex flex-col gap-3">
          <div className="bg-[#191d2b] p-3 rounded-lg h-1/2 text-xl font-bold">
            <h1>Trade Markets</h1>
          </div>
          <div className="bg-[#191d2b] p-3 rounded-lg h-1/2 text-xl font-bold">
            <h1>Orders</h1>
          </div>
        </div>
      </div>
      <div className="mt-10 md:w-1/2">
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
});

export default connect(null, mapDispatchToProps)(Trade);
