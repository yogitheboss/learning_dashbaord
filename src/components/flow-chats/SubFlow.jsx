import { useCallback, useState, useEffect } from "react";
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import generateNodesAndEdges from "./generateNodesAndEdges";  // Import the helper function
import roadmapData from "./roadmapData";  // Your JSON roadmap

const rfStyle = {
  backgroundColor: "#D0C0F7",
};

function SubFlow() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const { nodes: initialNodes, edges: initialEdges } = generateNodesAndEdges(roadmapData);
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, []);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        style={rfStyle}
        attributionPosition="top-right">
        <Background />
      </ReactFlow>
    </div>
  );
}

export default SubFlow;
