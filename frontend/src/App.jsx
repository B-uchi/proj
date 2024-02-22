import Homepage from "./pages/Homepage";
import "../style.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <div className="max-h-full h-[100vh] overflow-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign_in" element={<SignIn mode={'Log in'}/>} />
          <Route path="/sign_up" element={<SignIn mode={'Sign Up'} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
