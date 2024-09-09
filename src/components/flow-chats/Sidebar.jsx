import React from 'react';
import "./sidebar.css";
import { IoCloseOutline } from "react-icons/io5";

function Sidebar({ nodeData, onClose }) {
  // nodeData =  "hello data";
  console.log(nodeData);
  if (!nodeData) return null; // Do not render if no node data

  return (
    <div className="sidebar">
      <button className="close-button" onClick={onClose}><IoCloseOutline /></button>
      <h2 className=' text-black'>{nodeData.label}</h2>
      {/* Add more detailed info or actions based on the nodeData */}
    </div>
  );
}

export default Sidebar;
