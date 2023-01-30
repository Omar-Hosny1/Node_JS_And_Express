const fs = require("fs");

// fs.writeFileSync("index.js", "const num = 2");

function toArray(...args) {
  return args;
}

console.log(toArray(1, 2, 3, 4));

function fetchData(callback) {
  setTimeout(() => {
    callback("hello by anderi");
  }, 1500);
}

fetchData((text) => {
  console.log(text + "MOAMR");
});

// --save => for production => we use it when the server already there in the internt
// --save-dev => for devlopment => we use it when we develop the the server
