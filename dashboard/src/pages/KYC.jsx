import { useState } from "react";
import axios from "axios";
import { storage } from "../firebase/firebaseUtil";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { connect } from "react-redux";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";

const KYC = ({ currentUser }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dlNumber, setDlNumber] = useState("");
  const [gender, setGender] = useState("null");
  const [ssn, setSsn] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 3 * 1024 * 1024) {
      alert("File size exceeds the maximum limit of 3MB.");
      event.target.value = null;
    } else {
      setSelectedFile(file);
    }
  };

  const uploadFile = async () => {
    setLoading(true);
    if (gender === "null" || !annualIncome || !employmentStatus) {
      setLoading(false);
      return toast.error("Please fill in all fields");
    }
    if (!selectedFile) {
      setLoading(true);
      return toast.error("Select a valid ID file");
    }
    const storageRef = ref(
      storage,
      `kyc/${currentUser.id}.${selectedFile.type.split("/")[1]}`
    );
    uploadBytes(storageRef, selectedFile)
      .then((snapshot) => {
        getDownloadURL(
          ref(
            storage,
            `kyc/${currentUser.id}.${selectedFile.type.split("/")[1]}`
          )
        )
          .then(async (url) => {
            await completeKYC(url);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const completeKYC = async (url) => {
    const requestOptions = {
      method: "POST",
      url: "https://proj-server-3j4y.onrender.com/user/completeKYC",
      data: {
        dlNumber,
        gender,
        ssn,
        annualIncome,
        employmentStatus,
        idUrl: url,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.slice(18)}`,
      },
    };
    await axios
      .request(requestOptions)
      .then((response) => {
        if (response.status === 200) {
          toast.success("KYC submitted successfully");
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
          return;
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="dark:text-white flex flex-col justify-center items-center p-3 gap-3">
      <Toaster richColors position="top-right" />
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold text-black dark:text-[#cccccc] font-montserrat">
          KYC
        </h1>
        <small className="font-montserrat text-black dark:text-[#cccccc]">
          Complete your KYC and enjoy the full benefits of Trade Stack Network
        </small>
      </div>
      <div className="mt-5 bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] p-3 md:w-[50%]">
        <div className="">
          <div className="">
            <p>DL Number</p>
            <input
              type="text"
              value={dlNumber}
              onChange={(e) => setDlNumber(e.target.value)}
              className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
            />
          </div>
        </div>
        <div className="">
          <p>Gender</p>
          <select
            name=""
            id=""
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            defaultValue={"null"}
            className="p-2 mt-2 border-[1px] w-full bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
          >
            <option disabled value="null">
              Select One
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="mt-4">
          <p>Upload ID</p>
          <div className="mt-1 flex items-center justify-between">
            <input
              id="fileInput"
              type="file"
              accept=".jpg, .jpeg, .png, .pdf"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileInput"
              className="cursor-pointer bg-white dark:bg-black dark:text-gray-200 py-2 px-4 border border-gray-300 dark:border-[#1f1f1f] rounded-md text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-[#1a1a1a] focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              {selectedFile ? selectedFile.name : "Choose File"}
            </label>
          </div>
          {selectedFile && (
            <div className="mt-2">
              <p>Selected File: {selectedFile.name}</p>
            </div>
          )}
        </div>
        <div className="mt-4">
          <div className="">
            <p>SSN (US Residents only)</p>
            <input
              type="text"
              value={ssn}
              onChange={(e) => setSsn(e.target.value)}
              className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="">
            <p>Emlployment Status</p>
            <input
              type="text"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="">
            <p>Annual Income (USD)</p>
            <input
              type="text"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(e.target.value)}
              className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
            />
          </div>
        </div>
        <div className="w-full flex">
          <button
            onClick={() => uploadFile()}
            className="bg-[#2e9c5c] disabled:bg-green-700 hover:bg-green-500 w-[50%] mx-auto text-white p-2 rounded-md mt-5 flex items-center gap-3 justify-center"
          >
            Submit {loading ? <div className="loader"></div> : null}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
  };
};

export default connect(mapStateToProps)(KYC);
