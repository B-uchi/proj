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
            Why choose <span className="text-[#33337c]">us</span>?
          </h1>
          <h1 className="md:text-xl font-montserrat text-center">
            With Trade Stack Network, you are{" "}
            <span className="text-[#33337c]">assured</span> of the following and
            more
          </h1>
        </div>
        <div className="flex flex-col md:flex-row mt-3 md:mt-10 gap-10">
          <div className="flex md:w-1/3 flex-col-reverse justify-center items-center border-[1px] rounded-lg border-[#f1f1f1] mb-4">
            <div className="text-center p-4">
              <div className="p-3 rounded-full mb-3 bg-[#33337c] w-fit mx-auto">
                <MdOutlineAttachMoney
                  size={35}
                  color="white"
                  className="text-xl mx-auto"
                />
              </div>
              <p className="font-bold md:text-2xl text-xl">
                High Returns on Investments
              </p>
              <p>
                Trade Stack <span className="text-[#33337c]">Network</span> is
                dedicated to delivering exceptional returns while managing risk
                effectively. With a track record of consistent growth, we have
                helped thousands of clients realize their financial dreams.
              </p>
            </div>
            <div className="">
              <img
                src={highReturns}
                alt=""
                loading="lazy"
                className="rounded-lg w-[100%] rounded-b-none"
              />
            </div>
          </div>
          <div className="flex md:w-1/3 flex-col items-start border-[1px] rounded-lg border-[#f1f1f1] mb-4">
            <div className="">
              <img
                src={confidence}
                alt=""
                loading="lazy"
                className="rounded-lg w-[100%] rounded-b-none"
              />
            </div>
            <div className="text-center p-4">
              <div className="p-3 rounded-full mb-3 bg-[#33337c] w-fit mx-auto">
                <AiOutlineLineChart
                  size={35}
                  color="white"
                  className="text-xl mx-auto"
                />
              </div>
              <p className="font-bold md:text-2xl text-xl">
                Invest with Confidence
              </p>
              <p>
                At Trade Stack <span className="text-[#33337c]">Network</span>,
                we are committed to helping you achieve your financial goals. We
                understand that every investment decision is crucial, and we
                ensure that your money is put to work effectively.
              </p>
            </div>
          </div>
          <div className="flex md:w-1/3 flex-col items-start border-[1px] rounded-lg border-[#f1f1f1] mb-4">
            <div className="">
              <img
                src={committedTeam}
                alt=""
                loading="lazy"
                className="rounded-lg w-[100%] rounded-b-none"
              />
            </div>
            <div className="text-center p-4">
              <div className="p-3 rounded-full mb-3 bg-[#33337c] w-fit mx-auto">
                <IoIosCheckmarkCircleOutline
                  size={35}
                  color="white"
                  className="text-xl mx-auto"
                />
              </div>
              <p className="font-bold md:text-2xl text-xl">Committed team</p>
              <p>
                Our unwavering{" "}
                <span className="text-[#33337c]">commitment</span> to helping
                you achieve your financial goals, combined with our dedication
                to excellence and years of expertise, ensures that your
                investments are not just secure but poised for growth.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 justify-center flex md:hidden">
          <Link to={"sign_in"}>
            <a href="https://proj-dash.vercel.app/sign_in">
              <button className=" hover:scale-110 transition-all bg-[#33337c] text-white p-4 px-10 rounded-full shadow-lg">
                Open an Account
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bullet;
