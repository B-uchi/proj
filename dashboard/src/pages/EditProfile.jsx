import { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../redux/user/user.actions";

const EditProfile = ({ currentUser }) => {
  const [firstName, setFirstName] = useState(
    currentUser && currentUser.firstName
  );
  const [lastName, setLastName] = useState(currentUser && currentUser.lastName);
  const [phoneNumber, setPhoneNumber] = useState(
    currentUser && currentUser.phoneNumber
  );
  const [location, setLocation] = useState(currentUser && currentUser.location);
  const [username, setUsername] = useState(currentUser && currentUser.username);
  const [loading, setLoading] = useState(false);
  const [canUpdate, setCanUpdate] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    if (
      currentUser &&
      (firstName !== currentUser.firstName ||
        lastName !== currentUser.lastName ||
        phoneNumber !== currentUser.phoneNumber ||
        location !== currentUser.location ||
        username !== currentUser.username)
    ) {
        setCanUpdate(true);
    }else{
        setCanUpdate(false);
    }
  }, [firstName, lastName, phoneNumber, location, username, currentUser]);

  const updateProfile = async () => {
    setLoading(true);
    const requestOptions = {
      url: "https://proj-server-3j4y.onrender.com/user/editProfile",
      method: "POST",
      data: { firstName, lastName, phoneNumber, location, username },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${document.cookie.slice(18)}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.request(requestOptions);
      if (response.status === 200) {
        toast.success("Profile updated successfully");
        setCurrentUser(response.data.user);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        "An error occurred while updating profile. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Toaster richColors position="top-right" />
      <div className="p-2 md:p-10">
        <div className="">
          <h1 className="text-2xl font-montserrat font-bold dark:text-[#cccccc] flex items-center gap-5">
            Profile
          </h1>
          <small className="font-montserrat">View and edit your profile</small>
        </div>
        <div className="mt-5">
          <div className="mt-5 bg-white dark:bg-[#191d2b] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3">
            <div className="flex gap-3">
              <div className="w-1/2">
                <p>First Name</p>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder={currentUser && currentUser.firstName}
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
              <div className="w-1/2">
                <p>Last Name</p>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder={currentUser && currentUser.lastName}
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="">
                <p>Username</p>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={currentUser && currentUser.username}
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="">
                <p>Email</p>
                <input
                  type="email"
                  value={currentUser && currentUser.email}
                  readOnly
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
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
                  placeholder={currentUser && currentUser.phoneNumber}
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="">
                <p>Location</p>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder={currentUser && currentUser.location}
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-[#10121b]  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
            </div>
            <div className="w-full flex">
              <button
                onClick={() => updateProfile()}
                disabled={!canUpdate}
                className="bg-[#2e9c5c] disabled:bg-green-700 hover:bg-green-500 w-[50%] mx-auto text-white p-2 rounded-md mt-5 flex items-center gap-3 justify-center"
              >
                Submit {loading ? <div className="loader"></div> : null}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
