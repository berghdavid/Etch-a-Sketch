const body = document.querySelector("body");
body.style.backgroundColor = "#FDF1F0";
body.style.textAlign = "center";
body.style.fontFamily = "Gill Sans, sans-serif";

const size = 4;

const gridbox = document.createElement("div");
gridbox.style.display = "flex";
gridbox.style.flexWrap = "wrap";
gridbox.style.flexDirection = "row";

for (i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        const newDiv = document.createElement("div");
        newDiv.textContent = "asd";
        newDiv.style.backgroundColor = "#AAAAAA";
        gridbox.appendChild(newDiv);
    }
}
body.appendChild(gridbox);