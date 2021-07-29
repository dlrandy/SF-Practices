import { treeBreadthFirstSearch } from './treeBFS.js';

class BinaryTreeNode {
    constructor(value = null) {
        this.left = null;
        this.right = null;
        this.value = value;
    }

    setLeft(node) {
        this.left =node;
        return this;
    }
    setRight(node) {
        this.right =node;
        return this;
    }
}


const nodeA = new BinaryTreeNode('A');
const nodeB = new BinaryTreeNode('B');
const nodeC = new BinaryTreeNode('C');
const nodeD = new BinaryTreeNode('D');
const nodeE = new BinaryTreeNode('E');
nodeA.setLeft(nodeB).setRight(nodeC);

nodeB.setLeft(nodeD).setRight(nodeE);
const trverseNodes = [];

const visitNodeCallback = visitNode => trverseNodes.push(visitNode);

treeBreadthFirstSearch(nodeA, visitNodeCallback);

console.log(trverseNodes);