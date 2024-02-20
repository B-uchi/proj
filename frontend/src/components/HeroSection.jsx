
import pic3 from "../assets/3.svg";

const HeroSection = () => {
  return (
    <div className="h-full md:h-[80vh] p-3 flex flex-col-reverse md:flex-row items-center gap-6 md:w-[80%] mx-auto ">
      <div className="md:w-1/2 flex flex-col md:p-3 text-center md:text-left">
        <h1 className="font-montserrat text-3xl md:text-4xl">Scion Investments</h1>

        <p className="font-inter text-[#5f5f5f] text-md md:text-lg mt-2">
          Investing for tomorrow, starting today.
        </p>
        <p className="font-siliguri text-[#5f5f5f] mt-5 md:mt-10 ">
          At Scion Investments, we're not just about growing your wealth, we're
          about helping you blossom into a financially secure future. With a
          focus on transparency, education, and personalized strategies, we
          empower you to make informed decisions and invest with confidence. Let
          us show you why Scion Investments is the sunshine your finances needs.
        </p>
        <div className="mt-10 md:w-fit flex flex-col justify-center">
          <button className="bg-[#196137] text-white p-4 px-10 rounded-full">
            Get Started
          </button>
          <div className="mx-auto right-[50%] w-[40%] h-[3px] rounded-full mt-2 bg-[#b4aeae]"></div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="">
          <img src={pic3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
