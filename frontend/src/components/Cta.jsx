import { FiUserPlus } from "react-icons/fi";
import { FaMoneyBillWave } from "react-icons/fa";
import { PiChartLineUp } from "react-icons/pi";
import shake from "../assets/shake.png";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="relative bg-white border-y-[2px] border-[#f1f1f1] flex flex-col items-center justify-center text-black p-10">
      <div className="md:w-[80%] flex md:flex-row flex-col justify-center">
        <div className="p-3 border-b-[1px] md:border-r-[1px] border-[#2e9c5c] md:border-b-0  md:w-1/3">
          <div className="flex gap-3 mb-4 self-start">
            <FiUserPlus size={25} />
            <h1 className="font-inter text-xl">Register</h1>
          </div>
          <p>Fill in accurate details and await account creation.</p>
        </div>
        <div className="p-3 border-b-[1px] md:border-r-[1px] md:border-b-0 border-[#2e9c5c] md:w-1/3">
          <div className="flex gap-3 mb-4 self-start">
            <FaMoneyBillWave size={25} />
            <h1 className="font-inter text-xl">Deposit</h1>
          </div>
          <p>Make a deposit via bank transfer or card purchase</p>
        </div>
        <div className="p-3 md:w-1/3">
          <div className="flex gap-3 mb-4 self-start">
            <PiChartLineUp size={25} />
            <h1 className="font-inter text-xl">Invest</h1>
          </div>
          <p>
            Pick an investment market sit back and watch your finances grow.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Link to={"sign_in"}>
          <button className="hover:scale-110 transition-all bg-[#196137] text-white p-4 px-10 rounded-full shadow-lg">
            Get Started
          </button>
        </Link>
      </div>
      <div className="absolute right-0 bottom-0 w-[100px]">
        <img src={shake} alt="" />
      </div>
    </div>
  );
};

export default Cta;
