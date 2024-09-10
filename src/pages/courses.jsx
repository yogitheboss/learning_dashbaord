import { useTheme } from "@/components/theme";
import { cn } from "@/lib/utils";
import { useCoursesStore } from "@/store/courses";
import { useUserStore } from "@/store/user";
import React, { useEffect } from "react";
import { CardList } from "@/components/cardlist";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaFileUpload } from "react-icons/fa";
const Courses = () => {
  const { userCourses } = useCoursesStore();
  const { user } = useUserStore();
  const { theme } = useTheme();
  const navigate = useNavigate();
  useEffect(() => {
    useCoursesStore.getState().fetchUserCourses(user?._id);
  }, []);
  console.log(userCourses && userCourses.map((item) => item));
  return (
    <div
      className={cn(
        " h-screen w-full text-center text-black",
        theme === "light" ? "bg-blue-100" : "bg-blue-900"
      )}
    >
      <div className="flex items-center justify-between mt-10 p-8">
        {/* Container with flex and gap */}
        <h1 className="text-4xl font-bold text-blue-50">
          Courses made by Instructor
        </h1>
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            navigate(`/dashboard/instructor/${user._id}/upload`);
          }}
        >
          <FaFileUpload /> <span>Go to Upload</span>
        </Button>
      </div>

      <CardList items={userCourses} type={"instructor"} />
    </div>
  );
};

export default Courses;
