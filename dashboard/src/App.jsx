import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";
import Toolbar from "./components/Toolbar";
import SideNav from "./components/SideNav";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Wallets from "./pages/Wallets";
import Deposits from "./pages/Deposits";
import Withdrawals from "./pages/Withdrawals";
import Transactions from "./pages/Transactions";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import WalletDetails from "./pages/WalletDetails";
import Deposit from "./pages/Deposit";
import CompleteSignup from "./pages/CompleteSignup";
import { setCurrentUser } from "./redux/user/user.actions";
import KYC from "./pages/KYC";
import { connect } from "react-redux";
import { setShowSideNav } from "./redux/nav/sideNav.actions";
import EditProfile from "./pages/EditProfile";
import Withdraw from "./pages/Withdraw";
import Trade from "./pages/Trade";
import SignIn from "./pages/SignIn";

function App({ currentUser, setCurrentUser, setShowSideNav, showSideNav }) {
  const [loading, setLoading] = useState(true);
  const cookie = document.cookie;
  const idToken = cookie ? cookie.slice(18) : null;
  console.log(currentUser);

  useEffect(() => {
    const verifyUser = async () => {
      if (!idToken) {
        setLoading(false);
        return;
      }

      try {
        const requestOptions = {
          method: "POST",
          url: "http://localhost:8080/auth/verifyUser",
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

  if (currentUser && !currentUser.profileComplete) {
    return (
      <Router>
        <div className="">
          <Navigate to="/" />
          <Toaster richColors position="top-right" />
          <Routes>
            <Route path="/" element={<CompleteSignup />} />
          </Routes>
        </div>
      </Router>
    );
  }

  const style = !showSideNav
    ? "w-[0%] transition-all overflow-hidden md:w-[20%] z-40 absolute md:relative"
    : "w-[80%] transition-all md:w-[20%] z-40 absolute md:relative";
  if (currentUser && currentUser) {
    return (
      <Router>
        <div className="flex w-full relative md:fixed ">
          <Toaster richColors position="top-right" />
          <div className={style}>
            <SideNav setShowSideNav={setShowSideNav} />
          </div>
          <div className="flex-col flex-grow main-container">
            <Toolbar setShowSideNav={setShowSideNav} />
            <div className="dark:text-white text-black ">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/user/deposit" element={<Deposit />} />
                <Route path="/user/withdraw" element={<Withdraw />} />
                <Route path="/trade" element={<Trade />} />
                <Route path="/profile" element={<EditProfile />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/wallets" element={<Wallets />} />
                <Route path="/user/kyc" element={<KYC />} />
                <Route path="/wallets/:symbol" element={<WalletDetails />} />
                <Route path="/deposits" element={<Deposits />} />
                <Route path="/withdrawals" element={<Withdrawals />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/support" element={<Support />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  showSideNav: state.nav.showSideNav,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setShowSideNav: (value) => dispatch(setShowSideNav(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
