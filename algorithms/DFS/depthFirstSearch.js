export function treeDepthFirstSearch(node, visitNodeCallback) {
    visitNodeCallback(node);
    if (node.left) {
        treeDepthFirstSearch(node.left, visitNodeCallback);
    }
    if (node.right) {
        treeDepthFirstSearch(node.right, visitNodeCallback);
    }
};

