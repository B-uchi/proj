import React from "react";

const Inquiry = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center mt-10 mb-5">
      <div className="">
        <h1 className="text-3xl font-montserrat text-center font-extrabold">
          Inquiries
        </h1>
        <h1 className="md:text-xl font-montserrat text-center">
          Have an inquiry? Our support staffs are ever{" "}
          <span className="text-[#33337c]">ready</span> to respond to your
          inquiries
        </h1>
      </div>
      <div className="w-[90%] md:w-[50%] mt-5 p-5">
        <form className="flex flex-col gap-3" action="" method="post">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-md border-2 border-gray-200"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md border-2 border-gray-200"
          />
          <textarea
            placeholder="Message"
            className="p-3 rounded-md border-2 border-gray-200"
          ></textarea>
          <button className="bg-[#33337c] text-white p-3 rounded-md">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inquiry;
