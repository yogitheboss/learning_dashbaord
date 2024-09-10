import { useTheme } from '@/components/theme';
import { cn } from '@/lib/utils';
import { useCoursesStore } from '@/store/courses';
import React from 'react'
import { useParams } from 'react-router-dom';

const CourseInfoStudent = () => {
  const { theme } = useTheme();
  const { courseId } = useParams();
  const { currentCourse } = useCoursesStore();
  console.log(currentCourse);
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
    >CourseInfoStudent</div>
  )
}

export default CourseInfoStudent