// debouncing - it is a techncique that delays the execution or make sure fn is executed only after a certain period of time has passed without an event being triggered
// eg. used in search boxes - API call made only after user stop typing for 500ms
// why debounce is needed? - Because if event trigger frequently, fn call will be made on every single event trigger 
// this lead to unwanted API calls , waste CPU and memory , unnecessary expensive operation
// to optimise the fn calls after event trigger we use debouncing that makes fn call only after user has  "pause" for certain time

// debounce fn - hof that takes fn as arg and return new debounced fn
// function debounce(fn,delay) {
//     let timer; // store setTimeout id 
//     return function(...arg){
//        clearTimeout(timer);  // we will clear old timer and start new timer after user type again smtg
//        timer = setTimeout(()=> fn.apply(this,arg),delay) // make fn call only after user pauses typing for certain delay
//     }
// }

// function fetchData(query) {
//     console.log("Fetching Data for: " , query)
// }

// // select the search bar
// const search = document.getElementById("search");

// search.addEventListener("input", debounce((e)=> {
//     fetchData(e.target.value)
// },1000))


// throttling - it is technique that ensure a fn is executed once in specific interval of time , no matter how many time event triggers
// set or limit the execution rate of fn
// eg. scroll event - fn run at most once every 1s irrespective of user scrolling continously
// unlike debounce it doesn;t depend on user actions
// eg. use to prevent button spam and make sure fn is executed once every 2s

// throttle fn - hof that takes fn as arg and return throttled fn
function throttle(fn,limit){
    let lastCall = 0; // store the last execution Time
    return function(...args){
        const now = Date.now(); // get current time
        if(now - lastCall >= limit){
            fn.apply(this,args);
            lastCall = now;
        }
    }
}

function scrollLog() {
    console.log("Window Y: ",window.scrollY,"at",new Date().toLocaleDateString())
}

window.addEventListener("scroll",throttle(scrollLog,5000))

