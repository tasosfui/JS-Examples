const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
  { title: "Post three", body: "This is post three" },
  { title: "Post four", body: "This is post four" },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      const error = true;

      if (!error) {
        resolve();
      } else {
        reject("something went wrong");
      }
    }, 2000);
  });
}

function getPosts() {
  let output = "";
  posts.forEach((post) => {
    output += `<li><h2>${post.title}</h2><p>${post.body}</p></li>`;
  });
  document.querySelector(".posts").innerHTML = output;
}

createPost({ title: "New post 1", body: "This is a new post" })
  .then(getPosts)
  .catch(function (err) {
    document.querySelector(".posts").innerHTML = `<p>${err}</p>`;
  });

createPost({ title: "New post 2", body: "This is a new post" })
  .then(getPosts)
  .catch(function (err) {
    document.querySelector(".posts").innerHTML = `<p>${err}</p>`;
  });
