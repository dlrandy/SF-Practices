import Graph from "../../../../data-structures/graph/Graph.js";
import GraphVertex from "../../../../data-structures/graph/GraphVertex.js";
import GraphEdge from "../../../../data-structures/graph/GraphEdge.js";
import breadthFirstSearch  from "./bfs.js";

const socialNetwork = new Graph();
const bill = new GraphVertex("Bill");
const alice = new GraphVertex("Alice");
const john = new GraphVertex("John");
const kate = new GraphVertex("Kate");
const ann = new GraphVertex("Ann");
const tom = new GraphVertex("Tom");
const sam = new GraphVertex("Sam");

socialNetwork
  .addEdge(new GraphEdge(bill, alice))
  .addEdge(new GraphEdge(bill, john))
  .addEdge(new GraphEdge(bill, kate))
  .addEdge(new GraphEdge(alice, ann))
  .addEdge(new GraphEdge(ann, sam))
  .addEdge(new GraphEdge(john, ann))
  .addEdge(new GraphEdge(kate, tom));

const userVisits = [];
breadthFirstSearch(socialNetwork, bill, (user) => {
  userVisits.push(user);
});

console.log(userVisits);
