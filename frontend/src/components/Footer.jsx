import tc from "../../public/TermsAndConditions.pdf";
import { FaTriangleExclamation } from "react-icons/fa6";

const Footer = () => {
  const openPdf = () => {
    window.open(tc, "_blank");
  };
  return (
    <div>
      <footer className=" text-black p-5">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center lg:w-[75%] mx-auto">
            <div className="flex flex-col gap-1 text-center lg:text-left">
              <h1 className="font-montserrat text-[#4d4d4d] font-extrabold text-2xl">
                Trade Stack Network
              </h1>
              <p className="font-inter text-[#333333] text-sm lg:text-md">
                Investing for tomorrow, starting today.
              </p>
              <br />
              <div className="flex text-[#333333] flex-col items-center text-center lg:items-start lg:text-left gap-1 lg:gap-3 mt-3 lg:mt-0">
                <p className="font-inter text-sm lg:text-md">
                  123 Main St. <br />
                  New York, NY 10001 <br />
                  support@tradestacknetwork.com <br />
                </p>
              </div>

              <p className=" mt-4 mb-3 text-sm">
                Copyright &copy; Trade Stack Network 2024.
              </p>
            </div>
            <div className="flex gap-3 flex-col lg:flex-row  lg:w-1/2 justify-around">
              <div className="flex flex-col gap-1 text-[#333333] items-center lg:items-start">
                <h1 className="font-montserrat font-extrabold text-lg">
                  Resources
                </h1>
                <div className="font-inter text-sm lg:text-md flex flex-col text-center lg:text-left gap-3">
                  <a href="/how_it_works" className="hover:text-[#5f5f5f]">
                    Legal Docs
                  </a>
                  <a href="/how_it_works" className="hover:text-[#5f5f5f]">
                    Help and Support
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-[#333333] items-center lg:items-start">
                <h1 className="font-montserrat font-extrabold text-lg">
                  Company
                </h1>
                <div className="font-inter text-sm lg:text-md flex flex-col text-center lg:text-left gap-3">
                  <a href="/how_it_works" className="hover:text-[#5f5f5f]">
                    How It Works
                  </a>
                  <a href="/careers" className="hover:text-[#5f5f5f]">
                    Careers
                  </a>
                  <a href="/about" className="hover:text-[#5f5f5f]">
                    About Us
                  </a>
                </div>
              </div>
              <div className="flex flex-col text-[#333333] gap-1 items-center lg:items-start">
                <h1 className="font-montserrat font-extrabold text-lg">
                  Useful Links
                </h1>
                <div className="font-inter text-sm lg:text-md flex lg:text-left text-center flex-col gap-3">
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
              <div className="flex flex-col gap-1 text-[#333333] items-center lg:items-start">
                <h1 className="font-montserrat font-extrabold text-lg">
                  Markets
                </h1>
                <div className="font-inter text-sm lg:text-md flex flex-col text-center lg:text-left gap-3">
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
            </div>
          </div>
          <div className="lg:w-[75%] p-2 lg:p-0 mt-5 text-sm mx-auto text-gray-600">
          <div className="w-20 mb-2 flex items-center gap-2">
            <FaTriangleExclamation size={20} color="#f7931a" />
            <p className="font-bold">Warning</p>
          </div>
          <p className="text-justify">
            Trading and investing in financial markets carries a high level of
            risk and may not be suitable for all investors. The high degree of
            leverage can work against you as well as for you. Before deciding to
            trade or invest, you should carefully consider your investment
            objectives, level of experience, and risk appetite. Only invest
            funds you can afford to lose. Past performance is not indicative of
            future results.
          </p>
        </div>
        </div>
        
      </footer>
    </div>
  );
};

export default Footer;
