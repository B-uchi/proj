import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { connect } from "react-redux";
import { setCurrentUser } from "../redux/user/user.actions";

const CompleteSignup = ({ setCurrentUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const completeSignup = async () => {
    setLoading(true);
    if (!firstName || !lastName || !phoneNumber || !location) {
      setLoading(false);
      return toast.error("Please fill in all fields");
    }
    const requestOptions = {
      method: "POST",
      url: "http://localhost:8080/user/completeSignup",
      data: {
        firstName,
        lastName,
        phoneNumber,
        location,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${document.cookie.slice(18)}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.request(requestOptions);
      if (res.status === 200) {
        toast.success("Signup completed successfully!");
        setCurrentUser(res.data.user);
        setTimeout(
          () => (window.location.href = "http://localhost:5174/dashboard"),
          2000
        );
      }
    } catch (error) {
      toast.error(
        "An error occurred while completing signup. Please try again later."
      );
    
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black dark:text-white flex flex-col justify-center items-center absolute w-full h-full z-50">
      <Toaster richColors position="top-right" />
      <h1 className="text-2xl font-bold text-[#cccccc]">
        Complete your Sign up
      </h1>
      <div className="mt-5 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3">
        <div className="flex gap-3">
          <div className="w-1/2">
            <p>First Name</p>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
            />
          </div>
          <div className="w-1/2">
            <p>Last Name</p>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="">
            <p>Phone Number</p>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
            />
          </div>
        </div>
        <div className="w-full flex">
          <button
            onClick={() => completeSignup()}
            className="bg-[#2e9c5c] hover:bg-green-500 w-[50%] mx-auto text-white p-2 rounded-md mt-5 flex items-center gap-3 justify-center"
          >
            Continue{" "}
            {loading ? <div className="loader"></div> : <IoArrowForward />}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(CompleteSignup);
