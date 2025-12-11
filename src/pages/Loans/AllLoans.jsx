import React from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/Spinner";
import { Link } from "react-router";

const AllLoans = () => {
  const axiosSecure = useAxios();
  const { data, isLoading } = useQuery({
    queryKey: ["loans"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/loans`);
      return res.data;
    },
  });
  if (isLoading) return <Spinner></Spinner>;
  return (
    <div className="">
      <div>
        <h1 className="text-red-500 font-bold md:text-xl text-center">
          {" "}
          -- All Loans
        </h1>
      </div>
      <div className="md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 py-5">
        {data?.map((loan) => (
          <div className="w-full p-2 bg-base-300 space-y-2 rounded-2xl">
            <img
              src={loan.image}
              className="h-50 w-full object-cover rounded-xl"
            />
            <h1 className="text-3xl font-bold">{loan.title}</h1>
            <h1 className="font-semibold">Category : {loan.category}</h1>
            <h3 className="font-semibold">Max Limits : ${loan.maxLimit}</h3>
            <h1 className="font-semibold">Interest : {loan.interest}</h1>
            <Link to={`/loanDetails/${loan._id}`} className="btn bg-red-500 w-full rounded-xl md:px-6 py-2 text-white cursor-pointer  hover:bg-red-600 transition-all">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllLoans;
