import { useTheme } from "@/components/theme";
import { cn } from "@/lib/utils";
import { useCoursesStore } from "@/store/courses";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
const CourseInfoIns = () => {
  const { theme } = useTheme();
  const { courseId } = useParams();
  const { currentCourse } = useCoursesStore();
  
  useEffect(() => {
    if (courseId) {
      useCoursesStore.getState().fetchCourse(courseId);
    }
  }, [courseId]);
  return (
    <div
      className={cn(
        " h-screen w-full text-center text-black overflow-y-auto pb-80",
        theme === "light" ? "bg-blue-100" : "bg-blue-900"
      )}
    >
     Helloworld
    </div>
  );
};

// Sample data with Indian names and cybersecurity courses
export default CourseInfoIns;
