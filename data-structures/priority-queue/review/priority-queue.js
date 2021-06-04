import { MinHeap } from "../../heap/MinHeap";
import Comparator from "../../utils/comparator/Comparator";

export class PriorityQueue extends MinHeap {
  constructor() {
    super();
    this.priotities = new Map();
    this.compare = new Comparator(this.comparePriority.bind(this));
    
  }

  comparePriority(a, b) {
    if(this.priotities.get(a) === this.priotities.get(b)){
      return 0;
    }
    return this.priotities.get(a) > this.priotities.get(b) ? 1 : -1;
  }

  add(item, priority = 0) {
    this.priotities.set(item, priority);
    super.add(item);
    return this;
  }

  remove(item, customFindingComparator) {
    this.priotities.delete(item);
    // 这里不该再使用this了
    super.remove(item, customFindingComparator);
    return this;
  }

  changePriority(item, priority) {
    // 在改变优先级的时候，先使用移除值，但是是根据值的比较来进行的
    // 所以使用新的值comparator
     this.remove(item, new Comparator(this.compareValue));
     super.add(item, priority);
     return this;
  }

  findByValue(item) {
    //find函数的比较方法是一个比较值的comparator类
    return super.find(item, new Comparator(this.compareValue));
  }

  hasValue(item) {
    return this.findByValue(item).length > 0;
  }

  compareValue(a, b) {
    if (a === b) {
      return 0;
    }
    return a - b > 0 ? 1 : -1;
  }
}
