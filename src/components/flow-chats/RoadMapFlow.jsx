import React from "react";
import "reactflow/dist/style.css";
import SubFlow from "./SubFlow";
import CyberSecurityFlow from "./CyberSecurityFlow";

export default function RoadMapFlow() {
  

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <SubFlow />
      <CyberSecurityFlow />
    </div>
  );
}
