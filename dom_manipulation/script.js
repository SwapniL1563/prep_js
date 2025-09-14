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

// Note  - reflow - aka as layout happens when structure orgeometry of page cahnges , browser recal postion, size , dimension of elem , hwnce expensive operation ( eg. add elem, change elem size, font size inc)
// repaint - is cheaper happens whenvisual styles cahnges but layout remains same , brwoser just repaints pixels ( eg . changing color, change bg-color )
// reflow cause repaint most of them time but not vice versa