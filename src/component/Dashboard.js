import React from "react";

import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Cards from "./Cards";

const Dashboard = () => {
  return (
    <div className="flex p-10 h-[100vh] w-[100vw] bg-[#F8FAFF] justify-start ">
      <SideBar />
      <div className="w-full ml-10 ">
        <NavBar />
        <Cards />
      </div>
    </div>
  );
};

export default Dashboard;
