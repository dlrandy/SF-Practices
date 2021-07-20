export default (setA, setB) => {
    if(!setA || !setB || setA.length == 0 || setB.length == 0){
        return [];
    }
    const res = [];
    for (let i = 0; i < setA.length; i++) {
        for (let j = 0; j < setB.length; j++) {
            res.push([setA[i], setB[j]]);
        }
    }

    return res;

}
