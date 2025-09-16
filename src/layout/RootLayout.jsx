import React from "react";
import RootHeader from "../components/RooteHeader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import EmployeeHeader from "../components/EmployeeHeader";

const RootLayout = () => {
  return (
    <div>
      <EmployeeHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
