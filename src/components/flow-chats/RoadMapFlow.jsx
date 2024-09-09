import React, { useCallback, useEffect } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import SubFlow from './SubFlow';

const roadmapData = {
  "1. Basics of Web Development": {
    "Internet Basics": [
      "How the internet works",
      "What is HTTP/HTTPS",
      "DNS and Domain Names"
    ],
    "Web Hosting & Domain Names": [
      "Understanding servers",
      "Hosting services",
      "How to deploy a website"
    ],
    "Version Control (Git & GitHub)": [
      "Learning Git",
      "Pushing code to GitHub",
      "Collaborating with others"
    ]
  },
  "2. Frontend Development": {
    "A. HTML & CSS": {
      "HTML": [
        "Basic structure",
        "Tags",
        "Forms",
        "Tables",
        "Media tags"
      ],
      "CSS": [
        "Styling",
        "Layouts (Box Model, Flexbox, Grid)",
        "Responsiveness (Media Queries)"
      ]
    },
    "B. JavaScript (JS)": {
      "JavaScript Fundamentals": [
        "Variables",
        "Loops",
        "Conditionals",
        "Functions",
        "Events",
        "DOM manipulation"
      ],
      "Modern JavaScript (ES6+)": [
        "Arrow functions",
        "Promises",
        "Async/await",
        "Destructuring",
        "Template literals"
      ]
    }
  }
};

const generateNodesAndEdges = (data) => {
  let nodes = [];
  let edges = [];
  let idCounter = 1;
  let levelY = {};

  const traverseData = (obj, parentId = null, level = 0, xOffset = 0) => {
    if (!levelY[level]) {
      levelY[level] = 0;
    }
    
    Object.keys(obj).forEach((key, index) => {
      const currentId = String(idCounter++);
      const xPos = index * 250 + xOffset;
      const yPos = level * 150;
      
      nodes.push({
        id: currentId,
        position: { x: xPos, y: yPos },
        data: { label: key },
      });

      if (parentId) {
        edges.push({ id: `e${parentId}-${currentId}`, source: parentId, target: currentId });
      }

      if (typeof obj[key] === 'object') {
        traverseData(obj[key], currentId, level + 1, xOffset + 100);
      } else if (Array.isArray(obj[key])) {
        obj[key].forEach((item, itemIndex) => {
          const itemId = String(idCounter++);
          const childXPos = itemIndex * 250 + xOffset + 150;
          const childYPos = (level + 1) * 150;

          nodes.push({
            id: itemId,
            position: { x: childXPos, y: childYPos },
            data: { label: item },
          });
          edges.push({ id: `e${currentId}-${itemId}`, source: currentId, target: itemId });
        });
      }
    });
  };

  traverseData(data);
  return { nodes, edges };
};

export default function RoadMapFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const { nodes: initialNodes, edges: initialEdges } = generateNodesAndEdges(roadmapData);
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [setNodes, setEdges]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
            <SubFlow />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
    </div>
  );
}
