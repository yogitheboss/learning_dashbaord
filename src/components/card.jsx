import React from "react";
import { Button } from "./ui/button";
import { useUserStore } from "@/store/user";
import { useCoursesStore } from "@/store/courses";
import { BsFillTrash2Fill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";

export const Card = ({
  id,
  title,
  description,
  createdBy,
  createdAt,
  originalFileName,
  enrolledStudents,
  isEnrollBtn,
  deleteAllowed,
}) => {
  const { user } = useUserStore();

  return (
    <div className="max-w-md rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-blue-50 to-blue-100 p-6 m-4 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
      <div className="mb-3 text-center">
        <h3 className="font-extrabold text-3xl text-blue-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 text-sm flex items-center mb-2">
          <FaUserGraduate className="text-blue-600 mr-2" />
          <span className="font-semibold">Created By:</span> {createdBy.name}
        </p>
        <p className="text-gray-700 text-sm flex items-center mb-2">
          <MdDateRange className="text-blue-600 mr-2" />
          <span className="font-semibold">Created At:</span>{" "}
          {new Date(createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-700 text-sm flex items-center mb-2">
          <AiOutlineFileText className="text-blue-600 mr-2" />
          <span className="font-semibold">File Name:</span> {originalFileName}
        </p>
        <p className="text-gray-700 text-sm flex items-center">
          <FaUserGraduate className="text-blue-600 mr-2" />
          <span className="font-semibold">Enrolled Students:</span>{" "}
          {enrolledStudents?.length || 0}
        </p>
      </div>
      <div className="flex justify-center mt-4">
        {isEnrollBtn && (
          <Button
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg mx-2"
            onClick={() => {
              useCoursesStore.getState().enrollCourse(id, user._id);
            }}
          >
            Enroll
          </Button>
        )}
        {deleteAllowed && (
          <Button
            className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg mx-2"
            onClick={() => {
              useCoursesStore.getState().removeEnrolledCourse(id, user._id);
            }}
          >
            <BsFillTrash2Fill className="mr-2" /> Remove
          </Button>
        )}
      </div>
    </div>
  );
};
