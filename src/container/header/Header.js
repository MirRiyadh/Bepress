import React from "react";
import Topbar from "../../components/topbar/Topbar";
import MiddleNavbar from "../../components/middle navbar/MiddleNavbar";
import Navbar from "../../components/main navbar/Navbar";

const Header = () => {
  return (
    <div>
      <Topbar></Topbar>
      <MiddleNavbar />
      <Navbar />
    </div>
  );
};

export default Header;
