import Graph from "./Graph.js";
import GraphVertex from "./GraphVertex.js";
import GraphEdge from "./GraphEdge.js";

const network = new Graph();
const bill = new GraphVertex("Bill");
const mary = new GraphVertex("Mary");
const john = new GraphVertex("John");
const jane = new GraphVertex("Jane");

network.addVertex(bill).addVertex(mary).addVertex(john).addVertex(jane);

network.getVertexByKey("Bill");
network.getVertexByKey("Mary");

network
  .addEdge(new GraphEdge(bill, mary))
  .addEdge(new GraphEdge(john, jane))
  .addEdge(new GraphEdge(jane, mary));
network.findEdge(bill, mary);
network.findEdge(john, jane);
network.findEdge(bill, john);

mary.getNeighbors().length;
mary.getNeighbors();
console.log(network.toString());
