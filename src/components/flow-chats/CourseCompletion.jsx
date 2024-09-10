import React from "react";

const CourseCompletion = () => {
  return (
    <div className="m-4">
      <div className="w-[22rem] h-[27rem] flex flex-col bg-inherit box-border shadow-lg rounded overflow-hidden">
        <div className="w-full h-12 flex items-center justify-between box-border py-4 px-8  bg-inherit ">
          <div className="text-2xl">Course completion</div>
          <div className="text-xs px-2 text-[#019ff8] font-medium hover:bg-blue-200 bg-[#e2f3fc] rounded-sm ">
            View All
          </div>
        </div>
        <div className="w-full h-full box-border p-8">
          <div className="mb-1 text-base font-medium dark:text-white">
            In progress
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300"
              style={{ width: "15%" }}></div>
          </div>
          <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">
            Completed
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "25%" }}></div>
          </div>
          <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
            Inactive
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-red-600 h-2.5 rounded-full dark:bg-red-500"
              style={{ width: "5%" }}></div>
          </div>
          <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">
            Expeired
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-green-600 h-2.5 rounded-full dark:bg-green-500"
              style={{ width: "95%" }}></div>
          </div>
          <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">
            In progress
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-yellow-400 h-2.5 rounded-full"
              style={{ width: "80%" }}></div>
          </div>
          <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">
            Completed
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500"
              style={{ width: "25%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCompletion;
