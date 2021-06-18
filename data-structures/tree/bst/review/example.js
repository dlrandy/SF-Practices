import BinarySearchTree from './BinarySearchTree.js';
const bstCollection = new BinarySearchTree();

bstCollection.insert(1220, {title: 'phone'});
bstCollection.insert(3455, {title: 'TV'});
bstCollection.insert(8200, {title: 'NoteBook'});
bstCollection.insert(120, {title: 'Remote control'});

const minItem = bstCollection.findMin().data;
const maxItem = bstCollection.findMax().data;

const item = bstCollection.find(3455).data;

bstCollection.remove(120);
const newMinItem = bstCollection.findMin().data;

console.log(minItem, maxItem, item, newMinItem);

