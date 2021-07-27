import quickSort from "./quickSort.js";

const notSortedUserList = [
  { age: 18, name: "Bill" },
  { age: 20, name: "Kate" },
  { age: 20, name: "Tom" },
  { age: 24, name: "Cary" },
  { age: 37, name: "Mike" },
  { age: 42, name: "Ben" },
  { age: 50, name: "Jane" },
  { age: 60, name: "Julia" },
];

const userComparator = (user1, user2) => {
  if (user1.age === user2.age) {
    return 0;
  }
  return user1.age > user2.age ? 1 : -1;
};

const sortedUserList = quickSort(notSortedUserList, userComparator);
console.log(sortedUserList);
