import CsvUploadForm from "@/components/csvuploader";
import Navbar from "@/components/navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses";

const Instructor = () => {
  return (
    <div>
      <Navbar type="instructor" />
      <Routes>
        <Route path="/upload" element={<CsvUploadForm />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
};

export default Instructor;
