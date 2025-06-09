// 1. Select and style the container
const container = document.querySelector("#container");
container.style.cssText = `
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: 600px;
  border: 3px solid #ccc;
`;

// 2. Create and style the button
const button = document.createElement("button");
button.textContent = "Change Grid Size";
button.style.cssText = `
  color: red;
  border: 2px solid black;
  padding: 2px;
  margin: 10px 0;
`;

// 3. Add button click handler to prompt and generate new grid
button.addEventListener("click", () => {
    const gridSize = changeGrid();  // prompts user
    generateGrid(gridSize);         // builds new grid
});

// 4. Append the button to the document (above the grid)
document.body.insertBefore(button, container);

// 5. Generate the default 16×16 grid
generateGrid(16);

// 6. Function: prompt for valid grid size
function changeGrid() {
    let num;
    do {
        const input = prompt("Enter a grid size between 15 and 100.");
        num = Number(input);
    } while (isNaN(num) || num < 15 || num > 100);
    return num;
}

// 7. Function: build the grid
function generateGrid(gridSize) {
    const squareSize = 600 / gridSize;
    container.innerHTML = ""; // clear old grid

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.style.cssText = `
      width: ${squareSize}px;
      height: ${squareSize}px;
      box-sizing: border-box;
      border: 1px solid #aaa;
      background-color: #e0e0e0;
    `;

        square.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        container.append(square);
    }
}


const restartButton = document.createElement("button");
restartButton.textContent = "Restart The Game";
restartButton.addEventListener("click", () => {
    generateGrid(16); // resets to default 16x16 grid
});


document.body.insertBefore(restartButton, container);
