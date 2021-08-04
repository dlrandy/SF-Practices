import Queue from '../../../data-structures/queue/Queue.js'
export default (graph, startVertex, enterVertexCallback) => {
    const visitedVertices = {};

    const queue = new Queue();
    queue.enQueue(startVertex);
    while (!queue.isEmpty()) {
        const currentVertex = queue.deQueue();
        const vertexKey = currentVertex.getKey();
        if (!visitedVertices[vertexKey]) {
            visitedVertices[vertexKey] = true;
            enterVertexCallback(currentVertex);
            currentVertex.getNeighbors().forEach(nextVertex => {
                queue.enQueue(nextVertex);
            });
        }

        
    }

}
