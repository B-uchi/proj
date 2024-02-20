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
      <div className="h-fit w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign_in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
