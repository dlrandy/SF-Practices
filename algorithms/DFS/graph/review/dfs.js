/*

对于dfs 图，内置一个递归函数，然后在递归之前
将当前节点标记访问，以后每次递归前都要这么做



*/
export default (graph, startVertex, enterVertexCallback) => {
  const visitedVertices = {};
  visitedVertices[startVertex.getKey()] = true;
  const graphDepthFirstSearchRecursive = (currentVertex) => {
      // 递归当前节点的时候，先调用回调
      enterVertexCallback(currentVertex);
      // 在递归访问节点的邻居
      currentVertex.getNeighbors().forEach(nextVertex => {
          
        const vertexKey = nextVertex.getKey();
          // 只有在邻居节点没有被访问的时候 递归邻居节点，同时标记邻居节点
          if (!visitedVertices[vertexKey]) {
            visitedVertices[vertexKey] = true;
            graphDepthFirstSearchRecursive(nextVertex);
          }
      });
  }

  graphDepthFirstSearchRecursive(startVertex);
  
};
