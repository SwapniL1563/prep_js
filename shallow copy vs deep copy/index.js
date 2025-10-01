// shallow copy - creates an new obj/array, primitives like string, number, boolean are copied safely but only copies reference of nested obj / array
// changes in nested obj of the copy will reflect in og

// 3 ways to create obj:

// 1) Object.assign({} , obj) 
const obj = { a:1, b: { c: 2}};

const shallowCopy = Object.assign({} , obj);

shallowCopy.a = 10;
shallowCopy.b.c = 11;

console.log(obj.a); // primitive cloned
console.log(obj.b); // reference shared

// copies top-level properties
// nested obj are referenced, not cloned

// 2) spread operator:
const obj1 = { a: 1, b: { c: 2 } };
const copy = { ...obj1 };

copy.b.c = 30;
console.log(obj1.b.c); // 30 

// 3) Array methods(slice,concat)

const arr = [1,2,[3,4]];
const shallowCopy1 = arr.slice();

shallowCopy1[1] = 100;
shallowCopy1[2][0] = 101;

console.log(arr[0]);   // 2 
console.log(arr[2][0]);  // 101

// When to use shallow copy:
//  - ur object/array is flat with no nesting
//  - u don't care if nested obj are sahred
//  - performance matters as shallow copy is faster

// eg. copying ui state in react like { theme:"dark", fontSize:14 }


// -------------------------------------------------------

// Deep copy - creates a completely independent clone of the obj, including all nestig obj
// changes in copy doesn'y affcet the original

//  Ways to create Deep Copy:

//  1) structuredClone(obj): -> doesn't support fn
const obj2 = { a: 1, b: { c: 2}};

const deepCopy = structuredClone(obj2);

deepCopy.b.c = 3;
console.log(obj2.b.c); // 2 -> original does't affect

//  2) JSON.parse(JSON.stringify(obj)) -> partial deep copy losses fn,date
  const obj3 = { a: 1,b: {c : 3}, d: new Date(), fn: () => {}}
  const deepCopy1 = JSON.parse(JSON.stringify(obj3));

  console.log(deepCopy1); // { a: 1, b : { c: 2} } -> copied  successfully but fn and date lose


//  3) Libraries - Loadash _.cloneDeep -> handles all edge case
const _ = require("loadash");

const obj5 = { a: 1, b: { c: 2 }, d: new Date() };
const deep = _.cloneDeep(obj5);

deep.b.c = 50;
console.log(obj5.b.c); // 2 ✅ unaffected

//  When to use deep copy?

// - working with nested arr/obj ( eg. large JSON data from API )
// - performance is not critical
// - immutabilty operation in state management


