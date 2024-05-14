import officeBuilding from "../assets/officeBuilding.jpg";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaPersonChalkboard } from "react-icons/fa6";
import Inquiry from "../components/Inquiry";
import Cta from "../components/Cta";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Help = () => {
  const [page, setPage] = useState("default");
  return (
    <div className="mx-auto ">
      <div className="bg-white w-full p-3 mb-5 ">
        <div className="">
          <p className="text-[#4d4d4d] mx-auto w-[75%] font-siliguri">
            Home &gt; Resources
          </p>
        </div>
        <div>
          <h1 className="font-montserrat text-4xl font-bold text-center">
            {page === "default"
              ? "Trade Stack Network Resources Page"
              : page === "help"
              ? "Help & Support"
              : "How it works"}
          </h1>
        </div>
        <div className="mt-10 mb-10 lg:w-[75%] mx-auto">
          {page === "default" ? (
            <AnimatePresence>
              <div className="flex justify-evenly md:flex-row flex-col gap-8">
                <motion.div
                  key={"help"}
                  initial={{ translateX: -100, opacity: 0 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  exit={{ display: "none", opacity: 0 }}
                  onClick={() => setPage("help")}
                >
                  <div className=" p-1 w-[300px] flex flex-col items-start ">
                    <div className="bg-[#33337c] flex p-2 rounded-lg">
                      <IoMdHelpCircleOutline size={40} color="#ffffff" />
                    </div>
                    <h1 className="text-2xl mt-1 mb-1">Help & Support</h1>
                    <p className="w-full ">
                      Contact our customer service representatives who are ever
                      ready to help out with any issues encountered
                    </p>
                    <a href="#" className="mt-2 underline text-[#33337c]">Read more</a>
                  </div>
                </motion.div>
                <motion.div
                  key={"how"}
                  initial={{ translateX: 100, opacity: 0 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  exit={{ display: "none", opacity: 0 }}
                  onClick={() => setPage("how")}
                >
                  <div className=" p-1 w-[300px] flex flex-col items-start ">
                    <div className="bg-[#33337c] flex p-2 rounded-lg">
                      <FaPersonChalkboard size={40} color="#ffffff" />
                    </div>
                    <h1 className="text-2xl mt-1 mb-1">How It Works</h1>
                    <p className="w-full">
                      Find out how Tradestacknetwork makes profit foor its clients.
                    </p>
                    <a href="#" className="mt-2 underline text-[#33337c]">Read more</a>
                  </div>
                </motion.div>
              </div>
            </AnimatePresence>
          ) : page === "help" ? (
            <Inquiry />
          ) : (
            <Cta />
          )}
        </div>
      </div>
    </div>
  );
};

export default Help;
