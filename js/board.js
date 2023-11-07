const boardElement = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));

const Board = {
  tiles,
  draw(gameState)
   {
    gameState.split("").forEach((item,index) =>{
        tiles[index].style.order = item
        console.log({item,index});
    })
  },
};