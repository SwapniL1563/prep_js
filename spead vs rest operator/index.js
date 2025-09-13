// spread operator - expands an array, object into individual elements
// use in array literals,object literals,fn arg
// eg. merge array
const arr1 = [1,2,3]
const arr2 = [4,5]

const mergeArr = [...arr1,...arr2];
console.log(mergeArr);

// fn argument
function sum(a,b,c){
    return a + b + c;
};

const num = [1,2,3]

console.log(sum(...num));


// rest operator - collects multiple elem into single array or object
// use in fn params or destructuring
// eg. fn params
function sumAll(...num){
    return num.reduce((a,b) => a + b,0);
}

console.log(sumAll(1,2,3));

// array destructuring
const [first,second,...rest] = [1,2,3,4,5];
console.log(...rest)


// conclusion
// spread - take this bunch and expand
// rest - give me remaining stuffs