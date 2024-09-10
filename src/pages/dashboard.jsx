import React, { useEffect } from "react";
import UserRoleForm from "./form1";
import { Progress } from "@/components/ui/progress";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserStore } from "@/store/user";
import { Route, Routes, useNavigate } from "react-router-dom";
import Loading from "@/components/loading";
import Student from "./student";
import Instructor from "./instructor";
import ProtectedRoute from "@/components/protectedRoute.jsx";

const Dashboard = () => {
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  const [progress, setProgress] = React.useState(50);
  const { user, getAccessTokenSilently } = useAuth0();
  const { user: currentUser, token } = useUserStore();
  useEffect(() => {
    const fetchToken = async () => {
      try {
        let t = await getAccessTokenSilently();
        useUserStore.getState().setToken(t);
        useUserStore.getState().fetchUser(user.email);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    if (user) {
      fetchToken();
    }
  }, [user]);
  useEffect(() => {
    if (currentUser && currentUser._id) {
      if (currentUser.role === "student") {
        navigate(`/dashboard/student/${currentUser._id}`);
      } else if (currentUser.role === "instructor") {
        navigate(`/dashboard/instructor/${currentUser._id}/courses`);
      }
    }
  }, [currentUser]);
  if (loading) {
    return (
      <div className="flex h-screen w-full justify-center align-center">
        <Loading />
      </div>
    );
  }

  let currentRole = currentUser?.role;
  return currentRole === "" || !currentRole ? (
    <div className="relative h-screen w-full items-center justify-center flex bg-gradient-to-r from-emerald-100 to-cyan-200">
      <div className="w-full top-0 fixed z-50 ">
        <Progress value={progress} max={100} />
      </div>
      <UserRoleForm setProgress={setProgress} userId={currentUser?._id} />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/student/:id" element={<Student />} />
        <Route path="/instructor/:id/*" element={<Instructor />} />
      </Route>
    </Routes>
  );
};

export default Dashboard;
