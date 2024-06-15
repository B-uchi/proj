import WalletTable from "../components/WalletTable"

const Wallets = () => {
  return (
    <div>
      <div className="p-2 md:p-10">
        <div className="">
          <h1 className="text-2xl font-bold dark:text-[#cccccc]">
            My Wallets
          </h1>
          <small className="font-montserrat">View details about your Wallets</small>
        </div>
        <div className="mt-10">
          <WalletTable/>
        </div>
      </div>
    </div>
  )
}

export default Wallets