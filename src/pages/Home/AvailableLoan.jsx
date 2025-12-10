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
      <h1 className="text-3xl md:text-4xl font-bold">Available Loans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-3">
        {/* Single Loan Card */}
        {data?.map((loan) => (
          <div className="w-full p-5 bg-base-300  flex flex-col items-center justify-center text-center space-y-2 rounded-2xl mt-5">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/007/749/686/small/money-bag-and-stopwatch-in-a-man-s-hand-quick-loan-timely-payment-financial-decision-quick-money-loan-in-the-short-term-vector.jpg"
              alt=""
              className="w-30 h-30 object-cover rounded-full"
            />
            <h1 className="text-3xl font-bold">{loan.title}</h1>
            <p>{loan.description}</p>
            <h3 className="font-semibold">Max Limits : ${loan.maxLimit}</h3>
            <Link className="btn bg-red-500 md:px-6 py-2 text-white cursor-pointer  hover:bg-red-600 transition-all">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableLoan;
