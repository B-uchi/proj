import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="w-full z-50 sticky top-0 bg-white border-[1px] border-b-[#247e49]">
      <div className="flex container justify-between mx-auto p-2 py-3 md:px-3 px-5">
        <div className="font-bolder text-xl font-montserrat">
          <h1>SCION</h1>
        </div>
        <div className="md:block hidden">
          <ul className="flex gap-7">
            <Link to={"/"}>
              <MenuItem text="Home" />
            </Link>
            <MenuItem text="Services" />
            <MenuItem text="About Us" />
            <Link to={"sign_in"}>
              <MenuItem text="Sign In" />
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
