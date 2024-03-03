import { MdSpaceDashboard, MdOutlineSupportAgent } from "react-icons/md";
import { IoSettingsSharp, IoPersonSharp, IoWallet } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { connect } from "react-redux";
import { setShowSideNav } from "../redux/nav/sideNav.actions";
import { useNavigate } from "react-router-dom";

const SideNav = ({ setShowSideNav }) => {
  const navigate = useNavigate();
  const setAsActive = (e) => {
    const items = document.querySelectorAll("li");
    items.forEach((item) => {
      item.classList.remove("dark:bg-[#1f1f1f]");
      item.classList.remove("bg-[#f1f1f1]");
    });
    e.target.classList.add("bg-[#f1f1f1]");
    e.target.classList.add("dark:bg-[#1f1f1f]");
  };
  return (
    <aside className="bg-white dark:bg-[#0a0a0a] dark:text-white border-r-[2px] border-[#f1f1f1] dark:border-[#1f1f1f] h-[100vh] w-full">
      <div className="">
        <div className="flex justify-around items-center h-[95px] md:h-[70px] border-b-[2px] border-[#f1f1f1] dark:border-[#1f1f1f]">
          
            <h1 className="font-montserrat font-bold text-xl">Trade Stack Network</h1>
          <button onClick={() => setShowSideNav(false)} className="md:hidden">
            <IoCloseOutline color="red" size={30} />
          </button>
        </div>
        <ul>
          <Link to={"/dashboard"}>
            <li
              onClick={(e) => {
                setAsActive(e);
                setShowSideNav(false);
              }}
              className="p-6 hover:bg-[#f1f1f1] dark:hover:bg-[#1f1f1f] cursor-pointer flex gap-2 items-center"
            >
              <MdSpaceDashboard size={25} /> Dashboard
            </li>
          </Link>
          <Link to={"/orders"}>
            <li
              onClick={(e) => {
                setAsActive(e);
                setShowSideNav(false);
              }}
              className="p-6 hover:bg-[#f1f1f1] dark:hover:bg-[#1f1f1f] cursor-pointer flex gap-2 items-center"
            >
              <BiSolidPurchaseTag size={25} /> Orders
            </li>
          </Link>
          <Link to={"/wallets"}>
            <li
              onClick={(e) => {
                setAsActive(e);
                setShowSideNav(false);
                navigate("/wallets");
              }}
              className="p-6 hover:bg-[#f1f1f1] dark:hover:bg-[#1f1f1f] cursor-pointer flex gap-2 items-center"
            >
              <IoWallet size={25} />
              My Wallets
            </li>
          </Link>
          <Link to={"/deposits"}>
            <li
              onClick={(e) => {
                setAsActive(e);
                setShowSideNav(false);
              }}
              className="p-6 hover:bg-[#f1f1f1] dark:hover:bg-[#1f1f1f] cursor-pointer flex gap-2 items-center"
            >
              <MdSpaceDashboard size={25} /> Deposits
            </li>
          </Link>
          <Link to="/withdrawals">
            <li
              onClick={(e) => {
                setAsActive(e);
                setShowSideNav(false);
              }}
              className="p-6 hover:bg-[#f1f1f1] dark:hover:bg-[#1f1f1f] cursor-pointer flex gap-2 items-center"
            >
              <MdSpaceDashboard size={25} /> Withdrawals
            </li>
          </Link>
          <Link to="/transactions">
            <li
              onClick={(e) => {
                setAsActive(e);
                setShowSideNav(false);
              }}
              className="p-6 hover:bg-[#f1f1f1] dark:hover:bg-[#1f1f1f] cursor-pointer flex gap-2 items-center"
            >
              <GrTransaction size={25} /> Transactions
            </li>
          </Link>
          <Link to={"/support"}>
            <li
              onClick={(e) => {
                setAsActive(e);
                setShowSideNav(false);
              }}
              className="p-6 hover:bg-[#f1f1f1] dark:hover:bg-[#1f1f1f] cursor-pointer flex gap-2 items-center"
            >
              <MdOutlineSupportAgent size={25} /> Support
            </li>
          </Link>
          <Link to={"/profile"} className="md:hidden">
            <li
              onClick={(e) => {
                setAsActive(e);
                setShowSideNav(false);
              }}
              className="p-6 hover:bg-[#f1f1f1] dark:hover:bg-[#1f1f1f] cursor-pointer flex gap-2 items-center"
            >
              <IoSettingsSharp size={25} /> Account Settings
            </li>
          </Link>
          <li className="p-6 hover:bg-[#f1f1f1] dark:hover:bg-[#1f1f1f] cursor-pointer flex gap-2 items-center">
            <LuLogOut size={25} /> Sign Out
          </li>
        </ul>
      </div>
    </aside>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setShowSideNav: (value) => dispatch(setShowSideNav(value)),
});

export default connect(null, mapDispatchToProps)(SideNav);
