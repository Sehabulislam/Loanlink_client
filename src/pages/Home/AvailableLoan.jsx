import React from "react";
import { Link } from "react-router";

const AvailableLoan = () => {
  return (
    <div className="text-center">
      <h1 className="text-red-500 font-bold md:text-xl"> -- Loan Type</h1>
      <h1 className="text-3xl md:text-4xl font-bold">Available Loans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-9/12 mx-auto">
        {/* Single Loan Card */}
        <div className="w-90 p-5 bg-base-300  flex flex-col items-center justify-center text-center space-y-2 rounded-2xl mt-5">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/007/749/686/small/money-bag-and-stopwatch-in-a-man-s-hand-quick-loan-timely-payment-financial-decision-quick-money-loan-in-the-short-term-vector.jpg"
            alt=""
            className="w-30 h-30 object-cover rounded-full"
          />
          <h1 className="text-3xl font-bold">Financial Loans</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.
          </p>
          <h3 className="font-semibold">Max Limits : $150,000</h3>
          <Link
            to={"/"}
            className="btn bg-red-500 md:px-6 py-2 text-white cursor-pointer  hover:bg-red-600 transition-all"
          >
            View Details
          </Link>
        </div>
        <div className="w-90 p-5 bg-base-300 flex flex-col items-center justify-center text-center space-y-2 rounded-2xl mt-5">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/007/749/686/small/money-bag-and-stopwatch-in-a-man-s-hand-quick-loan-timely-payment-financial-decision-quick-money-loan-in-the-short-term-vector.jpg"
            alt=""
            className="w-30 h-30 object-cover rounded-full"
          />
          <h1 className="text-3xl font-bold">Financial Loans</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.
          </p>
          <h3 className="font-semibold">Max Limits : $150,000</h3>
          <Link
            to={"/"}
            className="btn bg-red-500 md:px-6 py-2 text-white cursor-pointer  hover:bg-red-600 transition-all"
          >
            View Details
          </Link>
        </div>
        <div className="w-90 p-5 bg-base-300 flex flex-col items-center justify-center text-center space-y-2 rounded-2xl mt-5">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/007/749/686/small/money-bag-and-stopwatch-in-a-man-s-hand-quick-loan-timely-payment-financial-decision-quick-money-loan-in-the-short-term-vector.jpg"
            alt=""
            className="w-30 h-30 object-cover rounded-full"
          />
          <h1 className="text-3xl font-bold">Financial Loans</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.
          </p>
          <h3 className="font-semibold">Max Limits : $150,000</h3>
          <Link
            to={"/"}
            className="btn bg-red-500 md:px-6 py-2 text-white cursor-pointer  hover:bg-red-600 transition-all"
          >
            View Details
          </Link>
        </div>
        <div className="w-90 p-5 bg-base-300 flex flex-col items-center justify-center text-center space-y-2 rounded-2xl mt-5">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/007/749/686/small/money-bag-and-stopwatch-in-a-man-s-hand-quick-loan-timely-payment-financial-decision-quick-money-loan-in-the-short-term-vector.jpg"
            alt=""
            className="w-30 h-30 object-cover rounded-full"
          />
          <h1 className="text-3xl font-bold">Financial Loans</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.
          </p>
          <h3 className="font-semibold">Max Limits : $150,000</h3>
          <Link
            to={"/"}
            className="btn bg-red-500 md:px-6 py-2 text-white cursor-pointer  hover:bg-red-600 transition-all"
          >
            View Details
          </Link>
        </div>
        <div className="w-90 p-5 bg-base-300  flex flex-col items-center justify-center text-center space-y-2 rounded-2xl mt-5">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/007/749/686/small/money-bag-and-stopwatch-in-a-man-s-hand-quick-loan-timely-payment-financial-decision-quick-money-loan-in-the-short-term-vector.jpg"
            alt=""
            className="w-30 h-30 object-cover rounded-full"
          />
          <h1 className="text-3xl font-bold">Financial Loans</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.
          </p>
          <h3 className="font-semibold">Max Limits : $150,000</h3>
          <Link
            to={"/"}
            className="btn bg-red-500 md:px-6 py-2 text-white cursor-pointer  hover:bg-red-600 transition-all"
          >
            View Details
          </Link>
        </div>
        <div className="w-90 p-5 bg-base-300  flex flex-col items-center justify-center text-center space-y-2 rounded-2xl mt-5">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/007/749/686/small/money-bag-and-stopwatch-in-a-man-s-hand-quick-loan-timely-payment-financial-decision-quick-money-loan-in-the-short-term-vector.jpg"
            alt=""
            className="w-30 h-30 object-cover rounded-full"
          />
          <h1 className="text-3xl font-bold">Financial Loans</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.
          </p>
          <h3 className="font-semibold">Max Limits : $150,000</h3>
          <Link
            to={"/"}
            className="btn bg-red-500 md:px-6 py-2 text-white cursor-pointer  hover:bg-red-600 transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableLoan;
