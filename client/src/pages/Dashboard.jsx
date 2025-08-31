import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/core/Dasboard/SideBar";

const Dashboard = () => {
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] flex flex-col md:flex-row w-full">
      <div className="w-full md:w-auto">
        <SideBar />
      </div>
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto w-full">
        <div className="mx-auto w-full max-w-[1000px] py-6 px-2 sm:px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
