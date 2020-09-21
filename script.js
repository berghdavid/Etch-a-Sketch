const body = document.querySelector("body");
body.style.backgroundColor = "#FDF1F0";
body.style.textAlign = "center";
body.style.fontFamily = "Gill Sans, sans-serif";

const size = 10;
const width = 900;
const height = 900;

const gridbox = document.createElement("div");
gridbox.style.display = "flex";
gridbox.style.flexFlow = "row wrap";
gridbox.style.width = width + 'px';
gridbox.style.height = height + 'px';

function changeBackground(div) {
    div.style.backgroundColor = "#828282";
}

for (i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        const newDiv = document.createElement("div");
        newDiv.textContent = "iajdwi";
        newDiv.style.width = (width/size) + 'px';
        newDiv.style.height = (height/size) + 'px';
        newDiv.style.backgroundColor = "#AAAAAA";
        gridbox.appendChild(newDiv);
    }
}

body.appendChild(gridbox);