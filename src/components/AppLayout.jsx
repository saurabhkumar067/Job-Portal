import React from "react";
import Navbar from "./navSection/Navbar";
import AccessAll from "./AccessAll";
import { Outlet } from "react-router-dom";
import { BioProvider } from "./ContextAPI";
import Main from "./MainSection/Main";
import SearchAllAccess from "./searchSection/SearchAllAccess";

function AppLayout() {
  return (
    <>
      <BioProvider>
        <Navbar />
        <Outlet/>
      </BioProvider>
    </>
  );
}

export default AppLayout;
