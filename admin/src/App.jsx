import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import SideNav from "./components/SideNav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";

function App({ setCurrentUser }) {
  const [loading, setLoading] = useState(true);
  const cookie = document.cookie;
  const idToken = cookie ? cookie.slice(18) : null;

  useEffect(() => {
    const verifyUser = async () => {
      if (!idToken) {
        setLoading(false);
        return;
      }

      try {
        const requestOptions = {
          method: "POST",
          url: "https://proj-server-3j4y.onrender.com/auth/verifyUser",
          data: { idToken },
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await axios.request(requestOptions);
        if (res.status === 200 && res.data.user) {
          setCurrentUser(res.data.user);
          toast.success("Welcome to your dashboard!");
        }
      } catch (error) {
        toast.error(
          "An error occurred while verifying user. Please try again later."
        );

        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

  return (
    <div className="flex w-full">
      <Toaster richColors position="top-right" />
      {!window.location.pathname == "/sign_in" ? (
        <div className="lg:w-[20%]">
          <SideNav />
        </div>
      ) : (
        ""
      )}
      <div className="flex-grow">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/transactions" element={<Transaction />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
