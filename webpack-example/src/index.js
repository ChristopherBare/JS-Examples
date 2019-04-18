const Other = require("./other.js");

function sayHello() {
  // var header = document.querySelector("#greeting");
  // var hello = "<h1> hello world </h1>";
  // header.innerHTML = hello;
  let other = new Other();
  other.thing();
}

sayHello();
