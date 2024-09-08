import CSVUploaderTableDemo from "@/components/csvuploader";
import Instructions from "@/components/instructions";
import Navbar from "@/components/navbar";
import React from "react";

const Instructor = () => {
  return (
    <div>
      <Navbar type="instructor"/>
      <Instructions/>
      <CSVUploaderTableDemo/>
    </div>
  );
};

export default Instructor;
