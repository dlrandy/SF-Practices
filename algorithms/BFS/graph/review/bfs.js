import Queue from "../../../../data-structures/queue/Queue.js";

/*

bfs 图的时候，第一个节点直接进队

循环判断队列空与否，出队元素，出队元素只在没有
被访问过的情况下，执行回调，标记访问以及入队它的
邻居，而对于要入队的邻居，可以先不用验证访问情况的，
当然也可以直接不让去进队 减少内存的使用


*/
export default (graph, startVertex, enterVertexCallback) => {
  const queue = new Queue();
  const visitedVertices = {};
  queue.enQueue(startVertex);
  while (!queue.isEmpty()) {
    const currentVertex = queue.deQueue();
    const currentKey = currentVertex.getKey();
    if (!visitedVertices[currentKey]) {
      enterVertexCallback(currentVertex);
      visitedVertices[currentKey] = true;
      const neighbors = currentVertex.getNeighbors() || [];
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        if (!visitedVertices[neighbor.getKey()]) {
          queue.enQueue(neighbor);
        }
      }
    }
  }
};
