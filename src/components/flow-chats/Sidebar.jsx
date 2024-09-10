import React from "react";
import { IoCloseOutline } from "react-icons/io5";

function Sidebar({ nodeData, onClose }) {
  if (!nodeData) return null; // Do not render if no node data

  const resources = nodeData.resources;

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 overflow-y-auto z-50">
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl"
        onClick={onClose}
      >
        <IoCloseOutline />
      </button>
      <h2 className="text-2xl font-bold text-black mb-4">{nodeData.label}</h2>
      <div className="text-sm text-black flex flex-col space-y-4">
        {resources?.map((res, index) => (
          <div key={index}>
            <div className="font-medium">{res.title}</div>
            <a
              href={res.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              {res.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
