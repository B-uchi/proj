import tc from "../assets/Terms And Conditions.pdf";
import { FaTriangleExclamation } from "react-icons/fa6";

const Footer = () => {
  const openPdf = () => {
    window.open(tc, "_blank");
  };
  return (
    <div>
      <footer className=" text-black p-5">
        <div className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-10 bg md:w-[85%] mx-auto">
          <div className="flex flex-col gap-1 mx-auto text-center md:text-left">
            <h1 className="font-montserrat font-extrabold text-2xl">
              Trade Stack Network
            </h1>
            <p className="font-inter text-sm md:text-md">
              Investing for tomorrow, starting today.
            </p>

            <p className=" mt-4 mb-3 text-sm">
              Copyright &copy; Trade Stack Network 2024.
            </p>
            <ul className="flex text-sm justify-center md:justify-start">
              <li className="border-r-[1px] border-[#5f5f5f]">
                <button
                  className="p-3 py-0 hover:text-[#5f5f5f]"
                  onClick={openPdf}
                >
                  Legal Docs
                </button>
              </li>
              <li>
                <a className="p-3 hover:text-[#5f5f5f]" href="/how_it_works">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-3 flex-col md:flex-row  md:w-1/2 justify-around">
            <div className="flex flex-col gap-1 items-center md:items-start">
              <h1 className="font-montserrat font-extrabold text-lg">
                Useful Links:
              </h1>
              <div className="font-inter text-sm md:text-md flex md:text-left text-center flex-col gap-3">
                <a href="/" className="hover:text-[#5f5f5f]">
                  Home
                </a>
                <a href="/about" className="hover:text-[#5f5f5f]">
                  About Us
                </a>
                <a href="/careers" className="hover:text-[#5f5f5f]">
                  Careers
                </a>
                <a href="/how_it_works" className="hover:text-[#5f5f5f]">
                  How it works
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <h1 className="font-montserrat font-extrabold text-lg">
                Markets
              </h1>
              <div className="font-inter text-sm md:text-md flex flex-col text-center md:text-left gap-3">
                <a href="/markets" className="hover:text-[#5f5f5f]">
                  Stocks
                </a>
                <a href="/markets" className="hover:text-[#5f5f5f]">
                  Bonds
                </a>
                <a href="/markets" className="hover:text-[#5f5f5f]">
                  Futures
                </a>
                <a href="/markets" className="hover:text-[#5f5f5f]">
                  Commodities
                </a>
                <a href="/markets" className="hover:text-[#5f5f5f]">
                  MF's
                </a>
                <a href="/markets" className="hover:text-[#5f5f5f]">
                  ETF's
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center text-center md:items-start md:text-left gap-1 md:gap-3 mt-3 md:mt-0">
              <h1 className="font-montserrat font-extrabold text-lg">
                Contact Us:
              </h1>
              <p className="font-inter text-sm md:text-md">
                123 Main St. <br />
                New York, NY 10001 <br />
                support@tradestacknetwork.com <br />
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[70%] flex p-2 mt-5 text-sm mx-auto text-gray-600 gap-1 items-center">
          <div className="w-20"><FaTriangleExclamation size={30} color="#f7931a" /></div>
          <p>
            Trading and investing in financial markets carries a high level of
            risk and may not be suitable for all investors. The high degree of
            leverage can work against you as well as for you. Before deciding to
            trade or invest, you should carefully consider your investment
            objectives, level of experience, and risk appetite. Only invest
            funds you can afford to lose. Past performance is not indicative of
            future results.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
