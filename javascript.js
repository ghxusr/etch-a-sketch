const grid = document.querySelector(".grid");

for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        const gridSquare = document.createElement("div");
        gridSquare.style.border = "1px solid black";
        gridSquare.style.width = "50px";
        gridSquare.style.height = "50px";
        grid.appendChild(gridSquare);
    }
}