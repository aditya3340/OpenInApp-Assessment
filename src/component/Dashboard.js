
import React from "react";

import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Cards from "./Cards";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import Addprofile from "./Addprofile";


const Dashboard = () => {
  return (
    <div className="flex w-full h-[100vh] justify-between ">
      <SideBar />
      <div className="  lg:ml-[19%] w-screen p-4 ">
        <NavBar />
        <Cards />
       <BarChart/>
       <div className="flex flex-col md:flex-row my-5">
          <DoughnutChart />
          <div className="min-w-[50%] ">
            <Addprofile />
          </div>
       </div>
      </div>
    </div>
  );
};

export default Dashboard;
