import { useState } from "react";
import { IoChevronDownOutline, IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import { FiCopy } from "react-icons/fi";
import ThemeSwitch from "../util/ThemeSwitcher";
import { connect } from "react-redux";
import { setShowSideNav } from "../redux/nav/sideNav.actions";
import { Link } from "react-router-dom";

const MenuItemm = ({ children, onClick }) => (
  <li onClick={onClick}>{children}</li>
);

const HoverMenu = ({ items, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div onClick={toggleMenu}>
      <div className="flex gap-1 items-center cursor-pointer">
        <p>{label} </p>
        <IoChevronDownOutline size={20} />
      </div>
      {isOpen && (
        <ul className="menu absolute z-40 translate-y-4 right-0 p-2 dark:bg-[#0a0a0a] bg-white border-[1px] rounded-md dark:border-[#1f1f1f] border-[#247e49] w-[160px]">
          {items.map((item) =>
            item.path ? (
              <Link to={item.path} key={item.key}>
                <MenuItemm
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  <div className=" p-2 mb-2 border-b-[1px] dark:border-[#1f1f1f] border-[#e1e1e1] cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-gray-500 rounded-lg flex gap-2 items-center">
                    {item.icon}
                    {item.text}
                  </div>
                </MenuItemm>
              </Link>
            ) : (
              <div className="">
                <MenuItemm
                  key={item.key}
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  <div className=" p-2 mb-2 border-b-[1px] dark:border-[#1f1f1f] border-[#e1e1e1] cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-gray-500 rounded-lg flex gap-2 items-center">
                    {item.icon}
                    {item.text}
                  </div>
                </MenuItemm>
              </div>
            )
          )}
        </ul>
      )}
    </div>
  );
};

const Toolbar = ({ currentUser, setShowSideNav }) => {
  return (
    <nav className="w-full bg-white dark:bg-[#0a0a0a] dark:text-white">
      <div className="sticky top-0">
        <div className="container mx-auto border-b-[2px] p-2 dark:border-[#1f1f1f] border-b-[#f1f1f1] flex justify-between items-center gap-5">
          <button onClick={() => setShowSideNav(true)} className="md:hidden">
            <IoMenu size={25} />
          </button>
          <div className=" border-[2px] rounded-lg dark:border-[#1f1f1f] border-b-[#f1f1f1] p-2 py-3 flex gap-3 items-center">
            <div className="line-clamp-1 w-[80%] text-sm">
              https://dashboard.scion.com/referral?{currentUser && currentUser.username}
            </div>
            <FiCopy size={20} className="cursor-pointer" />
          </div>
          <div className="md:gap-5 items-center flex">
            <div className="">
              <ThemeSwitch />
            </div>
            <div className="p-2 border-[2px] rounded-md border-[#f1f1f1] dark:border-[#141414] md:block hidden">
              <HoverMenu
                label={currentUser.username}
                items={[
                  {
                    key: 1,
                    text: "Profile",
                    path: "/profile",
                    icon: <CgProfile size={20} />,
                  },
                  { key: 2, text: "Sign Out", icon: <LuLogOut size={20} /> },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setShowSideNav: (value) => dispatch(setShowSideNav(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
