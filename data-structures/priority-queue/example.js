import { PriorityQueue } from './priority-queue';

const priorityQueue = new PriorityQueue();

const notSortedCities = [
    {name: 'New York', population: 8.6},
    {name: 'Chicago', population: 2.7},
    {name: 'SanFrancisco', population: 0.84},
    {name: 'Houston', population: 2},
];

notSortedCities.forEach(city => priorityQueue.add(city, city.population));
const sortedCities = [];
while (priorityQueue.peek()) {
    sortedCities.push(priorityQueue.poll());

}
console.log(sortedCities);

