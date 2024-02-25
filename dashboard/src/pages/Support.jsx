import SupportTable from "../components/SupportTable";

const Support = () => {
  return (
    <div>
      <div className="p-10">
        <div className="">
          <h1 className="text-2xl font-bold dark:text-[#cccccc]">
            Support History
          </h1>
          <small className="font-montserrat">History of all customer service conversations</small>
        </div>
        <div className="mt-8">
          <SupportTable />
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-bold dark:text-[#cccccc]">
            Create a new support ticket
          </h1>
          <div className="mt-5 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3">
            <div className="flex gap-3">
              <div className="w-1/2">
                <p>Name</p>
                <input
                  type="text"
                  value={"John Doe"}
                  readOnly
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
              <div className="w-1/2">
                <p>Email</p>
                <input
                  type="email"
                  readOnly
                  value={"bronzegamer0011@gmail.com"}
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="">
                <p>Subject</p>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="">
                <p>Body</p>
                <textarea
                  rows={8}
                  placeholder="Enter body"
                  className="dark:border-[#1f1f1f] border-[#f1f1f1] p-2 border-[2px] rounded-md mt-2 bg-[#fafafa] dark:bg-[#0a0a0a] w-full "
                ></textarea>
              </div>
            </div>
            <div className="w-full flex">
              <button className="bg-[#2e9c5c] hover:bg-green-500 w-[50%] mx-auto text-white p-2 rounded-md mt-5">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
