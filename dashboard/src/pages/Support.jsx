import { useState } from "react";
import SupportTable from "../components/SupportTable";
import { connect } from "react-redux";
import { toast } from "sonner";
import axios from "axios";

const Support = ({ currentUser }) => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const createTicket = async () => {
    setLoading(true);
    if (!subject || !body) {
      setLoading(false);
      return toast.error("Please fill in all fields");
    }
    const requestOptions = {
      method: "POST",
      url: "http://localhost:8080/user/createTicket",
      data: { subject, body },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie.slice(18)}`,
      },
    };
    await axios
      .request(requestOptions)
      .then((response)=>{
        if (response.status === 200) {
          toast.success("Ticket created successfully");
          setSubject("");
          setBody("");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error(
          "An error occured while creating the ticket. Try again later"
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div className="p-10">
        <div className="">
          <h1 className="text-2xl font-bold dark:text-[#cccccc]">
            Support History
          </h1>
          <small className="font-montserrat">
            History of all customer service conversations
          </small>
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
                  value={
                    currentUser &&
                    currentUser.firstName + " " + currentUser.lastName
                  }
                  readOnly
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
              <div className="w-1/2">
                <p>Email</p>
                <input
                  type="email"
                  readOnly
                  value={currentUser && currentUser.email}
                  className="w-full mt-2 p-2 border-[1px] bg-[#fafafa] dark:bg-black  dark:border-[#1f1f1f] border-[#f1f1f1] rounded-md"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="">
                <p>Subject</p>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
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
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Enter body"
                  className="dark:border-[#1f1f1f] border-[#f1f1f1] p-2 border-[2px] rounded-md mt-2 bg-[#fafafa] dark:bg-[#0a0a0a] w-full "
                ></textarea>
              </div>
            </div>
            <div className="w-full flex">
              <button
                onClick={() => createTicket()}
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

export default connect(mapStateToProps)(Support);
