const button = document.createElement("button");
button.style.cssText = `
    color: red;
    border: 2px solid black;
    padding: 2px;    
`;
button.textContent = "Change Grid Size";

function changeGrid(){
   let num;
   do {
       const input = prompt("Enter a grid size between 15 and 100.");
       num = Number(input)
   } while (isNaN(num) || num < 15 || num > 100);
   return num;
}

// button.addEventListener("click", changeGrid)
const gridSize = changeGrid();




const container = document.querySelector("#container");

container.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    width: 640px;
    height: 640px;
    border: 3px solid #ccc;
`;
const squareSize = 640 / gridSize;
container.innerHTML = ""; // clear old squares

for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.style.cssText = `
    width: ${squareSize}px;
    height: ${squareSize}px;
    box-sizing: border-box;
    border: 1px solid #aaa;
    background-color: #e0e0e0;
  `;

    square.addEventListener("mouseover", (event) => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

    container.append(square);
}
