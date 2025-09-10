import React from "react";
import SeekHeader from "../components/SeekHeader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const SeekerLayout = () => {
  return (
    <div>
      <SeekHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SeekerLayout;
