document.firstElementChild.lastElementChild.children[3].lastElementChild.innerHTML =
  "Dan The Man";

document.querySelector("li a").style.color = "red";
document.querySelector("button").style.backgroundColor = "yellow";
document.querySelector("h1").classList.add("huge");

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
var myFather = new Person("John", "Doe", 50, "blue");

// Display age
document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + ".";
