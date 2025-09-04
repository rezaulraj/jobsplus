import React from "react";
import RootHomePage from "./RootHomePage";
import FreelanceSection from "./FreelanceSection";
import SeniorManagment from "./SeniorManagment";
import JobCategory from "./JobCategory";
import TopJobs from "./TopJobs";
const RootHome = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <RootHomePage />
      <FreelanceSection />
      <SeniorManagment />
      <JobCategory />
      <TopJobs />
    </div>
  );
};

export default RootHome;
