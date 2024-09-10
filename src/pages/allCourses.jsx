import { useTheme } from "@/components/theme";
import { cn } from "@/lib/utils";
import { useCoursesStore } from "@/store/courses";
import { useUserStore } from "@/store/user";
import React, { useEffect } from "react";
import { CardList } from "@/components/cardlist";
import SearchInput from "@/components/searchBox";
import { useParams } from "react-router-dom";

const AllCourses = () => {
  const { courses } = useCoursesStore();
  const { theme } = useTheme();
  const { user } = useUserStore();
  const [input, setInput] = React.useState("");
  const [filteredCourses, setFilteredCourses] = React.useState([]);
  const {id}= useParams();
  useEffect(() => {
    if (input) {
      setFilteredCourses(
        courses.filter((course) => course.title.includes(input))
      );
    }else{
      setFilteredCourses(courses);
    }
  }, [input, courses]);
  useEffect(() => {
    useCoursesStore.getState().fetchCourses();
  }, [id]);
  const enrolledCourses = courses?.filter((course) =>
    course.enrolledStudents.map((student) => student._id).includes(user?._id)
  );
  const courseTitles = courses?.map((course) => course.title);
  return (
    <div
      className={cn(
        "pt-2 h-screen w-full text-center text-black",
        theme === "light" ? "bg-blue-100" : "bg-gray-900"
      )}
    >
      <SearchInput
        items={courseTitles}
        input={input}
        setInput={setInput}
      />
      <div>
        <CardList items={filteredCourses} type={"student"} />
      </div>
      <h1
        className={`text-3xl font-bold ${
          theme === "light" ? "text-blue-900" : "text-blue-100"
        }`}
      >
        Enrolled Courses
      </h1>
      <div>
        <CardList items={enrolledCourses} />
      </div>
    </div>
  );
};

export default AllCourses;
