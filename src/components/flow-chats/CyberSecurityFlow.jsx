import React, { useState, useCallback } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import Sidebar from "./Sidebar";
import cyberSecurityData from "./data/cyber-security.json";

const CyberSecurityFlow = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNodeData, setSelectedNodeData] = useState(null);

  const onNodeClick = useCallback((event, node) => {
    // Open sidebar when a node is clicked
    setSelectedNodeData(node.data);
  }, []);

  const onCloseSidebar = useCallback(() => {
    setSelectedNodeData(null);
  }, []);

  // Function to convert JSON data into flow nodes and edges
  const generateFlowData = () => {
    const nodes = [];
    const edges = [];
    let nodeId = 1; // Incremental node IDs

    // Loop through topics and subtopics to create nodes and edges
    cyberSecurityData.forEach((topic, topicIndex) => {
      const topicNodeId = `${nodeId}`;
      nodes.push({
        id: topicNodeId,
        data: { label: topic.topic },
        position: { x: topicIndex * 200, y: 0 }, // Position nodes horizontally
      });
      nodeId++;

      topic.subtopics.forEach((subtopic, subtopicIndex) => {
        const subtopicNodeId = `${nodeId}`;
        nodes.push({
          id: subtopicNodeId,
          data: { label: subtopic.name, resources: subtopic.resources },
          position: { x: topicIndex * 200, y: (subtopicIndex + 1) * 150 }, // Position subtopic nodes vertically under topics
        });
        edges.push({
          id: `e${topicNodeId}-${subtopicNodeId}`,
          source: topicNodeId,
          target: subtopicNodeId,
          animated: true,
        });
        nodeId++;
      });
    });

    setNodes(nodes);
    setEdges(edges);
  };

  // Call generateFlowData when component mounts
  React.useEffect(() => {
    generateFlowData();
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div style={{ width: "100%", height: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodeClick={onNodeClick}
          fitView
          style={{ width: "100%", height: "100%" }}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
      {selectedNodeData && (
        <Sidebar nodeData={selectedNodeData} onClose={onCloseSidebar} />
      )}
    </div>
  );
};

export default CyberSecurityFlow;
