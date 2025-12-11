import React from "react";
const workflowSteps = [
  {
    image: "https://t3.ftcdn.net/jpg/00/85/10/14/360_F_85101436_DG1zsouhCrJd9832IS4DgaxyHnuxmD8q.jpg",
    stepNo: 1,
    stepTitle: "Submit Loan Application",
    stepDescription:
      "User fills basic information and loan amount details to submit a smooth online loan application request.",
  },
  {
    image: "https://www.piramalrealty.com/_next/image?url=%2Fimages%2Fblogs%2Fthe-ultimate-guide-to-verify-property-documents-without-a-lawyer.jpg&w=1920&q=75",
    stepNo: 2,
    stepTitle: "Document Verification",
    stepDescription:
      "System or admin reviews user documents, verifies identity, and checks eligibility for initial loan approval.",
  },
  {
    image: "https://img.freepik.com/premium-photo/mortgage-approval-home-construction-securing-your-approved-loan-with-detailed_1293074-222049.jpg?semt=ais_hybrid&w=740&q=80",
    stepNo: 3,
    stepTitle: "Loan Approval Update",
    stepDescription:
      "User gets approval status with loan terms, interest details, and repayment schedule clearly visible in dashboard.",
  },
  {
    image: "https://thumbs.dreamstime.com/b/cash-payment-3985638.jpg",
    stepNo: 4,
    stepTitle: "Fund Disbursement",
    stepDescription:
      "Loan amount is transferred to the user’s account, and the repayment cycle starts according to set schedule.",
  },
];

const WorkProcess = () => {
  return (
    <div className="p-2 md:p-10 max-w-8xl mx-auto rounded-2xl mb-10">
      <div className="flex flex-col justify-center items-center gap-2 mb-10">
        <h1 className="text-red-500 font-bold md:text-xl">-- HOW IT WORKS --</h1>
        <h1 className="text-3xl md:text-4xl font-bold">Our Working Process</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {workflowSteps.map((work, idx) => (
          <div
            key={idx}
            className=" flex flex-col justify-center items-center gap-2 md:gap-4 p-4 rounded-2xl shadow-xl duration-75"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-26 h-25 object-cover rounded-2xl mx-auto "
            />
            <h3 className="bg-red-500 text-white p-2 rounded-full">Step {work.stepNo}</h3>
            <h1 className="text-xl md:text-2xl font-bold">
              {work.stepTitle}
            </h1>
            <p className="text-center text-sm md:text-md">{work.stepDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
