import Navbar from "@/components/navbar";
import InteractionFlow from "@/components/reactFlow";
import { useCoursesStore } from "@/store/courses";
import React, { useEffect } from "react";
import AllCourses from "./allCourses";
import {Route, Routes } from "react-router-dom";
import CourseInfoStudent from "./CourseInfoStudent";

const Student = () => {
  useEffect(() => {
    useCoursesStore.getState().fetchCourses();
  }, []);

  return (
    <div>
      <Navbar type={"Student"} />
      <Routes>
        <Route path="/course/:id" element={<CourseInfoStudent />} />
        <Route path="/" element={<AllCourses />} />
      </Routes>

      {/* <div className="w-full h-[800px] text-gray-800">
        <InteractionFlow />
      </div> */}
    </div>
  );
};

export default Student;
