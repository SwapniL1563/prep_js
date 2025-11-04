// curryinng - fundamental programming technique in which u transform a fn that takes multiple arg into seq of fn that each takes one arg

// normal fn
function add(a,b,c) {
    return a + b + c;
}
 
// to fn with currying
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

// use - 
// code reusability 
// functional programming
// cleaner code
// use in react/frontend (event handlers,hof,hooks)

// currying works because of closures. Each return fn remembers the arg passed to its outer fn

//------------------------------------------------

// resusability use eg
// discount calculator 

// normal fn(without currying)
function discount(rate, price) {
  return price - price * rate;
}

console.log(discount(0.1, 100)); // 90
console.log(discount(0.1, 250)); // 225

// here , we need to pass same rate every time. repetition of code

// fn ( with currying )
function discount(rate) {
    return function (price) {
        return price - price * rate;
    }
}

const tenPerOff = discount(0.1);
console.log(tenPerOff(100));
console.log(tenPerOff(250))

// we create a custom fn tenPerOff that uses same rate

function discount (rate,price) {
    return price - price * discount;
}

console.log(discount(0.1,100)); //100
console.log(discount(0.1,200)); //100

function discount(rate) {
    return function(price) {
         return price - price * rate;
    }
}

const tenPerOff = discount(0.1);
console.log(tenPerOff(100));
console.log(tenPerOff(200));