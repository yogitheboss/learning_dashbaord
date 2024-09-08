import apiCaller from "@/utils/apiCaller";
import create from "zustand";
export const useCoursesStore = create((set) => ({
  courses: null,
  setCourses: (courses) =>
    set({
      courses,
    }),
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, course],
    })),
  fetchCourses: () => {
    apiCaller("GET", "/courses")
      .then((res) => {
        set({ courses: res });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  storeCourse: (course) => {
    apiCaller("POST", "/courses", course)
      .then((res) => {
        set((state) => ({
          courses: [...state.courses, res],
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  },
  removeCourse: (courseId) =>
    set((state) => ({
      courses: state.courses.filter((course) => course._id !== courseId),
    })),
}));
