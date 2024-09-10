import Navbar from "@/components/navbar";
import InteractionFlow from "@/components/reactFlow";
import { useCoursesStore } from "@/store/courses";
import React, { useEffect } from "react";
import AllCourses from "./allCourses";

const Student = () => {
  useEffect(() => {
    useCoursesStore.getState().fetchCourses();
  }, []);

  return (
    <div>
      <Navbar type={"Student"} />
      <AllCourses />
      {/* <div className="w-full h-[800px] text-gray-800">
        <InteractionFlow />
      </div> */}
    </div>
  );
};

export default Student;
