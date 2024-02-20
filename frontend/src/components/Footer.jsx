const Footer = () => {
  return (
    <div>
      <footer className="bg-[#196137] text-white p-5">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-10 md:w-[85%] mx-auto">
          <div className="flex flex-col gap-1 mx-auto">
            <h1 className="font-montserrat font-extrabold text-2xl">
              Scion Investments
            </h1>
            <p className="font-inter text-sm md:text-md">
              Investing for tomorrow, starting today.
            </p>
          </div>
          <div className="flex gap-3 flex-col md:flex-row  md:w-1/2 justify-around">
            <div className="flex flex-col gap-1">
              <h1 className="font-montserrat font-extrabold text-lg">
                Useful Links:
              </h1>
              <div className="font-inter text-sm md:text-md flex md:flex-col gap-3">
                <a href="#" className="hover:text-[#5f5f5f]">
                  Home
                </a>
                <a href="#" className="hover:text-[#5f5f5f]">
                  About Us
                </a>
                <a href="#" className="hover:text-[#5f5f5f]">
                  Services
                </a>
                <a href="#" className="hover:text-[#5f5f5f]">
                  Contact
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-1 md:gap-3 mt-3 md:mt-0">
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
