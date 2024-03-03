import officeBuilding from "../assets/officeBuilding.jpg";
import { GiDiamondTrophy } from "react-icons/gi";

const About = () => {
  return (
    <div className="p-5">
      <div className="">
        <div
          style={{ backgroundImage: `url(${officeBuilding})` }}
          className="md:w-[80%] h-[50vh] mx-auto rounded-lg bg-cover bg-center relative"
        >
          <div className="bg-black bg-opacity-50 rounded-lg h-full w-full flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold text-center">
              About Trade Stack Network
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 md:w-[80%] mx-auto">
          <div className="flex flex-col items-center border-[1px] rounded-lg p-3 border-[#f1f1f1] cursor-pointer">
            <GiDiamondTrophy className="text-[#f1c40f] text-3xl" />
            <small>World Trade Summit</small>
            <small>Dubai, 2012</small>
          </div>
          <div className="flex flex-col items-center border-[1px] rounded-lg p-3 border-[#f1f1f1] cursor-pointer">
            <GiDiamondTrophy className="text-[#f1c40f] text-3xl" />
            <small>Inv. Platform of the year</small>
            <small>2016-2018</small>
          </div>
          <div className="flex flex-col items-center border-[1px] rounded-lg p-3 border-[#f1f1f1] cursor-pointer">
            <GiDiamondTrophy className="text-[#f1c40f] text-3xl" />
            <small>Annual Forex Summit</small>
            <small>CA, 2021</small>
          </div>
        </div>
      </div>
      <div class="max-w-4xl mx-auto mt-6">
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Trade Stack Network is a leading investment platform that caters to
          traders and investors across the globe. Founded in 2005, our platform
          has been empowering individuals to achieve their financial goals
          through strategic trading and investment opportunities. With a team of
          experienced professionals and cutting-edge technology, we strive to
          deliver unparalleled services and support to our clients.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          At Trade Stack Network, we understand the complexities of financial
          markets and aim to simplify the trading process for our users. Whether
          you are a seasoned trader or new to the world of investing, our
          platform offers a comprehensive suite of tools and resources to help
          you navigate the markets with confidence.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Our mission is to democratize access to financial markets and empower
          individuals to take control of their financial futures. We believe in
          transparency, integrity, and innovation, and these values are at the
          core of everything we do.
        </p>
        <h3 class="text-2xl font-bold mb-2">Our Services</h3>
        <ul class="list-disc pl-8 mb-6">
          <li class="mb-2">
            <strong>Comprehensive Market Analysis:</strong> Gain insights into
            market trends, news, and analysis to make informed trading
            decisions.
          </li>
          <li class="mb-2">
            <strong>Trading Education:</strong> Access educational resources,
            tutorials, and webinars to enhance your trading skills and
            knowledge.
          </li>
          <li class="mb-2">
            <strong>Advanced Trading Platforms:</strong> Utilize our
            state-of-the-art trading platforms with advanced charting tools and
            real-time data.
          </li>
          <li class="mb-2">
            <strong>Personalized Support:</strong> Receive dedicated support
            from our team of experts who are committed to your success.
          </li>
        </ul>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Whether you're interested in stocks, commodities, forex, or
          cryptocurrencies, Trade Stack Network provides the resources and
          support you need to thrive in today's dynamic markets. Join us and
          embark on your journey to financial success.
        </p>
        <h3 class="text-2xl font-bold mb-2">Our Team</h3>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Trade Stack Network is filled with passionate individuals who are
          dedicated to helping you achieve your financial goals. Our team
          consists of seasoned traders, analysts, developers, and support staff
          who are committed to providing the best possible experience for our
          users.
        </p>
        <h3 class="text-2xl font-bold mb-2">Contact Us</h3>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Have questions or need assistance? Don't hesitate to reach out to our
          support team. We're here to help you every step of the way on your
          trading journey.
        </p>
        <p>
          Support E-mail:{" "}
          <a href="mailto:support@tradestacknetwork.com">
            support@tradestacknetwork.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
