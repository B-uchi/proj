import officeBuilding from "../assets/officeBuilding.jpg";

const Careers = () => {
  return (
    <div className="mx-auto ">
      <div className="bg-white w-full p-3 mb-5 ">
        <div className="">
          <p className="text-[#4d4d4d] mx-auto lg:w-[75%] font-siliguri">
            Home &gt; Careers
          </p>
        </div>
        <div>
          <h1 className="font-montserrat text-2xl mt-2 lg:text-4xl font-bold text-center">
            Careers / Job Listings
          </h1>
          <div className="py-10 lg:h-[50vh] h-[30vh] w-[75%] mx-auto">
            No job listings available at the moment. Check again later
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
