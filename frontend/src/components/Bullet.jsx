import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";

const Bullet = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="">
        <h1 className="md:text-xl font-montserrat text-center">
          At Scion investments, you are{" "}
          <span className="text-[#2e9c5c]">assured</span> of the following
        </h1>
      </div>
      <div className="flex justify-center">
        <ul className="list-disc list-inside gap-9 flex flex-col font-inter text-[#5f5f5f] mt-5">
          <li className="w-[60%] mx-auto flex items-center justify-evenly gap-2">
            <div className="flex w-1/2 gap-2 items-center">
              <MdOutlineAttachMoney size={35} className="text-[#2e9c5c] text-xl" />
              <p>High Returns on Investments</p>
            </div>
            <div className="bg-white p-5 w-[45%] rounded-lg shadow-md">
              <p>
                Scion <span className="text-[#2e9c5c]">Investment</span> is dedicated to delivering exceptional returns
                while managing risk effectively. With a track record of
                consistent growth, we have helped thousands of clients realize
                their financial dreams.
              </p>
            </div>
          </li>
          <li className="flex w-[60%] mx-auto items-center justify-evenly gap-2">
            <div className="flex w-1/2 gap-2 items-center">
              <AiOutlineLineChart size={35} className="text-[#2e9c5c] text-xl" />
              <p>Invest with Confidence</p>
            </div>
            <div className="bg-white p-5 w-[45%] rounded-lg shadow-md">
              <p>
                At Scion <span className="text-[#2e9c5c]">Investment</span>, we are committed to helping you achieve
                your financial goals. We understand that every investment
                decision is crucial, and we ensure that your money is put to
                work effectively.
              </p>
            </div>
          </li>
          <li className="flex w-[60%] mx-auto items-center justify-evenly ">
            <div className="flex w-1/2 gap-2 justify-self-end items-center">
              <IoIosCheckmarkCircleOutline size={35} className="text-[#2e9c5c] text-xl" />
              <p>Committed team</p>
            </div>
            <div className="bg-white p-5 w-[45%] rounded-lg shadow-md">
              <p>
                Our unwavering <span className="text-[#2e9c5c]">commitment</span> to helping you achieve your financial
                goals, combined with our dedication to excellence and years of
                expertise, ensures that your investments are not just secure but
                poised for growth.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bullet;
