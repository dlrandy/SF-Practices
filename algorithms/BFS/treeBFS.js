export const treeBreadthFirstSearch = (node, visitNodeCallback) => {
    const queue = [node];
    while (queue.length) {
        const cur = queue.shift();
        visitNodeCallback(cur);
        cur?.left && queue.push(cur.left);
        cur?.right && queue.push(cur.right);
    }

}
