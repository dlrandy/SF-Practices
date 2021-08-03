export default (graph, startVertex, enterVertexCallback) => {
  const visitedVertices = {};
  visitedVertices[startVertex.getKey()] = true;
  const graphDepthFirstSearchRecursive = (currentVertex) => {
      enterVertexCallback(currentVertex);
      currentVertex.getNeighbors().forEach(nextVertex => {
          const vertexKey = nextVertex.getKey();
          if (!visitedVertices[vertexKey]) {
            visitedVertices[vertexKey] = true;
            graphDepthFirstSearchRecursive(nextVertex);
          }
      });
  }

  graphDepthFirstSearchRecursive(startVertex);
  
};
