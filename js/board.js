const boardElement = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));

const Board = {
  tiles,
  draw(gameState) {
    gameState.split("").forEach((item, index) => {
      const col = index % 3;
      const row = ~~(index / 3);
      tiles[item].style.gridRow = `${row + 1} / ${row + 2} `;
      tiles[item].style.gridColumn = `${col + 1} / ${col + 2} `;
    });
  },
  
};

document.addEventListener("DOMContentLoaded", Board.draw(INITIAL_STATE));