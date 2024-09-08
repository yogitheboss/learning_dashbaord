import React, { useEffect } from "react";
import UserRoleForm from "./form1";
import { Progress } from "@/components/ui/progress";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserStore } from "@/store/user";

const Dashboard = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { user: currentUser, token } = useUserStore()
  useEffect(() => {
    const fetchToken = async () => {
      let t = await getAccessTokenSilently();
      useUserStore.getState().setToken(t);
      useUserStore.getState().fetchUser(user.email);
    };
    if (user) {
      fetchToken();
    }
  }, [user]);

  return (
    <div className="relative h-screen w-full items-center justify-center flex bg-gradient-to-r from-emerald-100 to-cyan-200">
      <div className="w-full top-0 fixed z-50 ">
        <Progress value={50} max={100} />
      </div>
      <UserRoleForm />
    </div>
  );
};

export default Dashboard;
