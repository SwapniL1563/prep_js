// my own custom map fn

Array.prototype.myMap = function(cb) {
    const result = [];
    for(let i = 0;i < this.length;i++){
        result.push(cb(this[i],i,this));
    }

    return result;
}

const arr = [1,2,3]
const double =  arr.myMap(num => num * 2);
console.log(double);

// map - transforms each elem of an array and return a new array of same len
// doesn't change og array

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);
console.log(doubled); 

// filter - filter out elem from array based on condition 
// return new array 
// only val that return true are added in new array

const number = [1, 2, 3, 4, 5, 6];

const evens = number.filter(num => num % 2 === 0);
console.log(evens); 

// reduce - reduces  an array into single value
// takes 2 params in cb: accumulator(prev value) and current value
// used in sum,multiplication ,etc

const numbersArr = [1,5,6,2];

const sum = numbersArr.reduce((acc,num) => acc + num, 0);
console.log(sum);

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// count occurence using reduce
const count = fruits.reduce((acc,fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(count);