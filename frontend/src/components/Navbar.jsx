import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <nav className="w-full z-50 sticky top-0 bg-white border-[1px] border-b-[#247e49]">
      <div className="flex container items-center justify-between mx-auto p-2 py-2 md:px-3 px-5">
        <div className="font-bolder text-xl font-montserrat font-extrabold">
          <h1>SCION</h1>
        </div>
        <div className="md:block hidden">
          <ul className="flex gap-7 items-center">
            <Link to={"/"}>
              <MenuItem text="Home" />
            </Link>
            <div className=" relative">
              <div
                className="flex gap-1 items-center cursor-pointer"
                onClick={() => setShowSubMenu((prev) => !prev)}
              >
                <MenuItem text="Services" />
                <IoChevronDownOutline size={20} />
              </div>

              {showSubMenu ? (
                <div className="absolute p-2 bg-white border-[1px] rounded-md border-[#247e49] top-[180%] -translate-x-[20%] w-[160px] h-[90px]">
                  <ul>
                    <li className="p-1 border-b-[1px] border-[#e1e1e1]">
                      <a href="">Investment Plans</a>
                    </li>
                    <li className="p-1">
                      <a href="">How it works</a>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
            <MenuItem text="About Us" />
            <Link to={"sign_in"}>
              <div className="bg-[#196137] text-white p-2 px-3 rounded lg">
                <MenuItem text="Sign In" />
              </div>
            </Link>
          </ul>
        </div>
        <div className="md:hidden block">
          <button onClick={() => setShowMenu((prev) => !prev)}>
            {!showMenu ? (
              <HiOutlineMenuAlt3 size={25} />
            ) : (
              <AiOutlineClose size={25} color="red" />
            )}
          </button>
        </div>
      </div>
      {showMenu ? (
        <div className="absolute top-[110%] md:hidden left-0 bg-white border-[1px] border-[#efefef] dark:border-[#171717] dark:bg-[#0a0a0a] w-full p-7">
          <div className="container">
            <ul className="flex flex-col gap-5 items-center">
              <li onClick={() => setShowMenu(false)}>
                <Link to={"/"}>
                  <MenuItem text="Home" />
                </Link>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <Link>
                  <MenuItem text="Services" />
                </Link>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <Link>
                  <MenuItem text="About Us" />
                </Link>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <Link to={"/sign_in"}>
                  <MenuItem text="Sign In" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
