let p = new Promise(function (resolve, reject) {
  let a = 1 + 2;
  if (a === 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

p.then((message) => {
  document.querySelector(".result").innerHTML = `${message}`;
}).catch((message) => {
  document.querySelector(".result").innerHTML = `${message}`;
});
