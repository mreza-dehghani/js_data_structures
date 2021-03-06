const LinkedList = require('./dataStructures/LinkedList');
const DoubleLinkedList = require('./dataStructures/DoubleLinkedList');
const StackArray = require('./dataStructures/StackArray');
const StackLinkedList = require('./dataStructures/StackLinkedList');
const QueueArray = require('./dataStructures/QueueArray');
const QueueLinkedList = require('./dataStructures/QueueLinkedList');
const HashTable = require('./dataStructures/HashTable');
const Tree = require('./dataStructures/Tree');
const TreeBinary = require('./dataStructures/TreeBinary');

const linkedList = new LinkedList();
const doubleLinkedList = new DoubleLinkedList();
const stackArray = new StackArray();
const stackLinkedList = new StackLinkedList();
const queueArray = new QueueArray();
const queueLinkedList = new QueueLinkedList();
const hashTable = new HashTable(1000);
const tree = new Tree('root');
const treeBinary = new TreeBinary();

treeBinary.add(3);
treeBinary.add(2);
treeBinary.add(4);
treeBinary.add(6);
treeBinary.add(7);
treeBinary.add(86);

console.log(treeBinary);
const item = treeBinary.find(4);

console.log(item);

console.log(treeBinary.contains(5));

// const message = 'hello world';
//
// function findFirstChar1(str) {
// 	for (let i = 0; i < str.length; i++) {
// 		for (let j = i + 1; j < str.length; j++) {
// 			if (str[i] === str[j]) {
// 				return str[i];
// 			}
// 		}
// 	}
// }
//
// function findFirstChar2(str) {
// 	const table = {};
//
// 	for (let char of str) {
// 		if (table[char]) {
// 			return char;
// 		}
//
// 		table[char] = 1;
// 	}
//
// 	return table;
// }
//
