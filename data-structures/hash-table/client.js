import HashTable from './HashTable.js';
const phoneBook = new HashTable();
console.log(phoneBook.set('John Smith', '+112342345678')); 
console.log(phoneBook.set('Bill Jones', '+111111111111'));

console.log(phoneBook.get('John Smith')); 
console.log(phoneBook.get('Bill Jones'));
console.log(phoneBook.delete('John Smith'));
console.log(phoneBook.get('John Smith'));






