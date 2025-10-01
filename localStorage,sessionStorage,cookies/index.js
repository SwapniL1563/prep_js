//  local storage -> web storage mechanism that stores data in brrowser with no expiration
//  data persists even after tab/ browser is closed
//  size: 5-10 mb depending on browser
//  stays until cleared manually localstorage.clear()

//  Not sent with http req -> only stored in browser
//  can be accessed by any js on same domain -> xss attack
//  not suitable for sensitive info like passwords

//  use cases:
//  storing user preference(theme,language)
//  caching less sensitive data(productsList)

//  eg.
localStorage.setItem("theme", "dark") // add 
console.log(localStorage.getItem("theme")) // get
localStorage.removeItem("theme"); // remove

// sessionStorage -> same as localstorage but use to store temporary data as scope to single browser tab
// data is cleared when tab or browser closed

// size: 5mb
//  remain until browser is closed
//  not sent with http req 
//  xss attack prone but safer than localStorage

//  use case:
//  temporary session-based data (form-data,one-time-token,product cart)
//  preventing data leak across multiple tabs

//  eg.
sessionStorage.setItem("cart", JSON.stringify(["item1" , "item2"]));
console.log(sessionStorage.getItem("cart")); // ["item1","item2"]
sessionStorage.clear();


// cookies -> small pieces of data stored in browser and send to server with every HTTP re
// can be HTTP-only - safer not access to JS or normal document.cookie

// size: 4kb, brwoser limit 20-50 cookier per domain
// lifetime: can be session-based or persistent(expiry set by dev)
// sent with http req -> automatically added to req headers

// vulnerable to xss if not HttpOnly
// use case:
// auth token(JWT,session)
// track user analytics

// eg.
document.cookie = "username=John; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/"

console.log(document.cookie);