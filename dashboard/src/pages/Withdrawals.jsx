import DepositTable from "../components/DepositTable";

const Withdrawals = () => {
  return (
    <div>
      <div className="p-10">
        <div className="">
          <h1 className="text-2xl font-bold dark:text-[#cccccc]">
            Withdrawals Log
          </h1>
          <small className="font-montserrat">View your withdrawal history</small>
        </div>
        <div className="mt-10">
          <DepositTable />
        </div>
      </div>
    </div>
  );
};

export default Withdrawals;
