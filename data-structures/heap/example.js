import { MinHeap      } from './MinHeap';

const minHeap = new MinHeap();
minHeap.isEmpty();
minHeap.add(5);
minHeap.isEmpty();
minHeap.peek();
minHeap.toString();

minHeap.add(3);
minHeap.peek();
minHeap.toString();

minHeap.add(10);
minHeap.peek();
minHeap.toString();

minHeap.poll();
minHeap.peek();
minHeap.toString();

minHeap.remove(10);
minHeap.peek();
minHeap.toString();