export function bwPowerSet(set) {
  const subSets = [];
  const numberOfCombinations = 2 ** set.length;
  for (let i = 0; i < numberOfCombinations; i++) {
    const subset = [];
    for (let j = 0; j < set.length; j++) {
      if (i & (1 << j)) {
        subset.push(set[j]);
      }
    }
    subSets.push(subset);
  }

  return subSets;
}

/**
 * 
 * @param {*} originalSet 
 * @param {*} currentSet 
 * @param {*} res 
 * @param {*} startIndex 
 * 回溯法试着去生成所有的可能方案，但是每次新生成的方案，要检查它是否满足所有的条件
 * 只有在满足条件的条件下才会继续生成后续的方案。否则回退，继续不同的查找方案路径。
 *  大致的思想就是先包含一个元素，然后在查找后面元素的幂集
 * 
 */
export const btPowerSetBT = (originalSet, currentSet, res=[[]], startIndex) => {
  
  // 从当前位置迭代所有会加入到当前子集的元素
  for (let i = startIndex; i < originalSet.length; i++) {
    //  取出某个元素加入到当前子集中
    currentSet.push(originalSet[i]);
    // 当前子集加入到结果中
    res.push([...currentSet]);
    // 当前子集下 寻找剩下的其他子集
    btPowerSetBT(originalSet, currentSet, res, startIndex + 1);
    // 恢复之前子集
    currentSet.pop();
    
  }
  
}

/*
---------------------------------------
0                       1                      2
|
|
【a】-------------------
                        |
                        |
                        【a,b】----------------
                        |                      |
                        |                     |
                        |                      【a, b, c】
                        [a, c]                  <----
[b]                     [b, c]

[c]
---------------------------------------

*/