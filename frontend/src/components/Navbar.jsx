import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { IoChevronDownOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useState } from "react";
import logo from "../assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";

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
        <ul className="menu absolute p-2 bg-white border-[1px] rounded-md border-[#154350]  -translate-x-[20%] w-[160px]">
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
  const [subMenu, setSubMenu] = useState("home");

  console.log(subMenu);

  return (
    <nav className="w-full z-50 sticky top-0 bg-white border-[1px]">
      <div className="flex container items-center justify-between mx-auto p-2 py-2 lg:px-3 px-5">
        <div className="flex items-center gap-10">
          <Link to={"/"}>
            <div className="flex  items-center gap-3">
              <img src={logo} alt="logo" className="aspect-auto w-44" />
            </div>
          </Link>
          <div className=" lg:block hidden">
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
                    path: "/public/TermsAndConditions.pdf",
                  },
                  { key: 11, text: "Help & Support", path: "/how_it_works" },
                ]}
              />
            </ul>
          </div>
        </div>
        <div className="lg:flex gap-4 hidden">
          <div>
            <a
              className="border-[#33337c] border-[2px] text-black p-1.5 px-3 rounded lg flex"
              href="https://proj-dash.vercel.app/sign_in"
            >
              <MenuItem text="Sign In" />
            </a>
          </div>
          <div>
            <a
              className="bg-[#33337c] text-white p-2 px-3 rounded lg flex"
              href="https://proj-dash.vercel.app/sign_in"
            >
              <MenuItem text="Register" />
            </a>
          </div>
        </div>

        <div className="lg:hidden block">
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
        <AnimatePresence>
          {subMenu == "home" ? (
            <motion.div
              initial={{ translateX: -200, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              exit={{ display: "none", opacity: 0 }}
              key={"home"}
              className="absolute top-[110%] lg:hidden left-0 bg-white border-[1px] border-[#efefef] w-full p-7"
            >
              <div className="container">
                <ul className="flex flex-col gap-5 items-center">
                  <li onClick={() => setShowMenu(false)}>
                    <Link to={"/"}>
                      <MenuItem text="Home" />
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setSubMenu("markets");
                    }}
                  >
                    <Link className="flex items-center gap-1">
                      <p>Markets</p>
                      <IoChevronForwardOutline className="-translate-y-[5%]" />
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setSubMenu("company");
                    }}
                  >
                    <Link className="flex items-center gap-1">
                      <MenuItem text="Company" />
                      <IoChevronForwardOutline className="-translate-y-[5%]" />
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      setSubMenu("resources");
                    }}
                  >
                    <Link className="flex items-center gap-1">
                      <MenuItem text="Resources" />
                      <IoChevronForwardOutline className="-translate-y-[5%]" />
                    </Link>
                  </li>
                  <li className=" w-[60%]" onClick={() => setShowMenu(false)}>
                    <div>
                      <a
                        className="bg-[#33337c] text-center text-white p-2 px-3 rounded-lg flex justify-center"
                        href="https://proj-dash.vercel.app/sign_in"
                      >
                        <MenuItem text="Log In" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          ) : subMenu == "markets" ? (
            <motion.div
              initial={{ translateX: 200, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              exit={{ display: "none", opacity: 0 }}
              key={"markets"}
              className="absolute top-[110%] lg:hidden left-0 bg-white border-[1px] border-[#efefef] w-full p-7"
            >
              <div className="container">
                <ul className="flex flex-col gap-5 items-center">
                  <li onClick={()=>setShowMenu(false)}>
                    <a href="#">
                      <MenuItem text="Stocks" />
                    </a>
                  </li>
                  <li onClick={()=>setShowMenu(false)}>
                    <a href="#">
                      <MenuItem text="Bonds" />
                    </a>
                  </li>
                  <li onClick={()=>setShowMenu(false)}>
                    <a href="#">
                      <MenuItem text="MF's" />
                    </a>
                  </li>
                  <li onClick={()=>setShowMenu(false)}>
                    <a href="#">
                      <MenuItem text="ETF's" />
                    </a>
                  </li>
                  <li onClick={()=>setShowMenu(false)}>
                    <a href="#">
                      <MenuItem text="Futures" />
                    </a>
                  </li>
                  <li onClick={()=>setShowMenu(false)}>
                    <a href="#">
                      <MenuItem text="Commodities" />
                    </a>
                  </li>
                  <li className=" w-[60%]" onClick={() => setSubMenu("home")}>
                    <div>
                      <button
                        onClick={() => setSubMenu("home")}
                        className="bg-[#33337c] mx-auto text-center text-white p-2 px-3 rounded-lg flex justify-center"
                        href="https://proj-dash.vercel.app/sign_in"
                      >
                        <p>Back</p>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          ) : subMenu == "company" ? (
            <motion.div
              initial={{ translateX: 200, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              exit={{ display: "none", opacity: 0 }}
              key={"company"}
              className="absolute top-[110%] lg:hidden left-0 bg-white border-[1px] border-[#efefef] w-full p-7"
            >
              <div className="container">
                <ul className="flex flex-col gap-5 items-center">
                  <li onClick={()=>setShowMenu(false)}>
                    <a href="/careers">
                      <MenuItem text="Careers" />
                    </a>
                  </li>
                  <li onClick={()=>setShowMenu(false)}>
                    <a href="/about">
                      <MenuItem text="About us" />
                    </a>
                  </li>
                  <li onClick={()=>setShowMenu(false)}>
                    <a href="/how_it_works">
                      <MenuItem text="How it works" />
                    </a>
                  </li>
                  <li className=" w-[60%]" onClick={() => setSubMenu("home")}>
                    <div>
                      <button
                        onClick={() => setSubMenu("home")}
                        className="bg-[#33337c] mx-auto text-center text-white p-2 px-3 rounded-lg flex justify-center"
                        href="https://proj-dash.vercel.app/sign_in"
                      >
                        <p>Back</p>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ translateX: 200, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              exit={{ display: "none", opacity: 0 }}
              key={"resources"}
              className="absolute top-[110%] lg:hidden left-0 bg-white border-[1px] border-[#efefef] w-full p-7"
            >
              <div className="container">
                <ul className="flex flex-col gap-5 items-center">
                  <li onClick={()=>setShowMenu(false)}>
                    <a href="/public/TermsAndConditions.pdf">
                      <MenuItem text="Legal Docs" />
                    </a>
                  </li>
                  
                  <li onClick={()=>setShowMenu(false)}>
                    <a href="/how_it_works">
                      <MenuItem text="Help and Support" />
                    </a>
                  </li>
                  <li className=" w-[60%]" onClick={() => setSubMenu("home")}>
                    <div>
                      <button
                        onClick={() => setSubMenu("home")}
                        className="bg-[#33337c] mx-auto text-center text-white p-2 px-3 rounded-lg flex justify-center"
                        href="https://proj-dash.vercel.app/sign_in"
                      >
                        <p>Back</p>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ) : null}
    </nav>
  );
};

export default Navbar;
