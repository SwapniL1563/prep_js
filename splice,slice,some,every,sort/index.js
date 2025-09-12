const arr = [10, 20, 30, 40, 50];

// slice - extract a part of array without changing og array 
// return new array 
// extract from start index , excluding end
// use - shallow copy of an array

console.log(arr.slice(0,2)) // index 2 will not be included

// splice - used to add / remove / replace elem in og array
// return an array of removed elem

const arr1 = [10, 20, 30, 40, 50];

console.log(arr1.splice(0,3)); // [10,20,30]

const arr2 = [10, 20, 30, 40, 50];
console.log(arr2.splice(1,0,60,70)); 
console.log(arr2);

// sort - sort elem of array
const num = [40, 100, 1, 5, 25, 10];
console.log(num.sort((a,b) => a - b)); // acending
console.log(arr.sort((a, b) => b - a)); // descending

// every - return true if all element pass the condition otherwise false
const numbers = [2, 4, 6, 8];
console.log(numbers.every(num => num % 2 === 0)); // true

// some - return true if any elem pass cond
const numbers1 = [1, 3, 5, 7];
console.log(numbers1.some(num => num % 2 === 0));

// find - return the first elem that matches condition else undefined
const numbers2 = [5, 12, 8, 130, 44];
console.log(numbers2.find(num => num > 10))

// findIndex - same but return indx if not found -1
console.log(numbers2.findIndex(num => num > 10))

// includes - return true if an array includes a value else false
const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana"));

// flat - flattens a nested array into a single level arr
// specify depth ,  use infinity to completey flat
const arr3 = [1,[2,3,[4]]];

console.log(arr3.flat(1));
console.log(arr3.flat(Infinity));

// flatMap - combines map() + flat(1);

const arr4 = [1, 2, 3];

const result = arr4.flatMap(x => [x, x * 2]);
console.log(result);
