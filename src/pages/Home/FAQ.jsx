import React from "react";
const faq = [
  {
    question: "How long does the loan approval process take?",
    answer:
      "Most applications get an instant preliminary decision. Final approval depends on document verification and eligibility checks.",
  },
  {
    question: "What documents are required to apply for a loan?",
    answer:
      "You need a valid ID, income proof, and basic personal details. Some loan types may require additional documents.",
  },
  {
    question: "Is my personal information safe on this platform?",
    answer:
      "Yes. All user data is encrypted and handled securely to ensure privacy and protection during the entire loan process.",
  },
  {
    question: "Can I track my loan repayment schedule?",
    answer:
      "Yes. You can view installment dates, track payment status, and receive reminders to avoid missing any deadlines.",
  },
];
const FAQ = () => {
  return (
    <div className="md:w-8/12 mx-auto">
      <div className="space-y-3 text-center">
        <h1 className="text-red-500 font-bold md:text-xl"> -- FAQ</h1>
        <h1 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions ?</h1>
        {faq.map((f,ind) => (
          <div key={ind} className="collapse collapse-arrow bg-base-100 border border-base-300 text-start">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">{f.question}</div>
            <div className="collapse-content text-sm text-gray-500">
              {f.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
