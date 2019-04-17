document.getElementById("button").addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World";
});


document.getElementById("button").innerHTML = "New button text, see how it changes.";

var listItems = document.querySelector('ul').children;
let newList = listItems.length; //2
console.log(newList);
let aTag = document.querySelector('a');

console.log(aTag);

aTag.href = "http://bing.com";
aTag.name = "new name"; 


var selectedItem = document.querySelector("li.selected");
var first = selectedItem.previousElementSibling;
var last = selectedItem.nextElementSibling;
var list = selectedItem.parentElement;
var header = selectedItem.parentElement.parentElement;
var section = selectedItem.parentElement.parentElement.nextElementSibling;


console.log(selectedItem);
console.log(first);
console.log(last);
console.log(list);
console.log(header);
console.log(section);

//last.remove();
let newChild = document.createElement('li');
newChild.innerHTML = "A fourth thing";
list.appendChild(newChild);


const one = document.querySelector.bind(document);
const all = document.querySelectorAll.bind(document);

one('header');
all('section');
one('section.current');
one("section.current").nextElementSibling;
one("section.current").previousElementSibling.children[0];
one('h2.highlight').parentElement.parentElement

let thing = Array.from(all("section h2")).map(function(headline) {
  return headline.parentElement;
});

console.log(thing);