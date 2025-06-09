// 1. Select and style the container
const container = document.querySelector("#container");
container.style.cssText = `
  display: flex;
  flex-wrap: wrap;
  width: 640px;
  height: 640px;
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

// 3. Add button click handler
button.addEventListener("click", () => {
    const gridSize = changeGrid();
    generateGrid(gridSize);
});

// 4. Append the button to the document (e.g. body or above container)
document.body.insertBefore(button, container); // add above the grid

// 5. Prompt for initial grid and generate it
const initialGridSize = changeGrid();
generateGrid(initialGridSize);

// 6. Function to prompt user for a valid grid size
function changeGrid() {
    let num;
    do {
        const input = prompt("Enter a grid size between 15 and 100.");
        num = Number(input);
    } while (isNaN(num) || num < 15 || num > 100);
    return num;
}

// 7. Function to generate the grid
function generateGrid(gridSize) {
    const squareSize = 640 / gridSize;
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
