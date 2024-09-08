import React from "react";
import UserRoleForm from "./form1";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  return (
    <div className="relative h-screen w-full items-center justify-center flex bg-gradient-to-r from-emerald-100 to-cyan-200">
      <div className="w-full top-0 fixed z-50 ">
        <Progress
        
        value={50} max={100} />
      </div>
      <UserRoleForm />
    </div>
  );
};

export default Dashboard;
