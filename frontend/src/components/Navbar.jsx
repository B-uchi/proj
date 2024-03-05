import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";
import { useState } from "react";

const MenuItemm = ({ children, onClick }) => (
  <li onClick={onClick}>{children}</li>
);

const HoverMenu = ({ items, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      onMouseEnter={toggleMenu}
      onMouseLeave={toggleMenu}
      onClick={toggleMenu}
    >
      <div className="flex gap-1 items-center cursor-pointer">
        <MenuItem text={label} />
        <IoChevronDownOutline size={20} />
      </div>
      {isOpen && (
        <ul className="menu absolute p-2 bg-white border-[1px] rounded-md border-[#247e49]  -translate-x-[20%] w-[160px]">
          {items.map((item) => (
            <MenuItemm key={item.key}>
              <a href={item.path && item.path}>
                <div className=" p-2 mb-2 border-b-[1px] border-[#e1e1e1] cursor-pointer hover:bg-[#e0e0e0] rounded-lg">
                  <>{item.text}</>
                </div>
              </a>
            </MenuItemm>
          ))}
        </ul>
      )}
    </div>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="w-full z-50 sticky top-0 bg-white border-[1px] border-b-[#247e49]">
      <div className="flex container items-center justify-between mx-auto p-2 py-2 md:px-3 px-5">
        <div className="flex items-center gap-14">
          <Link to={"/"}>
            <h1 className="font-bolder text-xl font-montserrat font-extrabold">
              Trade Stack Network
            </h1>
          </Link>
          <div className=" md:block hidden">
            <ul className="flex gap-7 items-center relative">
              <Link to={"/"}>
                <MenuItem text="Home" />
              </Link>
              <HoverMenu
                label="Markets"
                page="markets"
                items={[
                  { key: 1, text: "Stocks", path: "/markets" },
                  { key: 2, text: "Bonds", path: "/markets" },
                  { key: 3, text: "MF's", path: "/markets" },
                  { key: 4, text: "ETF's", path: "/markets" },
                  { key: 5, text: "Futures", path: "/markets" },
                  { key: 6, text: "Commodities", path: "/markets" },
                ]}
              />
              <HoverMenu
                label="Company"
                items={[
                  { key: 7, text: "How it works", path: "/how_it_works" },
                  { key: 8, text: "Careers", path: "/careers" },
                  { key: 9, text: "About us", path: "/about" },
                ]}
              />
              <HoverMenu
                label="Resources"
                page="resources"
                items={[
                  {
                    key: 10,
                    text: "Legal Docs",
                    path: "/src/assets/Terms%20And%20Conditions.pdf",
                  },
                  { key: 11, text: "Help & Support", path: "/how_it_works" },
                ]}
              />
            </ul>
          </div>
        </div>
        <div className="md:flex gap-4 hidden">
          <div>
            <a
              className="border-[#196137] border-[2px] text-black p-1.5 px-3 rounded lg flex"
              href="https://proj-dash.vercel.app/sign_in"
            >
              <MenuItem text="Sign In" />
            </a>
          </div>
          <div>
            <a
              className="bg-[#196137] text-white p-2 px-3 rounded lg flex"
              href="https://proj-dash.vercel.app/sign_in"
            >
              <MenuItem text="Register" />
            </a>
          </div>
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
        <div className="absolute top-[110%] md:hidden left-0 bg-white border-[1px] border-[#efefef] w-full p-7">
          <div className="container">
            <ul className="flex flex-col gap-5 items-center">
              <li onClick={() => setShowMenu(false)}>
                <Link to={"/"}>
                  <MenuItem text="Home" />
                </Link>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <Link>
                  <MenuItem text="Markets" />
                </Link>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <Link>
                  <MenuItem text="Company" />
                </Link>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <Link>
                  <MenuItem text="Resources" />
                </Link>
              </li>
              <li className=" w-[60%]" onClick={() => setShowMenu(false)}>
                <div>
                  <a
                    className="bg-[#196137] text-center text-white p-2 px-3 rounded-lg flex justify-center"
                    href="https://proj-dash.vercel.app/sign_in"
                  >
                    <MenuItem text="Log In" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
