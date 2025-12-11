import React from "react";
import toast from "react-hot-toast";
import { FaDollarSign } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { useLoaderData, useNavigate } from "react-router";

const emiPlanSteps = [
  {
    stepNumber: 1,
    title: "Gather Basic Loan Information",
    description:
      "Determine the total loan amount you need, the annual interest rate, and the tenure",
    details:
      "Finalize these details with your bank or lender through discussion.",
    keyPoints: [
      "Total loan amount",
      "Annual interest rate",
      "Loan tenure in months/years",
    ],
  },
  {
    stepNumber: 2,
    title: "Calculate Monthly EMI",
    description:
      "Use the EMI formula to calculate your monthly installment amount.",
    details: "EMI = (P × R × (1+R)^N) / ((1+R)^N - 1)",
    keyPoints: [
      "P = Principal amount",
      "R = Monthly interest rate",
      "N = Total number of installments",
      "Use EMI calculator or Excel formula",
    ],
  },
  {
    stepNumber: 3,
    title: "Create an EMI Amortization Schedule",
    description:
      "Prepare a detailed table showing the principal and interest amount",
    details:
      "With each payment, the interest decreases and the principal amount increases.",
    keyPoints: [
      "Monthly payment breakdown",
      "Principal component per month",
      "Interest component per month",
      "Remaining balance tracking",
    ],
  },
  {
    stepNumber: 4,
    title: "Plan Your Cash Flow",
    description: "Ensure the EMI payment is within your affordability",
    details:
      "Make sure you have sufficient funds after other expenses to pay the EMI.",
    keyPoints: [
      "Monthly income assessment",
      "Monthly expenses calculation",
      "EMI affordability check",
      "Budget balance verification",
    ],
  },
  {
    stepNumber: 5,
    title: "Risk Analysis and Add a Buffer",
    description: "Keep an emergency fund to handle unexpected expenses",
    details: "Review your loan terms and check for early repayment penalties.",
    keyPoints: [
      "Create emergency fund",
      "Review loan terms",
      "Check early repayment penalties",
      "Plan for contingencies",
    ],
  },
];

const LoanDetails = () => {
  const loan = useLoaderData();
  const { category, description, image, interest, maxLimit, title } = loan;
  const navigate = useNavigate();

  const handleApplyNow = () => {
    toast.success("Apply Successful!");
  }
  return (
    <div className="md:py-10">
      <h1
        onClick={() => navigate("/allLoans")}
        className="flex justify-end md:justify-start items-center gap-1 text-gray-500 cursor-pointer mr-5"
      >
        <IoMdArrowBack size={20} />
        Back to All Loans
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-5 p-1">
        <div>
          <img
            src={image}
            alt=""
            className="md:h-130 lg:max-w-3xl  rounded-2xl object-cover shadow-2xl"
          />
        </div>
        <div className="w-full md:border-l-2 border-gray-400 md:pl-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
            <h2>
              <span className="font-bold">Category : </span>
              {category}
            </h2>
            <p className="">
              <span className="font-bold ">Description :</span> {description}
            </p>
            <h2>
              <span className="font-bold">Interest : </span>
              {interest}
            </h2>
            <h2>
              <span className="font-bold">Max Limit : </span>
              {maxLimit}
            </h2>
            <button onClick={handleApplyNow} className="btn bg-red-500 hover:bg-red-600 text-white w-full md:w-50 md:px-10 md:py-6 md:text-lg">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-10 p-1">
        <h1 className="text-red-500 text-2xl font-bold mb-6">
         5-Step EMI Plan Guide
        </h1>
        <div className="space-y-2">
            {emiPlanSteps.map((step, ind) => (
          <div 
            key={ind}
            className="collapse collapse-arrow border border-gray-300 shadow hover:shadow-md cursor-pointer rounded-lg transition"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title inline-flex items-center gap-4 text-lg bg-gray-50">
                <h2 className="bg-red-500 px-4 py-2 rounded-lg text-white ">
                  {step.stepNumber}
                </h2>
              <div className="">
                <h1 className="font-semibold text-base md:text-xl">
                {step.title}
              </h1>
              <p className="text-sm mt-1">{step.description}</p>
              </div>
            </div>
            {/* collapse content */}
            <div className="collapse-content border-t border-gray-300 space-y-3 px-5 py-4">
              <h1>{step.details}</h1>
              <h1 className="text-xl">Key Points :</h1>
              <ul className="list-disc list-inside">
                {step.keyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default LoanDetails;
