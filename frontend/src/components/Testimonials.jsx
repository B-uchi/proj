import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      name: "Sarah Johnson",
      testimonial:
        "Trade Stack Network has been a game-changer for my financial future. Their expertise and personalized guidance have helped me achieve remarkable returns. Thank you, TSN!",
    },
    {
      name: "David Martinez",
      testimonial:
        "I've been with Trade Stack Network for years, and they never cease to amaze me. Their consistent growth strategies have made a significant difference in my portfolio. Highly recommended!",
    },
    {
      name: "James Anderson",
      testimonial:
        "Exceptional service! Trade Stack Network's team is knowledgeable and responsive. They've helped me navigate the financial markets with ease and have significantly increased my returns.",
    },
    {
      name: "Maria Rodriguez",
      testimonial:
        "Trade Stack Network's commitment to excellence shines through in their results. I couldn't be happier with the substantial growth they've achieved for my investments.",
    },
    {
      name: "Robert Turner",
      testimonial:
        "I trust Trade Stack Network implicitly with my investments. Their data-driven approach has consistently outperformed market averages. I'm grateful for their expertise.",
    },
    {
      name: "Jennifer Smith",
      testimonial:
        "Trade Stack Network has not only secured my financial future but also provided peace of mind. Their personalized approach and strong track record make them my top choice.",
    },
    {
      name: "Michael Brown",
      testimonial:
        "Working with Trade Stack Network has been a rewarding experience. Their team's deep knowledge of the financial landscape has led to substantial returns for me.",
    },
    {
      name: "Lisa Taylor",
      testimonial:
        "Trade Stack Network's founder, James Durk, had a vision that has truly paid off. Their dedication to clients' success is evident, and I'm grateful for their partnership.",
    },
  ];

  const arbitraryArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const nextItem = () => {
    setIndex((index + 1) % testimonials.length);
  };
  const prevItem = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <div className="md:w-[85%] mt-10 relative flex flex-col justify-center items-center mx-auto">
      <div className="">
        <h1 className="text-3xl font-montserrat text-center font-extrabold">
          Testimonials
        </h1>
        <h1 className="md:text-xl font-montserrat text-center">
          Hear what our <span className="text-[#2e9c5c]">satisfied</span>{" "}
          customers have to say
        </h1>
      </div>
      <div className="w-[85%] md:w-[80%] mt-5 p-2 flex gap-4">
        <div className="p-5 bg-white rounded-lg shadow-md flex flex-col">
          <FaQuoteLeft className="text-[#2e9c5c] text-3xl" />
          <div className="flex items-center justify-center">
            <p className="text-md p-2 font-inter text-[#5f5f5f]">
              {testimonials[index].testimonial}
            </p>
          </div>
          <FaQuoteRight className="text-[#2e9c5c] text-3xl self-end" />
          <div className="mt-5">
            <p className="text-md text-center font-bold text-[#2e9c5c]">
              {testimonials[index].name}
            </p>
          </div>
        </div>
        <div className="p-5 md:flex bg-white rounded-lg shadow-md hidden flex-col">
          <FaQuoteLeft className="text-[#2e9c5c] text-3xl" />
          <div className="flex items-center justify-center">
            <p className="text-md p-2 font-inter text-[#5f5f5f]">
              {testimonials[(index + 1) % testimonials.length].testimonial}
            </p>
          </div>
          <FaQuoteRight className="text-[#2e9c5c] text-3xl self-end" />
          <div className="mt-5">
            <p className="text-md text-center font-bold text-[#2e9c5c]">
              {testimonials[(index + 1) % testimonials.length].name}
            </p>
          </div>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-md hidden md:flex flex-col">
          <FaQuoteLeft className="text-[#2e9c5c] text-3xl" />
          <div className="flex items-center justify-center">
            <p className="text-md p-2 font-inter text-[#5f5f5f]">
              {testimonials[(index + 2) % testimonials.length].testimonial}
            </p>
          </div>
          <FaQuoteRight className="text-[#2e9c5c] text-3xl self-end" />
          <div className="mt-5">
            <p className="text-md text-center font-bold text-[#2e9c5c]">
              {testimonials[(index + 2) % testimonials.length].name}
            </p>
          </div>
        </div>
        <div className="absolute left-2 md:left-[5%] top-[50%] text-black dark:text-white dark:bg-[#12131f] bg-slate-300 flex p-1 rounded-full">
          <button type="button" title="next_article" onClick={() => prevItem()}>
            <IoChevronBack size={25} />
          </button>
        </div>
        <div className="absolute right-2 md:right-[5%] top-[50%] text-black dark:text-white bg-slate-300 dark:bg-[#12131f] flex p-1 rounded-full">
          <button type="button" title="next_article" onClick={() => nextItem()}>
            <IoChevronForward size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
