document.addEventListener("DOMContentLoaded", game);

function game() {
     const player = document.querySelector(".player");
     const winPlayer = document.querySelector(".win");
     const gameArena = document.querySelector(".game-arena");
     const boxes = ["", "", "", "", "", "", "", "", ""];
     let gameStart = true;
     let playerTurn = "X";

     function drawBox() {
          gameArena.innerHTML = "";
          boxes.forEach((box, index) => {
               const boxEle = document.createElement("div");
               boxEle.classList.add("box");
               boxEle.id = index;
               boxEle.addEventListener("click", markBoxWithCrossOrCircle);
               gameArena.append(boxEle);
               // boxEle.removeEventListener("click", markBoxWithCrossOrCircle);
          });
     }
     drawBox();

     function markBoxWithCrossOrCircle(e) {
          if (gameStart) {
               e.target.textContent = playerTurn; //update UI
               boxes[e.target.id] = playerTurn; //update boxes array using id of box element in UI

               e.target.removeEventListener("click", markBoxWithCrossOrCircle); //remove event in clicked box

               if (checkWin()) {
                    //win
                    gameStart = false;
                    winPlayer.textContent =
                         playerTurn == "X" ? "Player 1 win" : "Player 2 win";
               } else if (boxes.every((box) => box !== "")) {
                    //draw
                    gameStart = false;
                    winPlayer.textContent = " draw ";
               }

               playerTurn = playerTurn === "X" ? "O" : "X";
               player.textContent =
                    playerTurn === "X" ? "Player 1 turn" : "Player 2 turn";
          }
     }

     function checkWin() {
          // console.log("player turn ", playerTurn);
          const winningCombos = [
               [0, 1, 2],
               [3, 4, 5],
               [6, 7, 8],
               [0, 3, 6],
               [1, 4, 7],
               [2, 5, 8],
               [0, 4, 8],
               [2, 4, 6],
          ];
          return winningCombos.some((winningCombo) => {
               return winningCombo.every((box) => boxes[box] === playerTurn);
          });
     }

     //--->reset
     document.querySelector("button").addEventListener("click", () => {
          gameStart = true;
          boxes.fill(""); // Reset boxes array
          playerTurn = "X"; // Reset to Player X's turn
          player.textContent = "Player 1 turn"; // Update UI
          winPlayer.textContent = ""; // Clear win message
          drawBox(); // Redraw the game board
     });
}
