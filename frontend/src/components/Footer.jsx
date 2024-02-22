const Footer = () => {
  return (
    <div>
      <footer className=" text-black p-5">
        <div className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-10 md:w-[85%] mx-auto">
          <div className="flex flex-col gap-1 mx-auto text-center md:text-left">
            <h1 className="font-montserrat font-extrabold text-2xl">
              Scion Investments
            </h1>
            <p className="font-inter text-sm md:text-md">
              Investing for tomorrow, starting today.
            </p>

            <p className=" mt-4 mb-3 text-sm">
              Copyright &copy; Scion Investment 2024.
            </p>
            <ul className="flex text-sm justify-center md:justify-start">
              <li className="border-r-[1px] border-[#5f5f5f]">
                <a className="p-3 pl-0 hover:text-[#5f5f5f]" href="">Legal Docs</a>
              </li>
              <li >
                <a className="p-3 hover:text-[#5f5f5f]" href="">Help & Support</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-3 flex-col md:flex-row  md:w-1/2 justify-around">
            <div className="flex flex-col gap-1 items-center md:items-start">
              <h1 className="font-montserrat font-extrabold text-lg">
                Useful Links:
              </h1>
              <div className="font-inter text-sm md:text-md flex md:text-left text-center flex-col gap-3">
                <a href="#" className="hover:text-[#5f5f5f]">
                  Home
                </a>
                <a href="#" className="hover:text-[#5f5f5f]">
                  About Us
                </a>
                <a href="#" className="hover:text-[#5f5f5f]">
                  Careers
                </a>
                <a href="#" className="hover:text-[#5f5f5f]">
                  How it works
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <h1 className="font-montserrat font-extrabold text-lg">
                Markets
              </h1>
              <div className="font-inter text-sm md:text-md flex flex-col text-center md:text-left gap-3">
                <a href="#" className="hover:text-[#5f5f5f]">
                  Stocks
                </a>
                <a href="#" className="hover:text-[#5f5f5f]">
                  Bonds
                </a>
                <a href="#" className="hover:text-[#5f5f5f]">
                  Futures
                </a>
                <a href="#" className="hover:text-[#5f5f5f]">
                  Commodities
                </a>
                <a href="#" className="hover:text-[#5f5f5f]">
                  MF's
                </a>
                <a href="#" className="hover:text-[#5f5f5f]">
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
                support@scioninv.com <br />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
