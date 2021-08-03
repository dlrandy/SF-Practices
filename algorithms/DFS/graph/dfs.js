export default (graph, startVertex, enterVertexCallback) => {
    const visitedVertices = {};
    visitedVertices[startVertex.getKey()] = true;

    const depthFirstSearchRecursive = currentVertex => {
        enterVertexCallback(currentVertex);
        currentVertex.getNeighbors().forEach(nextVertex => {
            if (!visitedVertices[nextVertex.getKey()]) {
                visitedVertices[nextVertex.getKey()] = true;
                depthFirstSearchRecursive(nextVertex);
            }
        })
    }

    depthFirstSearchRecursive(startVertex);
}
