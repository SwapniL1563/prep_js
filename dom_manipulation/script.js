// DOM - Document Object Model 
// It is tree like structure that represent the HTML of webpage
// acts an interface that represent stucture of web page as tree of obj(nodes)
// Why need Dom -> it let js add/remove/access elemnt dynamically 

// select elem
// const btn = document.querySelector("button");
// const h1 = document.getElementById("hola");
// const h2 = document.getElementsByTagName("hii");

// // change content
// h1.textContent = "DOM MANIPULATION";

// // add / remove elem
// const newEl = document.createElement("p");
// newEl.innerText = "Hi"
// document.body.appendChild(newEl);

// event -> any action that happens in browser that js can respond to
// user action -> click,scroll,input
// browser action -> page load, dom content loaded,network req

// event listener -> fn that wait for an event to occur on specific elem and then run the code (cb)

// eg. btn click
// btn.addEventListener("click", function(){
//     alert("Button clicked")
// })

// simple counter app 
let count = 0
const counter = document.getElementById("countval")
const incrementCount = document.querySelector(".inc");
const decrementCount = document.querySelector(".dec");

incrementCount.addEventListener("click", function(){
    count++;
    counter.textContent = count;
})

decrementCount.addEventListener("click", function(){
    count--;
    counter.textContent = count;
})

// 