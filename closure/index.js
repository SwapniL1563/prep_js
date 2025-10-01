// Closure - a closure is created when a function "remembers" variables from its outer scope even after that outer function has finished execution.

// simply , Closure = fn + its lexical env

// eg. 

 function outer(){
 let count = 0; // outer scope variable

 return function inner() {
   count++;
   return count;
 }
}

const counter = outer();
console.log(counter());
console.log(counter());

// What's happening ?

// we create outer fn , inside  we have declared var  count = 0
// count lives only inside outer's scope - normally it would be destroyed once outer finishes execution

// we have returned inner fn inside outer
// inner fn uses count from outer forming a closure

// when we call outer -> it run once and new var count = 0 is created
// then it return inner fn
// counter stores the inner fn, along with memory of count

// when called first count++ -> 1
// when called second count++ -> 2 since count wasn't reset - still in memory 

// That' y even  when  outer fn executed , it var count is still alive in memory because inner fn is referencing to it

// Normally, when a function finishes executing:
// Its local variables are destroyed (garbage collected).
// but with closure , inner fn still references count , hence  js cannot garbage collected count

// Use of Closure:
// Data Privacy (Encapsulation):
//  - Js doesn't have private var like java
//  - use closure to simulate private data
//  - function creatUser(name) {
//  let passsword = "12345";
//  return {
//     getName:() => name,
//     getPass:(p) => p === password
//    }
// }

// const user = createUser("Swap");
// console.log(user.getName());
// console.log(user.password);

// This pattern uses closures for data encapsulation. The variable password is private to createUser, but the returned methods can still access it. That’s why getName() works, but user.password is undefined. This is how we simulate private members in JavaScript.


// what is lexical env?
// - an env in which a fn is declared. It contains
//   1) local memory - var inside the fn
//   2) a reference to its outer lexical env - parent scope

// function outer() {
//   let a = 10;
//   function inner() {
//     let b = 20;
//     console.log(a + b);
//   }
//   inner();
// }
// outer();

// When inner is declared, it gets a lexical environment:
// Local memory → { b: 20 }
// Outer reference → outer’s environment { a: 10 }
// So when inner executes, it looks for a inside itself → not found → checks parent (outer)

// How closure use lexical env?
// Closures work because functions remember their lexical environment.
// Even if the parent function is finished, the child function keeps a reference to its parent scope.