import React from "react";

const InvestmentMarkets = () => {
  return (
    <div className="border-y-[1px] mt-5 bg-white border-[#f1f1f1]">
      <div className="w-[80%] mx-auto">
        <div className="mt-10">
          <h1 className="md:text-3xl text-xl font-montserrat text-center font-extrabold">
            Freedom with your <span className="text-[#33337c]">finances</span>
          </h1>
          <h1 className="md:text-xl font-montserrat text-center">
            <span className="text-[#33337c]">Trade Stack Network</span> provides a wide range
            of investment markets to choose from, including:
          </h1>
        </div>
        <div className="flex flex-col md:flex-row md:gap-0 gap-3 mt-4 p-3  justify-between">
          <div className="flex bg-[#fafafa] md:w-1/4 rounded-md border-[1px] border-[#f1f1f1]">
            <div className="mr-3 bg-[#33337c] w-14 text-center p-3 text-white rounded-md">
              ST
            </div>
            <div className="my-auto text-lg">Stocks</div>
          </div>
          <div className="flex bg-[#fafafa] md:w-1/4 rounded-md border-[1px] border-[#f1f1f1]">
            <div className="mr-3 bg-[#33337c] w-14 text-center p-3 text-white rounded-md">
              BD
            </div>
            <div className="my-auto text-lg">Bonds</div>
          </div>
          <div className="flex bg-[#fafafa] md:w-1/4 rounded-md border-[1px] border-[#f1f1f1]">
            <div className="mr-3 bg-[#33337c] w-14 text-center p-3 text-white rounded-md">
              MF's
            </div>
            <div className="my-auto text-lg">Mutual Funds</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-0 gap-3 md:mt-2 mb-5 p-3 justify-between">
          <div className="flex bg-[#fafafa] md:w-1/4 rounded-md border-[1px] border-[#f1f1f1]">
            <div className="mr-3 bg-[#33337c] w-14 text-center p-3 text-white rounded-md">
              ETF's
            </div>
            <div className="my-auto text-lg">Exchange Traded Funds</div>
          </div>
          <div className="flex bg-[#fafafa] md:w-1/4 rounded-md border-[1px] border-[#f1f1f1]">
            <div className="mr-3 bg-[#33337c] w-14 text-center p-3 text-white rounded-md">
              FT
            </div>
            <div className="my-auto text-lg">Futures</div>
          </div>
          <div className="flex bg-[#fafafa] md:w-1/4 rounded-md border-[1px] border-[#f1f1f1]">
            <div className="mr-3 bg-[#33337c] w-14 text-center p-3 text-white rounded-md">
              CD
            </div>
            <div className="my-auto text-lg">Commodities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentMarkets;
