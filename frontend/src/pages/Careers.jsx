import officeBuilding from "../assets/officeBuilding.jpg";

const Careers = () => {
  return (
    <div className="p-5 md:w-[85%] mx-auto ">
      <div
        style={{ backgroundImage: `url(${officeBuilding})` }}
        className="h-[50vh] rounded-lg bg-cover bg-center relative"
      >
        <div className="bg-black bg-opacity-50 rounded-lg h-full w-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center">Careers</h1>
        </div>
      </div>
      <div className="mt-10 mb-10 bg-white p-5">
        <h1 className="font-montserrat text-xl">
          No jop openings available right now. Check again soon...
        </h1>
      </div>
    </div>
  );
};

export default Careers;
