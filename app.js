//task 1
// function addListItems() {
//   var myList = document.getElementById('myList');

//   var itemTexts = ['Елемент 1', 'Елемент 2', 'Елемент 3'];

//   for (var i = 0; i < itemTexts.length; i++) {
//     var listItem = document.createElement('li');
//     listItem.textContent = itemTexts[i];
//     myList.appendChild(listItem);
//   }
// }

// function removeFirstElement() {
//   var myList = document.getElementById('myList');

//   if (myList.children.length > 0) {

//     myList.removeChild(myList.children[0]);
//   }
// }

// function addNewItem() {
//   var myList = document.getElementById('myList');

//   var newItem = document.createElement('li');
//   newItem.textContent = 'Новий елемент';

//   myList.appendChild(newItem);
// }

// addListItems();

// removeFirstElement();

// addNewItem();


//task 2
function addListItems() {
  var myList = document.getElementById('myList');
  var itemTexts = ['Елемент 1', 'Елемент 2', 'Елемент 3'];
  for (var i = 0; i < itemTexts.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = itemTexts[i];
    myList.appendChild(listItem);
  }
}

function removeFirstElement() {
  var myList = document.getElementById('myList');
  if (myList.children.length > 0) {
    var firstElement = myList.children[0];

    firstElement.style.backgroundColor = 'red';
    firstElement.style.position = 'relative';
    firstElement.style.left = '50px';
    firstElement.style.top = '20px';

    var rect = firstElement.getBoundingClientRect();
    var coordinates = {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX
    };

    var coordinatesDisplay = document.createElement('p');
    coordinatesDisplay.textContent = 'Coordinates: Top=' + coordinates.top + ', Left=' + coordinates.left;
    document.body.appendChild(coordinatesDisplay);

    firstElement.style.animation = 'animation 2s forwards';
  }
}

function addNewItem() {
  var myList = document.getElementById('myList');
  var newItem = document.createElement('li');
  newItem.textContent = 'Новий елемент';
  myList.appendChild(newItem);
}

addListItems();
removeFirstElement();
addNewItem();