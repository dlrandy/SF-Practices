export default (setA, setB) => {
    if (!setA || !setB || !setA.length || !setB.length) {
        return null;
    }

    const product = [];
    for (let i = 0; i < setA.length; i++) {
        for (let j = 0; j < setB.length; j++) {
            product.push([setA[i], setB[j]]);
            
        }
    }
    return product;
}
