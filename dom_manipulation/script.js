// DOM - Document Object Model 
// It is tree like structure that represent the HTML of webpage
// acts an interface that represent stucture of web page as tree of obj(nodes)
// Why need Dom -> it let js add/remove/access element dynamically 

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

// textContent vs innerText vs innerHTML 

{/* <div id="box">
  Hello <span style="display: none;">Hidden</span> World
</div> */}

// textContent - return / sets raw text inside an elem 
// includes hidden elem too as it ignores css styling
// faster than innerText coz goesnt trigger reflow/repaint

console.log(document.getElementById("box").textContent); // Hello hidden World

// innerText - return / sets text that is visible 
// ignores hidden elem as consider css
// slower than texContent coz triggers reflow/repaint

console.log(document.getElementById("box").innerText); // Hello World

// innerHTML - return / sets HTML markup inside an elem as string
// used to insert HTML dynamically
// not safer - XSS attack prone

console.log(document.getElementById("box").innerHTML) // Hello World

// Note  - reflow - aka as layout happens when structure or geometry of page changes , browser recal postion, size , dimension of elem , hwnce expensive operation ( eg. add elem, change elem size, font size inc)
// repaint - is cheaper happens when visual styles changes but layout remains same , brwoser just repaints pixels ( eg . changing color, change bg-color )
// reflow cause repaint most of them time but not vice versa


// Event Bubbling vs Event Capturing

// when u click an elem, event goes in 3 phase:

// 1 ) Capturing phase - event travel from window -> doc -> parent -> child 
// 2 ) Target phase - event reaches the actual target
// 3 ) Bubbling phase - event goes back from target -> window

// Event bubbling -> Event starts at target elem and bubbles upward till its ancestor
// default behaivour when u use eventListener

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

// Output -
// Child clicked
// Parent clicked

// Event bubbles from child -> parent 

// use - Event Bubbling 

// Example: Close a modal when clicking anywhere outside.

document.body.addEventListener("click", (e) => {
  if (e.target.id === "overlay") closeModal();
});

// stop bubbling 
child.addEventListener("click", (e) => {
  e.stopPropagation(); // stops event from going to parent
  console.log("Child clicked");
});


// use - Event delegation - technique in which instead of adding event listenr to multiple child individually add one listener to parent and use event bubbling to catch event from it
// instead of add click to each li tags one event listener on ul tag handles all
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});




// Event Capturing -> event travels from downward parent -> child before hitting target
// not default need to useCapture = true

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent capturing");
}, true); // true explicitly to enable it

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

// Output -
// Parent capturing
// Child clicked

// Parent capture event before it reached child