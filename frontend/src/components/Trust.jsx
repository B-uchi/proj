import trust1 from "../assets/trust1.svg";
import trust2 from "../assets/trust2.svg";
import trust3 from "../assets/trust3.svg";
import trust4 from "../assets/trust4.svg";
import trust5 from "../assets/trust5.svg";

const Trust = () => {
  return (
    <div className=" p-5 mb-5">
      <div className="w-full font-bold font-montserrat text-center text-xl md:text-2xl text-gray-300">
        Trusted By
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-5 mt-5 text-black">
        <img src={trust1} alt="trust1" className="w-1/6" />
        <img src={trust2} alt="trust2" className="w-1/6" />
        <img src={trust3} alt="trust3" className="w-1/6" />
        <img src={trust4} alt="trust4" className="w-1/6" />
        <img src={trust5} alt="trust5" className="w-1/6" />
      </div>
    </div>
  );
};

export default Trust;
