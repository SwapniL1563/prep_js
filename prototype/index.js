// js doesn't have classes like c++/java it has prototypes
// every obj in js has hidden link _proto_ that points to another object(its prototype)
// if JS doesn't find prop in obj it looks up the chain until Object.prototype

//  eg.
function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function(){
    console.log("Hi" + this.name);
}

const p1 = new Person(" Swapnil");
p1.sayHi();

// now p1 doesn't have sayHi
// so it will look up chain , but p1._proto -> Person.prototype
// so p1 will now have sayHi method

// ES6 classes - just syntactic sugar 

// _proto_ - every obj in js has this
// points to prototype of obj constructor fn

const obj = {}
console.log(obj._proto_);

// prototype - only fn / constructor has it ( new keyword )
// used to define properties / method for obj with new keyword

