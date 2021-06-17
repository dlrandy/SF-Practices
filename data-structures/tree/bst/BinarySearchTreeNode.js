
// TODO:待强化
export default class BinarySearchTreeNode {
  constructor(value = null, data = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;
    this.data = data;
  }

  find(value) {
    if (this.value === value) {
      return this;
    }

    if (value < this.value && this.left) {
      return this.left.find(value);
    }
    if (value > this.value && this.right) {
      return this.right.find(value);
    }
    return null;
  }

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
        const newTreeNode = new BinarySearchTreeNode(value, data);
        this.setLeft(newTreeNode);
        return newTreeNode;
      }
    }
    if (value > this.value) {
      if (this.right) {
        return this.right.insert(value, data);
      } else {
        const newTreeNode = new BinarySearchTreeNode(value, data);
        this.setRight(newTreeNode);
        return newTreeNode;
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

  remove(value) {
    const nodeToRemove = this.find(value);
    if (!nodeToRemove) {
      throw new Error("Item not found in the tree.");
    }
    const { parent } = nodeToRemove;
    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (parent) {
        parent.removeChild(nodeToRemove);
      } else {
        nodeToRemove.setValue(undefined);
        nodeToRemove.setData(undefined);
      }
    } else if (nodeToRemove.left && nodeToRemove.right) {
      const nextBiggerNode = nodeToRemove.right.findMin();
      if (nextBiggerNode !== nodeToRemove.right) {
        this.remove(nextBiggerNode.value);
        nodeToRemove.setValue(nextBiggerNode.value);
        nodeToRemove.setData(nextBiggerNode.data);
      } else {
        nodeToRemove.setValue(nodeToRemove.right.value);
        nodeToRemove.setData(nodeToRemove.right.Data);
        nodeToRemove.setRight(nodeToRemove.right.right);
      }
    } else {
      const childNode = nodeToRemove.left || nodeToRemove.right;
      if (parent) {
        parent.replaceChild(nodeToRemove, childNode);
      } else {
        BinarySearchTreeNode.copyNode(childNode, nodeToRemove);
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
    let traverse = [];
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }
    traverse.push(this.value);
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }
    return traverse;
  }

  removeChild(nodeToRemove) {
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

  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }
    replacementNode.parent = this;
    if (this.left && this.left === nodeToReplace) {
      this.left = replacementNode;
      return true;
    }
    if (this.right && this.right === nodeToReplace) {
      this.right = replacementNode;
      return true;
    }

    return false;
  }

  static copyNode(sourceNode, targetNode) {
    targetNode.setValue(sourceNode.value);
    targetNode.setData(sourceNode.data);
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
