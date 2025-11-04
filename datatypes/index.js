// Datatypes define what kind of value a variable can hold.
// since js is dynamically typed language, we don'y define the type explicit
// it is determined during runtime

let x = "Hii"  // string
x = 20;        // type change to number at runtime

// 2 main categories:

// Primitive datatypes:

// These are basic, immutables(can't be changed) datatypes
// when u assign them to var, a copy of val is made meaning they are copied by value
// they are stored in stack memory, hence change in copy doesn't affect original

// List of primitive datatypes:
// String -> "Hello"
// Boolean -> true/false
// Number -> 42, 3.14, Nan, Infinity
// BigInt -> 9000000000000000003333h33b(very lar num)
// Undefined -> declared but not assigned
// Null -> empty val
// Symbol -> unique Identifier

// eg.
let a = 20;
let b = a;  // copy by value

b = 10;
console.log(b); // 10
console.log(a); // 20


// Non-primitive Datatypes:

// They are objects, stored in heap memory
// when u assign them to var, a copy by reference (memory address) is done, not actual value
// they are mutable (properties can be change) and hence changing copy can affect the original

// List:
// Objects -> { name: "Alice" }
// Array -> [1,2,3]
// Function -> function() {}
// Date,Map,Set,etc

// eg. 
let obj1 = { name:"Alice"}
let obj2 = obj1;  // copy by ref
obj2.name = "Swap";

console.log(obj1)

// as both point to same memory address


// Strict Equality(===) vs Loose Equality(==)

// Loose Equality ( == )
// compares values only not type
// if type differs, perform type coercion -> convert it to same type before conversion

// eg.
console.log(5 == "5")
// because "5" get converted to number 5

console.log(0 == false) // bcoz false get converted to 0


// Strict Equality(===)
// compares both values and type
// no type coercion

// eg.
console.log(5 === "5") 
// because number vs string

// some tricky que"

console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false
// NaN is never equal to anything, not even itself
// console.log(isNaN(NaN)) 


console.log([] == []);    // false -> as diff obj points to diff refernces(memory address)
console.log([] === []);   // true -> because 

console.log({} == {});    // false
console.log({} === {});   // false

console.log([] == "");   // true
console.log([] == 0);    // true


// truthy and falsy value

// in js there are only 8 falsy value that become false when converted to Boolean
// false, 0 , Nan , -0 , 0n, "" , null, undefined
// everything else is truthy

console.log("" == false);  // true
if ([]) console.log("runs");  // runs
if ([]) console.log("runs");  // runs
if (null) console.log("runs");  // does not run

// In JavaScript, the + operator behaves differently depending on types: if one operand is a string, it concatenates (e.g., "5" + 5 = "55"). But operators like -, *, / always coerce to numbers (e.g., "5" - 5 = 0).

console.log("5" + 5); // "55" -> perform string concatenatiom
console.log("5" - 5); // 0  -> does numeric subtraction ( type coercion)
console.log("10" * "2"); // 20 -> both converted to number
console.log("5" + true); // "5true"
console.log("5" - true); // 4


