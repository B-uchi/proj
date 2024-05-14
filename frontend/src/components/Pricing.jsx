const Pricing = () => {
  const plans = [
    {
      name: "Trial Plan",
      min: "$100.00",
      max: "$999.00",
      roi: "5%",
      period: "5 Days",
      bonus: "5%",
    },
    {
      name: "Basic Plan",
      min: "$1,000.00",
      max: "$6,999.00",
      roi: "5% - 7%",
      period: "5 Days",
      bonus: "5%",
    },
    {
      name: "Standard Plan",
      min: "$7,000.00",
      max: "$19,999.00",
      roi: "8% - 9%",
      period: "5 Days",
      bonus: "5%",
    },
    {
      name: "Gold Plan",
      min: "$20,000.00",
      max: "$59,999.00",
      roi: "10% - 12%",
      period: "7 Days",
      bonus: "5%",
    },
    {
      name: "Platinum Plan",
      min: "$60,000.00",
      max: "$99,999.00",
      roi: "13% - 15%",
      period: "7 Days",
      bonus: "5%",
    },
    {
      name: "Ultimate Plan",
      min: "$100,000.00",
      max: "$599,999.00",
      roi: "16% - 20%",
      period: "7 Days",
      bonus: "5%",
    },
    {
      name: "Pa Plan",
      min: "$600,000.00",
      max: "$999,999.00",
      roi: "21% - 25%",
      period: "7 Days",
      bonus: "5%",
    },
  ];

  return (
    //dc
    <div className="border-y-[1px] bg-white border-[#f1f1f1]">
      <div className="w-[90%] mx-auto">
        <div className="mt-10">
          <h1 className="md:text-3xl text-xl font-montserrat text-center font-extrabold">
            Pricing
          </h1>
          <h1 className="md:text-xl font-montserrat text-center">
            We offer flexible <span className="text-[#33337c]">investment</span>{" "}
            plans/packages to choose from
          </h1>
        </div>
        <div className="mt-6 p-4 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-500">
            <thead>
              <tr className="text-center border-b border-gray-500 bg-gray-200">
                <th className="px-4 py-3 lg:py-7 border-r">Name</th>
                <th className="px-4 py-3 lg:py-7 border-r">Minimum Investment</th>
                <th className="px-4 py-3 lg:py-7 border-r">Maximum Investment</th>
                <th className="px-4 py-3 lg:py-7 border-r">Weekly RoI</th>
                <th className="px-4 py-3 lg:py-7 border-r">Weekly Trading Period</th>
                <th className="px-4 py-3 lg:py-7">Referral Bonus</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => (
                <tr
                  key={index}
                  className={`text-center border-b border-gray-500 ${
                    index % 2 === 0 ? "bg-gray-100" : ""
                  }`}
                >
                  <td className="px-4 py-3 lg:py-7 border-r">{plan.name}</td>
                  <td className="px-4 py-3 lg:py-7 border-r">{plan.min}</td>
                  <td className="px-4 py-3 lg:py-7 border-r">{plan.max}</td>
                  <td className="px-4 py-3 lg:py-7 border-r">{plan.roi}</td>
                  <td className="px-4 py-3 lg:py-7 border-r">{plan.period}</td>
                  <td className="px-4 py-3 lg:py-7">{plan.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
