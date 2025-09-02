import React from "react";
import RootHomePage from "./RootHomePage";
import FreelanceSection from "./FreelanceSection";
import SeniorManagment from "./SeniorManagment";
const RootHome = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <RootHomePage />
      <FreelanceSection />
      <SeniorManagment />
    </div>
  );
};

export default RootHome;
