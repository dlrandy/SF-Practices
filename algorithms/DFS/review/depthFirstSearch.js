export function treeDepthFirstSearch(node, visitNodeCallback) {
 visitNodeCallback(node);
 if(!node)return;
 treeDepthFirstSearch(node.left,visitNodeCallback);
 treeDepthFirstSearch(node.right,visitNodeCallback);
};

