const body = document.querySelector("body");
body.style.backgroundColor = "#FDF1F0";
body.style.textAlign = "center";
body.style.fontFamily = "Gill Sans, sans-serif";

let sideSize = 16;
const width = 960;

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
const buttonHeight = vh / 10 + 'px'; // 1/10 of vh left as margin
const gridHeight = vh * 8 / 10 + 'px';

const buttonHolder = document.getElementById("button-holder");
buttonHolder.style.height = buttonHeight;
buttonHolder.style.width = width + 'px';
buttonHolder.style.margin = vh / 50 + 'px' + " auto " + vh / 50 + 'px' + " auto"; // Needs a better scalable system
buttonHolder.style.backgroundColor = "#BBBFFF";
buttonHolder.style.border = "1px solid #000000";    // Border and radius class could be added instead (buttons as well)
buttonHolder.style.borderRadius = "1rem";

const container = document.getElementById("container");
container.style.display = "flex";
container.style.flexFlow = "row wrap";
container.style.width = width + 'px';
container.style.height = gridHeight;
container.style.margin = "auto";

const newButton = document.getElementById("button-new");
newButton.style.margin = "30px";
newButton.style.border = "1px solid #000000";
newButton.style.borderRadius = "1rem";

const resetButton = document.getElementById("button-reset");
resetButton.style.margin = "30px";
resetButton.style.border = "1px solid #000000";
resetButton.style.borderRadius = "1rem";

newButton.onclick = function () {
    var size = prompt("Enter grid size:");
    if (size != null) {
        if (size > 100 || size < 1) {
            alert("Invalid grid size. Grid size must be between 1-100.");
        }
        else {
            resetGrid();    //Could refactor reset and init to 1 func.
            initGrid(size);
        }
    }
}

resetButton.onclick = function () {
    if (confirm('Are you sure you want to reset the grid?')) {
        resetGrid(); // Could be made without completely resetting
        initGrid(sideSize);
    }
}

function initGrid(size) {
    for (i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");
            newDiv.style.width = (width / size) + 'px';
            newDiv.style.height = (gridHeight / size) + 'px';
            newDiv.style.backgroundColor = "#AAAAAA";
            newDiv.style.boxSizing = "border-box";
            newDiv.style.border = "1px solid #000000";
            newDiv.className = "grid-item";

            newDiv.onmouseover = function () {
                newDiv.style.backgroundColor = "black"
            };

            container.appendChild(newDiv);
        }
    }
    sideSize = size;
}

function resetGrid() {
    var allItems = document.querySelectorAll(".grid-item");
    allItems.forEach((gridItem) => {
        gridItem.remove();
    })
}

initGrid(sideSize);
