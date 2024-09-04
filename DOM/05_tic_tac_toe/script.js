document.addEventListener("DOMContentLoaded", game);

function game() {
     const player = document.querySelector(".player");
     const winPlayer = document.querySelector(".win");
     const gameArena = document.querySelector(".game-arena");
     const boxes = ["", "", "", "", "", "", "", "", ""];

     let playerTurn = "X";
     let playerClass = "cross";

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
          playerClass = playerTurn === "X" ? "cross" : "circle"; //toggle class
          e.target.classList.add(playerClass);

          e.target.textContent = playerTurn; //update UI
          boxes[e.target.id] = playerTurn; //update boxes array

          playerTurn = playerTurn === "X" ? "O" : "X";
          if (playerTurn === "X") {
               player.textContent = "Player 1 turn";
          } else {
               player.textContent = "Player 2 turn";
          }
          e.target.removeEventListener("click", markBoxWithCrossOrCircle);

          checkWin();
     }

     function checkWin() {
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
          winningCombos.forEach((winningCombo) => {
               const isCrossWin = winningCombo.every((box) => {
                    return boxes[box] === "X";
               });
               if (isCrossWin) {
                    winPlayer.textContent = `Player 1 Win`;
               }
          });
          winningCombos.forEach((winningCombo) => {
               const isCircleWin = winningCombo.every((box) => {
                    return boxes[box] === "O";
               });
               if (isCircleWin) {
                    winPlayer.textContent = `Player 2 Win`;
               }
          });
     }
}
