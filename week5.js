const changeTextBtn = document.getElementById("change-text");
const toggleStyleBtn = document.getElementById("toggle-style");
const addBoxBtn = document.getElementById("add-box");
const removeBoxBtn = document.getElementById("remove-box");
const textElement = document.getElementById("dynamic-text");
const boxContainer = document.getElementById("box-container");

let boxCount = 0;

// Change text dynamically
changeTextBtn.addEventListener("click", () => {
  textElement.textContent = "🔥 JavaScript just changed this text!";
});

// Toggle style class
toggleStyleBtn.addEventListener("click", () => {
  textElement.classList.toggle("highlighted");
});

// Add a new box
addBoxBtn.addEventListener("click", () => {
  const box = document.createElement("div");
  box.classList.add("box");
  box.id = `box-${++boxCount}`;
  box.title = `Box ${boxCount}`;
  boxContainer.appendChild(box);
});

// Remove the last box
removeBoxBtn.addEventListener("click", () => {
  const lastBox = boxContainer.lastElementChild;
  if (lastBox) {
    boxContainer.removeChild(lastBox);
    boxCount--;
  } else {
    alert("No more boxes to remove!");
  }
});

