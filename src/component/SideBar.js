import React from "react";

const SideBar = () => {
  return (
    <div className="hidden  lg:flex lg:flex-col bg-[#4285F4] py-10 px-12  rounded-xl text-white h-full justify-between min-w-[17%]">
      {/* left navBar */}
      <div className=" flex flex-col  justify-center">
        <h1 className="text-3xl font-bold ">Board.</h1>
        <div className="mt-10 text-md dash-nav w-full">
          <ul>Dashboard</ul>
          <ul>Transaction</ul>
          <ul>Schedules</ul>
          <ul>Users</ul>
          <ul>Settings</ul>
        </div>
      </div>
      <div className="dash-nav">
        <ul>Help</ul>
        <ul>Contact Us</ul>
      </div>
    </div>
  );
};

export default SideBar;
