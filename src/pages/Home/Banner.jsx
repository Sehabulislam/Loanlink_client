import Bannar from "../../assets/loan_office.jpg";

const Banner = () => {
  return (
    <div className="bg-[url(https://thegenius.co/wp/finlon/live/wp-content/uploads/2022/09/slider-1-2-1.png)] bg-cover bg-center h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] rounded-2xl flex justify-start items-center">
      <div className="p-4 md:p-10 md:w-200">
        <h1 className="text-white font-bold md:text-xl">
          -- Smart Loans For <span className="text-red-500">Bright Futures</span>
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Our Loans Will Make Your Dreams Come True
        </h1>
        <div className="flex gap-2 md:gap-5">
            <button className="btn bg-red-500 hover:bg-red-600 border-2 border-red-500 md:p-6 md:text-lg text-white shadow-none">
          Our Service
        </button>
        <button className="btn border-2 bg-transparent hover:shadow-2xl hover:shadow-red-500 text-white border-red-500 md:p-6 md:text-lg shadow-none">
          Apply For Loan
        </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
