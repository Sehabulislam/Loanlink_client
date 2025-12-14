import React from "react";
import { Link } from "react-router";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const AvailableLoan = () => {
  const axiosSecure = useAxios();
  const { data } = useQuery({
    queryKey: ["loans"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/availableLoans`);
      return res.data;
    },
  });

  return (
    <div className="text-center">
      <h1 className="text-red-500 font-bold md:text-xl"> -- Loan Type</h1>
      <h1 className="text-3xl md:text-4xl font-bold mb-5">Available Loans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 md:w-10/12 mx-auto gap-5">
        {/* Single Loan Card */}
        {data?.map((loan, ind) => (
          <div
            key={ind}
            className="w-full p-5 bg-base-300  flex flex-col items-center justify-center text-center space-y-1 md:space-y-2 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <img
              src={loan.image}
              className="w-25 md:w-30 h-25 md:h-30 object-cover rounded-full"
            />
            <h1 className="text-2xl md:text-3xl font-bold">{loan.title}</h1>
            <p className="text-sm md:text-md">{loan.description}</p>
            <h3 className="font-semibold">Max Limits : ${loan.maxLimit}</h3>
            <Link to={`/loanDetails/${loan._id}`} className="btn bg-red-500 md:px-6 py-2 text-white cursor-pointer  hover:bg-red-600 transition-all">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableLoan;
