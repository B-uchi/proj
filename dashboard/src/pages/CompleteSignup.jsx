import { IoArrowForward } from "react-icons/io5";
const CompleteSignup = () => {
  return (
    <div className="bg-black dark:text-white flex flex-col justify-center items-center absolute w-full h-full z-50">
        <h1 className="text-2xl font-bold dark:text-[#cccccc]">
            Complete your Signup
          </h1>
        <div className="mt-5 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3">
            <div className="flex gap-3">
              <div className="w-1/2">
                <p>First Name</p>
                <input
                  type="text"
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
              <div className="w-1/2">
                <p>Last Name</p>
                <input
                  type="text"
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="">
                <p>Phone Number</p>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="">
                <p>Location</p>
                <input
                  type="text"
                  placeholder="Enter a location"
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
            </div>
            <div className="w-full flex">
              <button className="bg-[#2e9c5c] hover:bg-green-500 w-[50%] mx-auto text-white p-2 rounded-md mt-5 flex items-center gap-3 justify-center">
                Continue <IoArrowForward />
              </button>
            </div>
          </div>
    </div>
  )
}

export default CompleteSignup