const grid = document.querySelector(".grid");

for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        const gridSquare = document.createElement("div");
        gridSquare.style.outline = "1px solid black";
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

const button = document.querySelector("#new-grid");

button.addEventListener("click", () => {
    let sizeInput = 0;
    do {
        sizeInput = parseInt(prompt("Please enter the number of squares per side of the grid. Number cannot be higher than 100"));
    } while (sizeInput > 100 || sizeInput <= 0 || Number.isNaN(sizeInput));

    const currentGrid = document.querySelectorAll(".grid > div");
    currentGrid.forEach((square) => {
        grid.removeChild(square);
    });

    let gridSize = Math.floor(800 / sizeInput);

    for (i = 0; i < sizeInput; i++) {
        for (j = 0; j < sizeInput; j++) {
            const userSquare = document.createElement("div");
            userSquare.style.outline = "1px solid black";
            userSquare.style.width = gridSize.toString() + "px";
            userSquare.style.height = gridSize.toString() + "px";
            grid.appendChild(userSquare);
        }
    }
    
    const userNewGrid = document.querySelectorAll(".grid > div");
    
    userNewGrid.forEach((square) => {
        //Add an event listener to each grid div
        square.addEventListener("mouseover", () => {
            //Generate a random color value
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = "#" + randomColor;
        });
    });
});