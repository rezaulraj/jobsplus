import React from "react";
import RootHomePage from "./RootHomePage";
import FreelanceSection from "./FreelanceSection";
import SeniorManagment from "./SeniorManagment";
import JobCategory from "./JobCategory";
import TopJobs from "./TopJobs";
import Benefit from "./Benefit";
import FreshJob from "./FreshJob";
const RootHome = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <RootHomePage />
      <FreelanceSection />
      <SeniorManagment />
      <JobCategory />
      <TopJobs />
      <Benefit />
      <FreshJob />
    </div>
  );
};

export default RootHome;
