import React from "react";
import { VscActivateBreakpoints } from "react-icons/vsc";
const features = [
  {
    title: "Instant Loan Calculator",
    description:
      "Users can quickly calculate monthly installments, interest, and total repayment by entering loan amount, duration, and rate—showing real-time results.",
  },
  {
    title: "Fast Approval System",
    description:
      "The system reviews basic information and instantly provides a preliminary approval decision, helping users save time and complete applications faster.",
  },
  {
    title: "Secure Document Upload",
    description:
      "Users can safely upload required documents through an encrypted system, allowing easy submission directly from mobile or computer.",
  },
  {
    title: "Repayment Tracker & Reminders",
    description:
      "A built-in calendar and notification system helps users track installments, view payment status, and receive automated reminders.",
  },
];

const Features = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-7">
        <div>
          <img
            src="https://www.morty.com/resources/wp-content/uploads/2023/10/referral-hero-1024x889.webp"
            alt=""
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-red-500 font-bold"> -- OUR FEATURES</h1>
          <h1 className="text-4xl font-bold">
            We have better and more feature
          </h1>
          <p></p>
          <ul>
            {features.map((feature) => (
              <li className="mt-3">
                <h1 className="font-bold text-lg flex items-center gap-1">
                  <VscActivateBreakpoints size={23} />
                  {feature.title}
                </h1>
                <p className="text-gray-500 ml-5">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
