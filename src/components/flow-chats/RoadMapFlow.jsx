import React from "react";
import "reactflow/dist/style.css";
import SubFlow from "./SubFlow";
import CyberSecurityFlow from "./CyberSecurityFlow";
import CourseCompletion from "./CourseCompletion";

export default function RoadMapFlow() {
  

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* <SubFlow />
      <CyberSecurityFlow /> */}
      <CourseCompletion />
    </div>
  );
}
