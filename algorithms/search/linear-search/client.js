import linearSearch from "./linear.js";
const tim = { name: "Tim", phone: "+111111111112" };
const jane = { name: "Jane", phone: "+111111111111" };
const bill = { name: "Bill", phone: "+111111111113" };
const janeNamesake = { name: "Jane", phone: "+111111111114" };
const peter = { name: "Peter", phone: "+111111111115" };

const phoneBook = [tim, jane, bill, janeNamesake];

const personComparator = (person1, person2) => {
    return person1.name === person2.name ? 0 : -1;
}

console.log(linearSearch(phoneBook, jane, personComparator));
console.log(linearSearch(phoneBook, peter, personComparator));