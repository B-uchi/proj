import { Link } from "react-router-dom";
import pic3 from "../assets/herosection.svg";
import { AnimatePresence, motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="h-full md:h-[100vh] p-3 flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:w-[85%] mx-auto ">
      <AnimatePresence>
        <motion.div
          key={"hero left"}
          initial={{ translateX: -100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          exit={{ display: "none", opacity: 0 }}
          className="md:w-1/2 flex flex-col md:p-3 text-center md:text-left"
        >
          <h1 className="font-montserrat font-extrabold text-3xl md:text-4xl">
            Trade Stack <span className="text-[#33337c]">Network</span>
          </h1>

          <p className="font-inter text-[#5f5f5f] text-md md:text-lg mt-2">
            Investing for tomorrow, starting today.
          </p>
          <p className="font-siliguri text-[#5f5f5f] mt-5 md:mt-10 ">
            At Trade Stack Network, we're not just about growing your wealth,
            we're about helping you blossom into a financially secure future.
            With a focus on transparency, education, and personalized
            strategies, we empower you to make informed decisions and invest
            with confidence. Let us show you why Trade Stack Network is the
            sunshine your finances needs.
          </p>
          <div className="mt-10 md:w-fit flex flex-col justify-center">
              <button className="hover:scale-110 transition-all bg-[#33337c] text-white p-4 px-10 rounded-full shadow-lg">
                <a href="http://localhost:5174/sign_in">Get Started</a>
              </button>
            <div className="mx-auto right-[50%] w-[40%] h-[3px] rounded-full mt-2 bg-[#b4aeae]"></div>
          </div>
        </motion.div>
        <motion.div
          key={"hero right"}
          initial={{ translateX: 100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          exit={{ display: "none", opacity: 0 }}
          className="md:w-1/2 flex justify-center items-center "
        >
          <div className="">
            <img src={pic3} alt="" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
