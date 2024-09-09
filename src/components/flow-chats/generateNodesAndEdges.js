let nodeId = 1;
const verticalSpacing = 150;  // Space between levels
const horizontalSpacing = 200; // Space between sibling nodes

function generateNodesAndEdges(data) {
  const nodes = [];
  const edges = [];
  const levelPositions = {}; // Keeps track of the X position of each level
  let maxDepth = 0;

  const traverseData = (obj, parentId = null, depth = 0) => {
    if (!levelPositions[depth]) {
      levelPositions[depth] = 0;
    }

    Object.keys(obj).forEach((key, index) => {
      const currentId = `node-${nodeId++}`;

      // Assign position
      nodes.push({
        id: currentId,
        data: { label: key },
        position: { x: levelPositions[depth], y: depth * verticalSpacing },
      });

      if (parentId) {
        // Add edge to parent node
        edges.push({
          id: `edge-${parentId}-${currentId}`,
          source: parentId,
          target: currentId,
        });
      }

      // Update position for the next node at this depth
      levelPositions[depth] += horizontalSpacing;

      const value = obj[key];
      if (typeof value === 'object' && !Array.isArray(value)) {
        traverseData(value, currentId, depth + 1); // Recursive call for nested objects
      } else if (Array.isArray(value)) {
        value.forEach((item, itemIndex) => {
          const itemId = `node-${nodeId++}`;
          nodes.push({
            id: itemId,
            data: { label: item },
            position: { x: levelPositions[depth] + (itemIndex * horizontalSpacing), y: (depth + 1) * verticalSpacing },
          });
          edges.push({
            id: `edge-${currentId}-${itemId}`,
            source: currentId,
            target: itemId,
          });
        });
        levelPositions[depth] += (value.length - 1) * horizontalSpacing; // Adjust position for next depth
      }
    });

    maxDepth = Math.max(maxDepth, depth);
  };

  traverseData(data);
  return { nodes, edges };
}

export default generateNodesAndEdges;
