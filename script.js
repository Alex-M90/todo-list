var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

// Create an item + delete button to the list
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete");
  deleteButton.appendChild(document.createTextNode("X"));
  ul>li.appendChild(deleteButton).addEventListener("click", deleteItem);
}

// Item created by clicking on Add
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
}
}

// Item created by pressing Enter
function addListAfterKeyPress(event) {
     if (inputLength() > 0 && event.which === 13) {
       createListElement();
     }
}

// Add and remove line-through on items
function addLineOnClick(event) {
  var listItem = event.target;
  listItem.classList.toggle("done");
}

// Delete item by clicking on X button
function deleteItem(event) {
  var deleteItem = event.target;
  if (deleteItem.classList.contains("delete")) {
    deleteItem.parentNode.remove()
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);

ul.addEventListener("click", addLineOnClick);

ul.addEventListener("click", deleteItem);