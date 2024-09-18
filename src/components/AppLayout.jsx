import React from "react";
import Navbar from "./navSection/Navbar";
import { Outlet } from "react-router-dom";
import { BioProvider } from "./ContextAPI";
import Footer from "./footerSection/Footer";

function AppLayout() {
  return (
    <>
      <BioProvider>
        <Navbar />
        <Outlet />
        <Footer/>
      </BioProvider>
    </>
  );
}

export default AppLayout;
