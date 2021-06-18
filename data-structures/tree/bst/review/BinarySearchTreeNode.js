// TODO:待强化
export default class BinarySearchTreeNode {
  constructor(value = null, data = null) {
    this.value = value;
    this.data = data;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  find(value) {
    if (this.value === value) {
      return this;
    }

    if (value > this.value && this.right) {
      return this.right.find(value);
    }

    if (value < this.value && this.left) {
      return this.left.find(value);
    }

    return null;
  }

  /**
   *
   * @param {string} value
   * @param {object} data
   * @returns BSTNode
   *
   * 插入节点的时候，先要看看当前节点是不是空节点；
   * 尽量不要用ifelse最好是一个if一个结束
   *
   */
  insert(value, data) {
    if (this.value === null) {
      this.value = value;
      this.data = data;
      return this;
    }

    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value, data);
      } else {
        const newBSTreeNode = new BinarySearchTreeNode(value, data);
        this.setLeft(newBSTreeNode);
        return newBSTreeNode;
      }
    }

    if (value > this.value) {
      if (this.right) {
        this.right.insert(value, data);
      } else {
        const newBSTreeNode = new BinarySearchTreeNode(value, data);
        this.setRight(newBSTreeNode);
        return newBSTreeNode;
      }
    }
    return this;
  }

  setLeft(node) {
    if (this.left) {
      this.left.parent = null;
    }
    this.left = node;
    if (this.left) {
      this.left.parent = this;
    }
    return this;
  }
  setRight(node) {
    if (this.right) {
      this.right.parent = null;
    }
    this.right = node;
    if (this.right) {
      this.right.parent = this;
    }
    return this;
  }

  /**
   * 
   * @param {*} value 
   * @returns 
   * 
   * 需要重點實現方法
   */
  remove(value) {
    // TODO ：再做一遍
    const nodeToRemove = this.find(value);

    if (!nodeToRemove) {
      throw new Error("没有找到要移除的节点。");
    }
    const { parent } = nodeToRemove;
    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (parent) {
        parent.removeChild(nodeToRemove);
      } else {
        nodeToRemove.setValue(undefined);
      }
    } else if (nodeToRemove.left && nodeToRemove.right) {
      let nextBiggerTreeNode = nodeToRemove.right.findMin();
      if (nextBiggerTreeNode !== nodeToRemove.right) {
        this.remove(nextBiggerTreeNode.value);
        nodeToRemove.setData(nextBiggerTreeNode.data);
        nodeToRemove.setValue(nextBiggerTreeNode.value);
      } else {
        nodeToRemove.setData(nextBiggerTreeNode.data);
        nodeToRemove.setValue(nextBiggerTreeNode.value);
        nodeToRemove.setRight(nextBiggerTreeNode.right);
      }
    } else {
      const nextChild = nodeToRemove.left || nodeToRemove.right;
      if (parent) {
        parent.replaceChild(nodeToRemove, nextChild);
      } else {
        BinarySearchTreeNode.copyNode(nextChild, nodeToRemove);
      }
    }

    nodeToRemove.parent = null;
    return true;
  }

  setData(data) {
    this.data = data;
    return this;
  }
  setValue(value) {
    this.value = value;
    return this;
  }
  contains(value) {
    return !!this.find(value);
  }

  traverseInOrder() {
    let ans = [];
    if (this.left) {
      ans = ans.concat(this.left.traverseInOrder());
    }
    ans.push(this.value);
    if (this.right) {
      ans = ans.concat(this.right.traverseInOrder());
    }
    return ans;
  }

  /**
   * 
   * @param {*} nodeToRemove 
   * @returns 
   * 好像对移除子节点有些误解
   */
  removeChild(nodeToRemove) {
    // TODO: 需要再写一次加深理解
    if (this.left && this.left === nodeToRemove) {
      this.left = null;
      return true;
    }
    if (this.right && this.right === nodeToRemove) {
      this.right = null;
      return true;
    }

    return false;
  }

  /**
   * 
   * @param {*} nodeToReplace 
   * @param {*} replacementNode 
   * @returns 
   * 需要重点关注的
   * 对于条件能放在一行的就放在一起
   */
  
  replaceChild(nodeToReplace, replacementNode) {
   // TODO: 需要再写一次，加深理解
    if (!nodeToReplace || !repalcementNode) {
      return false;
    }
    replacementNode.parent = this;
    nodeToReplace.parent = null;
    if (this.left && this.left === nodeToReplace) {
      this.left = repalcementNode;
      return true;
    }
    if (this.right && this.right === nodeToReplace) {
      this.left = replacementNode;
      return true;
    }

    return false;
  }

  static copyNode(sourceNode, targetNode) {
    targetNode.setData(sourceNode.data);
    targetNode.setValue(sourceNode.value);
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  }

  findMin() {
    if (this.left) {
      return this.left.findMin();
    }
    return this;
  }

  findMax() {
    if (this.right) {
      return this.right.findMax();
    }
    return this;
  }

  toString() {
    return this.traverseInOrder().toString();
  }
}
