function greet(name,cb) {
    console.log("Hello " + name);
    cb()
}

function sayBye() {
    console.log("Goodbye!")
}

greet("Swapnil", sayBye);

// promise 

const myPromise = new Promise((resolve,reject) => {
    let success = true;

    if(success) {
        resolve("Data fetched successfully")
    } else {
        reject("Data fetching error")
    }
})

myPromise.then((res) => console.log(res))
         .catch((error) => console/log(error))
         .finally((res) => console.log("Operation done"))

// promise.all -> take multiple promises as array and return array of result if succeed and fails if onne fail 

// const p1 = Promise.reject("Data from API 2");
// const p2 = Promise.resolve("Data from API 1");

// Promise.all([p1,p2]).then((res) => console.log(res))
//                     .catch((err) => console.log("Err:",err));


function outer() {
    let count = 0; // outer scope

    return function inner(){
        count++;
        return count;
    }
}

const counter = outer();
console.log(counter());
console.log(counter());

// currying - u transform a fn taking multiple arg int seq of fn that each take one arg

function add (a,b,c){
    return a+b+c
}

function add(a) {
    return function(b){
        return a+ b;
    }
}


function discount(rate,price){
    return price - price * rate;
}

console.log(discount(0.1,100))
console.log(discount(0.1,200))

function discount(rate) {
    return function(discount) {
         return price - price * rate;
    }
}

const tenPerOff = discount(10)
console.log(discount(0.1,100))
console.log(discount(0.1,200))

function debounce(fn,delay) {
    let timer;
    return function(...arg) {
        clearTimeout();
        timer = setTimeout(() => fn.apply(this,arg),delay);
    }


}


// const search = document.getElementById("search");

// search.addEventListener("input", debounce((e)=> {
//     fetchData(e.target.value)
// },1000))

const arr = [1,2,3,4];

const mapNum = arr.map(num => num * 2);
console.log(mapNum);

const filterNum = arr.filter(num => num % 2 === 0)
console.log(filterNum);

const reducerNum = arr.reduce((acc,curr) => {
    return acc + curr
},0)
console.log(reducerNum)

const obj1 = { a: 1, b : { c: 2}}
const shallowCopy = { ...obj1 }

shallowCopy.b.c = 3;
console.log(obj1.b.c)

const arr1 = [1,2]
const arr2 = [3,4]

const mergeArr = [...arr1,...arr2]
console.log(mergeArr)

// rest operator - 

const [first,second,...rest] = [1,2,3,4,5,6]
console.log(...rest)

const array = [100,200,300]

console.log(array.slice(0,2));
console.log(array.splice(0,1))

function greet() {
    console.log("Hello " + this.name);
}

const user = { name: "Swapnil" }

greet.call(user);
greet.apply(user)
const boundgret = greet.bind(user);

boundgret()

