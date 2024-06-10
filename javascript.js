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

//Select all divs in the grid
const fullGrid = document.querySelectorAll(".grid > div");

fullGrid.forEach((square) => {
    //Add an event listener to each grid div
    square.addEventListener("mouseover", () => {
        //Generate a random color value
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        square.style.backgroundColor = "#" + randomColor;
    });
});