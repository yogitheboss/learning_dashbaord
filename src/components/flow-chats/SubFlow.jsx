import { useCallback, useState, useEffect } from "react";
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import generateNodesAndEdges from "./generateNodesAndEdges";
// import roadmapData from "./roadmapData"; // Import roadmap data by js
import roadmapData from "./data/web-dev.json";
import Sidebar from "./Sidebar";

const rfStyle = {
  backgroundColor: "#231F2E",
};

function SubFlow() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

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

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
  }, []);

  const closeSidebar = useCallback(() => {
    setSelectedNode(null);
  }, []);

  return (
    <ReactFlowProvider>
      <div className="w-screen h-screen">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick} // Add onNodeClick handler
          fitView
          style={rfStyle}
          attributionPosition="top-right">
          <Background />
        </ReactFlow>
        {/* Render Sidebar */}
        <Sidebar nodeData={selectedNode?.data} onClose={closeSidebar} />
      </div>
    </ReactFlowProvider>
  );
}

export default SubFlow;
