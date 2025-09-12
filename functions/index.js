// function declaration - hoisted,have this
function greet() {
    console.log("Hii")
}
greet();


// function expression - not hoisted 
const greet1 = function () {
    console.log("Hii")
}
greet1();


// arrow function - shorter syntax , doesn't have this keyword
const greet2 = () => {
    console.log("Hello");
}
greet2();


// IIFE - Immediately invoke fun exp  - that run as soon as it is defined
(function(){
    console.log("IIFE")
})();

// use case - to create private scope and avoid global variable pollution
const counter = (function(){
    let count = 0;
    return {
        inc:() => ++count,
        dec:() => --count,
        get:() => count
    }
})();

console.log(counter.inc()); // 1
console.log(counter.inc()); // 2
console.log(counter.get()); // 2

// Higher Order Func - fn that takes another fn as arguement or return a fn

// map,filter,reduce
const nums = [1,2,3,4,5];

const double = nums.map(num => num * 2);
console.log(double);

// return a fn
function multiplier(x) {
    return function(y) {
        return x * y;
    }
}

const doubled = multiplier(2);
console.log(doubled(5)) // 10

// custom HOF fn
function greetUser(fn,name){
    return fn(name);
}

function sayHi(name){
    return "Hi" + name;
}


console.log(greetUser(sayHi," Swap"))