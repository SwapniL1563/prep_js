// callback - fn calling another fn as argument and is executed later
// used to run async code as js is single-threaded

// eg. First get user -> then its posts -> then get comments 

function getUser(callback) {
  setTimeout(() => callback({ id: 1, name: "Swapnil" }), 500);
}

function getPosts(userId, callback) {
  setTimeout(() => callback(["Post1", "Post2"]), 500);
}

function getComments(post, callback) {
  setTimeout(() => callback(["Nice!", "Great!"]), 500);
}

//  Callback Hell - unreadable,error prone
getUser((user) => {
  console.log("User:", user.name);
  getPosts(user.id, (posts) => {
    console.log("Posts:", posts);
    getComments(posts[0], (comments) => {
      console.log("Comments:", comments);
    });
  });
});



// Promises - object that represent eventual completion or failure of async task
// 3 state - pending,fulfiled and rejected
// .then -> runs after promise is resolved
// .catch -> run after promise is rejected

function getUser() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: "Swapnil" }), 500)
  );
}

function getPosts(userId) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(["Post1", "Post2"]), 500)
  );
}

function getComments(post) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(["Nice!", "Great!"]), 500)
  );
}

// Promise Chaining
getUser()
  .then((user) => {
    console.log("User:", user.name);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return getComments(posts[0]);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .catch((err) => console.error(err));


// Async / Await - syntactic sugar over promises 
// better way of writting promises
// async - makes fn return promises
// await - delay execution until promise is resolved

async function showData() {
  try {
    const user = await getUser();
    console.log("User:", user.name);

    const posts = await getPosts(user.id);
    console.log("Posts:", posts);

    const comments = await getComments(posts[0]);
    console.log("Comments:", comments);
  } catch (err) {
    console.error(err);
  }
}

showData();

