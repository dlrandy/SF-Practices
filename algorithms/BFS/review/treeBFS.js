export const treeBreadthFirstSearch = (node, visitNodeCallback) => {
    const queue = [node];
    while (queue.length) {
        const cur = queue.shift();
        visitNodeCallback(cur);
        if (cur.left) {
            queue.push(cur.left);
        }
        if (cur.right) {
            queue.push(cur.right);
        }
    }
}
