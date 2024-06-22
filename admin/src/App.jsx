import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import SideNav from "./components/SideNav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import Wallets from "./pages/Wallets";
import Users from "./pages/Users";
import { setShowSideNav } from "./redux/nav/sideNav.actions";

function App({ setCurrentUser, currentUser, showSideNav, setShowSideNav }) {
  const [loading, setLoading] = useState(true);
  const idToken = sessionStorage.getItem("token");

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

  if (!currentUser && !loading) {
    return (
      <Router>
        <div className="">
          <Navigate to="/sign_in" />
          <Toaster richColors position="top-right" />
          <Routes>
            <Route path="/sign_in" element={<SignIn />} />
          </Routes>
        </div>
      </Router>
    );
  }

  if (window.location.pathname === "/sign_in") {
    return (
      <Router>
        <div className="">
          <Navigate to="/sign_in" />
          <Toaster richColors position="top-right" />
          <Routes>
            <Route path="/sign_in" element={<SignIn />} />
          </Routes>
        </div>
      </Router>
    );
  }

  if (loading) {
    return (
      <div className="">
        <Toaster richColors position="top-right" />
        <div className="newtons-cradle absolute left-[50%] top-[50vh]">
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
        </div>
      </div>
    );
  }

  if (currentUser && currentUser) {
    const style = !showSideNav
      ? "w-[0%] transition-all overflow-hidden md:w-[20%] z-40 absolute md:relative"
      : "w-[80%] transition-all md:w-[20%] z-40 absolute md:relative";
    return (
      <div className="flex w-full">
        <Router>
          <Toaster richColors position="top-right" />
          {window.location.pathname != "/sign_in" ? (
            <div className={style}>
              <SideNav setShowSideNav={setShowSideNav} />
            </div>
          ) : (
            ""
          )}
          <div className="flex-grow h-[100vh] w-[80%]">
            <Navbar setShowSideNav={setShowSideNav}/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transaction />} />
              <Route path="/users" element={<Users />} />
              <Route path="/wallets" element={<Wallets />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setShowSideNav: (value) => dispatch(setShowSideNav(value)),
});

const mapStateToProps = ({ user, nav }) => ({
  currentUser: user.currentUser,
  showSideNav: nav.showSideNav,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
