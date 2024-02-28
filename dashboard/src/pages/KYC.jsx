const KYC = () => {
  return (
    <div className="dark:text-white flex flex-col justify-center items-center p-3 gap-3">
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold text-black dark:text-[#cccccc] font-montserrat">
          KYC
        </h1>
        <small className="font-montserrat text-black dark:text-[#cccccc]">
          Complete your KYC and lift your account restrictions
        </small>
      </div>
      <div className="mt-5 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3 md:w-[50%]">
        <div className="">
          <div className="">
            <p>Full name</p>
            <input
              type="text"
              className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <p>DL Number</p>
            <input
              type="text"
              className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
            />
          </div>
        </div>
        <div className="">
          <p>Gender</p>
          <select
            name=""
            id=""
            className="p-2 mt-2 border-[1px] w-full bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
          >
            <option selected disabled value="null">
              Select One
            </option>
            <option value="male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="">
          <div className="">
            <p>SSN (US Residents only)</p>
            <input
              type="text"
              className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="">
            <p>Emlployment Status</p>
            <input
              type="text"
              className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="">
            <p>Annual Income</p>
            <input
              type="text"
              className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
            />
          </div>
        </div>
        <div className="w-full flex">
          <button className="bg-[#2e9c5c] hover:bg-green-500 w-[50%] mx-auto text-white p-2 rounded-md mt-5 flex items-center gap-3 justify-center">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default KYC;
