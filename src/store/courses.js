import apiCaller from "@/utils/apiCaller";
import { create } from "zustand";
export const useCoursesStore = create((set) => ({
  courses: null,
  enrolledCourses: null,
  userCourses: null,
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
        set({ courses: res.courses });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  fetchUserCourses: (userId) => {
    apiCaller("GET", `/courses/user/${userId}`)
      .then((res) => {
        set({ userCourses: res.courses });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  fetchEnrolledCourses: (userId) => {
    apiCaller("GET", `/courses/enrolled/${userId}`)
      .then((res) => {
        set({ enrolledCourses: res.courses });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  storeCourse: (course) => {
    apiCaller("POST", "/courses", course)
      .then((res) => {
        set((state) => {
          if (!state.courses) return { courses: [res.course] };
          return {
            courses: [...state.courses, res.course],
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  enrollCourse(courseId, userId) {
    console.log("called");
    apiCaller("POST", `/courses/enroll/${courseId}`, { userId })
      .then((res) => {
        console.log("again I am here", res);
        set((state) => {
          if (!state.enrolledCourses)
            return {
              enrolledCourses: [res.course],
              courses: state.courses.map((course) => {
                if (course._id === courseId) {
                  return res.course;
                }
                return course;
              }),
            };

          return {
            enrolledCourses: [...state.enrolledCourses, res.course],
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  removeEnrolledCourse(courseId, userId) {
    apiCaller("POST", `/courses/unenroll/${courseId}`, { userId })
      .then((res) => {
        set((state) => {
          return {
            enrolledCourses: state.enrolledCourses.filter(
              (course) => course._id !== courseId
            ),
            courses: state.courses.map((course) => {
              if (course._id === courseId) {
                return res.course;
              }
              return course;
            }),
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  removeCourse(courseId){},
  removeCourse: (courseId) =>
    set((state) => ({
      courses: state.courses.filter((course) => course._id !== courseId),
    })),
}));
