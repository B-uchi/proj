import { useEffect, useState } from "react";
import DepositTable from "../components/DepositTable";
import axios from "axios";

const Deposits = () => {
  const [deposits, setDeposits] = useState([]);
  useEffect(() => {
    const fetchDeposits = async () => {
      const requestOptions = {
        url: "http://localhost:8080/user/getDeposits",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.slice(18)}`,
        },
      };

      await axios
        .request(requestOptions)
        .then((response) => {
          if (response.status === 200) {
            setDeposits(response.data.deposits);
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error("An error occurred. Please try again later.");
        });
    };
    fetchDeposits();
  }, []);

  return (
    <div>
      <div className ="p-10">
        <div className="">
          <h1 className="text-2xl font-bold dark:text-[#cccccc]">
            Deposit Log
          </h1>
          <small className="font-montserrat">View your deposit history</small>
        </div>
        <div className="mt-10">
          <DepositTable data={deposits}/>
        </div>
      </div>
    </div>
  );
};

export default Deposits;
