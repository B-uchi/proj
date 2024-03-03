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
    <div className="p-5 md:w-[85%] mx-auto ">
      <div
        style={{ backgroundImage: `url(${officeBuilding})` }}
        className="h-[50vh] rounded-lg bg-cover bg-center relative"
      >
        <div className="bg-black bg-opacity-50 rounded-lg h-full w-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center">
            {page === "default"
              ? "Trade Stack Network"
              : page === "help"
              ? "Help & Support"
              : "How it works"}
          </h1>
        </div>
      </div>
      <div className="mt-10 mb-10">
        {page === "default" ? (
          <AnimatePresence>
            <div className="flex justify-center md:flex-row flex-col items-center gap-8">
              <motion.button
                key={"help"}
                initial={{ translateX: -100, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                exit={{ display: "none", opacity: 0 }}
                onClick={() => setPage("help")}
              >
                <div className=" p-10 py-20 px-20 rounded-lg border-[1px] border-[#247e49] bg-white hover:bg-[#e1e1e1] items-center flex flex-col">
                  <IoMdHelpCircleOutline size={40} color="#247e49" />
                  <h1 className="font-montserrat font-extrabold text-2xl">
                    Help & Support
                  </h1>
                </div>
              </motion.button>
              <motion.button
                key={"how"}
                initial={{ translateX: 100, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                exit={{ display: "none", opacity: 0 }}
                onClick={() => setPage("how")}
              >
                <div className=" p-10 py-20 px-20 rounded-lg border-[1px] border-[#247e49] bg-white hover:bg-[#e1e1e1] items-center flex flex-col">
                  <FaPersonChalkboard size={40} color="#247e49" />
                  <h1 className="font-montserrat font-extrabold text-2xl">
                    How it works
                  </h1>
                </div>
              </motion.button>
            </div>
          </AnimatePresence>
        ) : page === "help" ? (
          <Inquiry />
        ) : (
          <Cta />
        )}
      </div>
    </div>
  );
};

export default Help;
