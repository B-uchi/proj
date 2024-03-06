import DepositTable from "../components/DepositTable";


const Deposits = () => {
  

  return (
    <div>
      <div className ="p-2 md:p-10">
        <div className="">
          <h1 className="text-2xl font-bold dark:text-[#cccccc]">
            Deposit Log
          </h1>
          <small className="font-montserrat">View your deposit history</small>
        </div>
        <div className="mt-10">
          <DepositTable />
        </div>
      </div>
    </div>
  );
};

export default Deposits;
