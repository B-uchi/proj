import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import highReturns from "../assets/high_returns.jpg";
import committedTeam from "../assets/committed_team.jpg";
import confidence from "../assets/confidence.jpg";
import { Link } from "react-router-dom";

const Bullet = () => {
  return (
    <div className=" bg-white border-y-[1px] border-[#f1f1f1]">
      <div className="md:w-[80%] mx-auto p-4">
        <div className="mt-2">
          <h1 className="md:text-3xl text-xl font-montserrat text-center font-extrabold">
            Why choose <span className="text-[#2e9c5c]">us</span>?
          </h1>
          <h1 className="md:text-xl font-montserrat text-center">
            With TSN, you are <span className="text-[#2e9c5c]">assured</span>{" "}
            of the following and more
          </h1>
        </div>
        <div className="flex flex-col mt-3 md:mt-10 gap-10">
          <div className="flex md:flex-row flex-col-reverse justify-center items-center border-[1px] rounded-lg p-2 border-[#f1f1f1]">
            <div className="md:w-1/2 text-center p-10">
              <MdOutlineAttachMoney
                size={35}
                className="text-[#2e9c5c] text-xl mx-auto"
              />
              <p className="font-bold md:text-2xl text-xl">
                High Returns on Investments
              </p>
              <p>
                Trade Stack <span className="text-[#2e9c5c]">Network</span> is
                dedicated to delivering exceptional returns while managing risk
                effectively. With a track record of consistent growth, we have
                helped thousands of clients realize their financial dreams.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={highReturns}
                alt=""
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex md:flex-row-reverse flex-col-reverse justify-center items-center border-[1px] rounded-lg p-2 border-[#f1f1f1]">
            <div className="md:w-1/2 text-center p-10">
              <AiOutlineLineChart
                size={35}
                className="text-[#2e9c5c] text-2xl mx-auto"
              />
              <p className="font-bold text-xl">Invest with Confidence</p>
              <p>
                At Trade Stack <span className="text-[#2e9c5c]">Network</span>, we
                are committed to helping you achieve your financial goals. We
                understand that every investment decision is crucial, and we
                ensure that your money is put to work effectively.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={confidence}
                alt=""
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse justify-center items-center border-[1px] rounded-lg p-2 border-[#f1f1f1]">
            <div className="md:w-1/2 text-center p-10">
              <IoIosCheckmarkCircleOutline
                size={35}
                className="text-[#2e9c5c] text-2xl mx-auto"
              />
              <p className="font-bold text-xl">Committed team</p>
              <p>
                Our unwavering{" "}
                <span className="text-[#2e9c5c]">commitment</span> to helping
                you achieve your financial goals, combined with our dedication
                to excellence and years of expertise, ensures that your
                investments are not just secure but poised for growth.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={committedTeam}
                alt=""
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 justify-center flex md:hidden">
          <Link to={"sign_in"}>
            <button className=" hover:scale-110 transition-all bg-[#196137] text-white p-4 px-10 rounded-full shadow-lg">
              Open an Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bullet;
