import { IoCloseCircleOutline } from "react-icons/io5";

const TradeTable = () => {
  const data = [];
  return (
    <div className="bg-white dark:bg-[#191d2b] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] h-[50vh] overflow-y-auto">
      <div className="p-3 h-full w-[150vw] md:w-full">
        <table className="w-full h-full">
          <thead className="">
            <tr className="flex justify-between border-b-[2px] dark:border-[#1f1f1f] border-[#f1f1f1]">
              <th className="p-2">Date </th>
              <th className="p-2">Pair</th>
              <th className="p-2">Leverage</th>
              <th className="p-2">Total</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item) => (
                <tr
                  key={item.id}
                  className="flex justify-between items-center p-2 border-b-[1px] dark:border-[#1f1f1f] border-[#f1f1f1]"
                >
                  <td className="p-2">{item.date}</td>
                  <td className="p-2">{item.amount}</td>
                  <td className="p-2">{item.status}</td>
                  <td className="p-2">{item.status}</td>
                  <td className="p-2">{item.status}</td>
                  <td className="p-2">{item.action}</td>
                </tr>
              ))
            ) : (
              <tr className="mx-auto flex justify-center p-3 mt-20">
                <td className="mx-auto">
                  <div className="text-[#cccccc]">
                    <IoCloseCircleOutline size={60} className="mx-auto" />
                    <p>No data found</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeTable;
