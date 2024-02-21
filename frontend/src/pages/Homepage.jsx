import Bullet from "../components/Bullet";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Inquiry from "../components/Inquiry";
import Testimonials from "../components/Testimonials";
import Trust from "../components/Trust";
import Cta from "../components/Cta";
import Markets from "../components/Markets";

const Homepage = () => {
  return (
    <div className="relative">
      <HeroSection />
      {/* <Trust /> */}
      <Bullet />
      <Markets/>
      <Testimonials />
      <Inquiry />
      <Cta />
      <div className="bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
