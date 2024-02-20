import Bullet from "../components/Bullet";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Inquiry from "../components/Inquiry";
import Testimonials from "../components/Testimonials";
import Trust from "../components/Trust";

const Homepage = () => {
  return (
    <div className="relative">
      <HeroSection />
      {/* <Trust /> */}
      <Bullet/>
      <Testimonials />
      <Inquiry/>
      <div className="bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
