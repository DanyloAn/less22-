var newItem = document.createElement("li");
newItem.textContent = "New List Item";

document.getElementById("myList").appendChild(newItem);

var firstItem = document.getElementById("myList").firstElementChild;
firstItem.remove();

firstItem.style.backgroundColor = "red";
firstItem.style.position = "relative";
firstItem.style.left = "50px";
firstItem.style.top = "20px";

var rect = firstItem.getBoundingClientRect();
var coordinates = {
  top: rect.top + window.scrollY,
  left: rect.left + window.scrollX,
};

var coordinatesElement = document.createElement("p");
coordinatesElement.textContent =
  "Coordinates: Top - " + coordinates.top + ", Left - " + coordinates.left;
document.body.appendChild(coordinatesElement);

firstItem.classList.add("animated");
firstItem.style.left = "0";
firstItem.style.top = "0";
