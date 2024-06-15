import officeBuilding from "../assets/officeBuilding.jpg";

const Markets = () => {
  return (
    <div className="p-5 md:w-[85%] mx-auto relative">
      <div
        style={{ backgroundImage: `url(${officeBuilding})` }}
        className="h-[50vh] rounded-lg bg-cover bg-center relative"
      >
        <div className="bg-black bg-opacity-50 rounded-lg h-full w-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center">
            Investment Markets
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Markets;
