import Bullet from "../components/Bullet";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Inquiry from "../components/Inquiry";
import Testimonials from "../components/Testimonials";
import Trust from "../components/Trust";
import Cta from "../components/Cta";
import Markets from "../components/Markets";
import BriefAbout from "../components/BriefAbout";
import InvestmentMarkets from "../components/InvestmentMarkets";

const Homepage = () => {
  return (
    <div className="relative scroll-smooth">
      <HeroSection />
      <BriefAbout/>
      <Trust />
      <Bullet />
      <Markets/>
      <Testimonials />
      <InvestmentMarkets/>
      <Inquiry />
      <Cta />
      <div className="bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
