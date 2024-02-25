import Toolbar from "./components/Toolbar";
import SideNav from "./components/SideNav";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import Wallets from "./pages/Wallets";
import Deposits from "./pages/Deposits";
import Withdrawals from "./pages/Withdrawals";
import Transactions from "./pages/Transactions";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import { useState } from "react";
import WalletDetails from "./pages/WalletDetails";


function App() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const style = !sideNavOpen ? "w-[0%] transition-all overflow-hidden md:w-[20%] z-50 absolute md:relative" : "w-[80%] transition-all md:w-[20%] z-50 absolute md:relative";
  return (
    <Router>
      <div className="flex w-full relative md:fixed ">
        <div className={style}>
          <SideNav setSideNavOpen={setSideNavOpen}/>
        </div>
        <div className="flex-col flex-grow main-container">
          <Toolbar setSideNavOpen={setSideNavOpen}/>
          <div className="dark:text-white text-black ">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/wallets" element={<Wallets />} />
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

export default App;
