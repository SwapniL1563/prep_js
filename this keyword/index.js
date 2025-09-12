// "this" keyword - refers to  object that is currently calling the fn
// it value depend on how fn is called , not where it is declared

// this -> global scope(browser)
// this -> inside fn -> undedined

// this -> inside obj method -> refers to obj that called method
const obj = { name: "Swapnil", greet() { console.log(this.name); } };
obj.greet(); // "Swapnil"

// this -> constructorn fn / class -> refers to newly created object
function Person(name) {
  this.name = name;
}

const p1 = new Person("Swapnil");
console.log(p1.name); // Swapnil

// arrow fn - don't have this keyword
// arrow fn inside object 
const user = {
  name: "Swapnil",
  greet: () => {
    console.log(this.name);
  },
};

user.greet(); // undefined

// call , apply , bind -> maually set this val when executing a fn
function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const user1 = { name: "Swapnil" };

// call -> call fn immediately with this val(user)
greet.call(user1, "Hello", "!");  // "Hello Swapnil!"

// apply - same as call , n=but argument passed as array
greet.apply(user, ["Hi", "!!"]);  // "Hi Swapnil!!"

// bind - doesn't call immediately , return new fn with fixed this
const boundGreet = greet.bind(user, "Hey", "!!!");
boundGreet();  // "Hey Swapnil!!!"