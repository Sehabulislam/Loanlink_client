import React from "react";
import Banner from "./Banner";
import Features from "./Features";
import FAQ from "./FAQ";
import WorkProcess from "./WorkProcess";
import Reviews from "./Reviews";
import AvailableLoan from "../Loans/AvailableLoan";

const Home = () => {
  return (
    <div className="space-y-5 md:space-y-10">
      <title>Loanlink | Home</title>
      <Banner></Banner>
      <AvailableLoan></AvailableLoan>
      <WorkProcess></WorkProcess>
      <Reviews></Reviews>
      <FAQ></FAQ>
      <Features></Features>
      
    </div>
  );
};

export default Home;
