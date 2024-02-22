import officeBuilding from "../assets/officeBuilding.jpg";
import { GiDiamondTrophy } from "react-icons/gi";

const BriefAbout = () => {
  return (
    <div className="bg-white border-y-[1px] border-[#f1f1f1] mb-5">
      <div className="md:w-[80%] p-5 mx-auto flex md:flex-row flex-col">
        <div className="md:w-1/2">
          <img src={officeBuilding} alt="" className="rounded-xl" />
        </div>
        <div className="md:w-1/2 text-center md:text-left p-4 md:p-7 text-black flex flex-col justify-center">
          <h1 className="font-montserrat font-bold text-2xl md:text-3xl">
            Brief Company History
          </h1>
          <p className="mt-3 text-md text-[#5f5f5f]">
            Founded by Bill Scion in 2005 in California, USA. Scion Investment
            has been a trusted name in the world of finance for decades. Bill's
            vision was simple yet powerful - to provide investors with access to
            high-quality, diversified investment opportunities. Since then,
            we've grown into a globally recognized investment firm, serving
            clients from all corners of the world.
          </p>
          <div className="mt-3">
            <h1 className="font-montserrat font-bold text-lg">
              Awards & Recognition
            </h1>
            <div className="flex items-center justify-between mt-3">
              <div className="flex flex-col items-center border-[1px] rounded-lg p-3 border-[#f1f1f1] cursor-pointer">
                <GiDiamondTrophy className="text-[#f1c40f] text-3xl" />
                <small>World Trade Summit</small>
                <small>Dubai, 2012</small>
              </div>
              <div className="flex flex-col items-center border-[1px] rounded-lg p-3 border-[#f1f1f1] cursor-pointer">
                <GiDiamondTrophy className="text-[#f1c40f] text-3xl" />
                <small>Inv. Platform of the year</small>
                <small>2016-2018</small>
              </div>
              <div className="flex flex-col items-center border-[1px] rounded-lg p-3 border-[#f1f1f1] cursor-pointer">
                <GiDiamondTrophy className="text-[#f1c40f] text-3xl" />
                <small>Annual Forex Summit</small>
                <small>CA, 2021</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefAbout;
