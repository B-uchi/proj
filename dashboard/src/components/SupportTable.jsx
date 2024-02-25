import { IoCloseCircleOutline } from "react-icons/io5";

const SupportTable = ({ data }) => {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#f1f1f1] h-[50vh]">
      <div className="p-3 h-full">
        <table className="w-full h-full">
          <thead className="">
            <tr className="flex justify-between rounded-lg">
              <th className="p-2">Date</th>
              <th className="p-2">Subject</th>
              <th className="p-2">Reply</th>
              <th className="p-2">Status</th>
              <th className="p-2">Details</th>
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
                  <td className="p-2">{item.paymentMethod}</td>
                  <td className="p-2">{item.amount}</td>
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

export default SupportTable;
