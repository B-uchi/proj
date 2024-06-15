import { IoCloseCircleOutline } from "react-icons/io5";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const SupportTable = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const fetchTickets = async () => {
      const requestOptions = {
        method: "GET",
        url: "https://proj-server-3j4y.onrender.com/user/getTickets",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.slice(18)}`,
        },
      };
      await axios
        .request(requestOptions)
        .then((response) => {
          if (response.status === 200) {
            setTickets(response.data);
          }
        })
        .catch((err) => {
          toast.error("An error occurred. Please try again later.");
          console.error(err);
        });
    };
    fetchTickets();
  }, []);

  return (
    <div className="bg-white dark:bg-[#191d2b] border-[2px] rounded-md dark:border-[#1f1f1f] border-[#575757] h-[50vh] w-[100%]">
      <div className="p-2 h-full overflow-x-scroll">
        <table className="table-auto w-full">
          <thead className="">
            <tr className="flex justify-between rounded-lg">
              <th className="w-1/5 p-2 text-left">Date</th>
              <th className="w-1/5 p-2 text-left">Subject</th>
              <th className="w-1/5 p-2 text-right">Reply</th>
              <th className="w-1/5 p-2 text-right">Status</th>
              <th className="w-1/5 p-2 text-right">Details</th>
            </tr>
          </thead>
          <tbody className="">
            {tickets && tickets.length > 0 ? (
              tickets.map((item) => (
                <tr
                  key={item.id}
                  className="flex items-center justify-between p-2 border-b-[1px] dark:border-[#1f1f1f] border-[#575757]"
                >
                  <td className="w-1/5 text-left text-[12px] md:text-base">
                    {new Date(
                      item.createdAt._seconds * 1000 +
                        Math.round(item.createdAt._nanoseconds / 1000000)
                    )
                      .toDateString()
                      .slice(4, 15)}
                  </td>
                  <td className="w-1/5 line-clamp-1 text-left text-[12px] md:text-base">
                    {item.subject}
                  </td>
                  <td className="w-1/5 text-right p-2 text-[12px] md:text-base ">
                    {item.reply.length > 0 ? "Response" : "None"}
                  </td>
                  <td className="w-1/5 text-right p-2 text-[12px] md:text-base">
                    {item.status}
                  </td>
                  <td className="w-1/5 text-right p-2 text-[12px] md:text-base ">
                    <button
                      onClick={() => {}}
                      className="p-2 bg-[#345d96] rounded-lg text-[#cccccc]"
                    >
                      View
                    </button>
                  </td>
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
