import Homepage from "./pages/Homepage";
import "../style.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Markets from "./pages/Markets";
import Help from "./pages/Help";
import Footer from "./components/Footer";
import About from "./pages/About";
import Careers from "./pages/Careers";

function App() {
  return (
    <Router>
      <div className="max-h-full h-[100vh] overflow-auto relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/how_it_works" element={<Help />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <div className="static bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
