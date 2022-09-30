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
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("something went wrong");
      }
    }, 5000);
  });
}

function getPosts() {
  let output = "";
  posts.forEach((post) => {
    output += `<li>${post.title}</li>`;
  });
  document.querySelector(".posts").innerHTML = output;
}

createPost({ title: "This is the new added post 1", body: "bla bla bla" })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });
