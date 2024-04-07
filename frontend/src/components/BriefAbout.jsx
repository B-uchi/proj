import officeBuilding from "../assets/officeBuilding.jpg";
import { GiDiamondTrophy } from "react-icons/gi";

const BriefAbout = () => {
  return (
    <div className="border-y-[1px] md:h-[80vh] border-[#f1f1f1] mb-5 flex justify-center items-center">
      <div className="bg-[#33337c] rounded-lg bg-opacity-5 md:w-[80%] p-5 mx-auto flex md:flex-row flex-col">
        <div
          className="md:w-1/2 background-image bg-cover bg-center h-[300px] md:h-[400px] rounded-md md:rounded-l-md mb-5 md:mb-0"
          style={{ backgroundImage: `url(${officeBuilding})` }}
        >
          <div className="h-full w-full flex justify-center items-center"></div>
        </div>
        <div className="md:w-1/2 md:text-left p-4 md:p-7 text-black flex flex-col justify-center">
          <h1 className="text-black font-montserrat text-center font-bold text-2xl md:text-3xl p-2">
            Brief Company History
          </h1>
          <p className="mt-3 text-md text-center text-black">
            Founded by James Durk in 2005 in California, USA. Trade Stack
            Network has been a trusted name in the world of finance for decades.
            James' vision was simple yet powerful - to provide investors with
            access to high-quality, diversified investment opportunities. Since
            then, we've grown into a globally recognized investment firm,
            serving clients from all corners of the world.
          </p>
          <div className="mt-3">
            <h1 className="font-montserrat text-center font-bold text-lg">
              Awards & Recognition
            </h1>
            <div className="flex items-center justify-between mt-3">
              <div className="flex flex-col items-center border-[1px] rounded-lg p-2 border-[#000000] cursor-pointer text-center">
                <GiDiamondTrophy className="text-[#f1c40f] text-3xl" />
                <small>World Trade Summit</small>
                <small>Dubai, 2012</small>
              </div>
              <div className="flex flex-col items-center border-[1px] rounded-lg p-2 border-[#000000] cursor-pointer text-center">
                <GiDiamondTrophy className="text-[#f1c40f] text-3xl" />
                <small>Inv. Platform of the year</small>
                <small>2016-2018</small>
              </div>
              <div className="flex flex-col items-center border-[1px] rounded-lg p-2 border-[#000000] cursor-pointer text-center">
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
