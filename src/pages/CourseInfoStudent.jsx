import { useTheme } from '@/components/theme';
import { cn } from '@/lib/utils';
import React from 'react'

const CourseInfoStudent = () => {
  const { theme } = useTheme();
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