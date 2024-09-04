document.addEventListener("DOMContentLoaded", function () {
     console.log("loaded");
     const player = document.querySelector(".player");
     const winPlayer = document.querySelector(".win");
     const gameArena = document.querySelector(".game-arena");
     const boxes = ["", "", "", "", "", "", "", "", ""];

     let playerTurn = "X";

     function drawBox() {
          boxes.forEach((box, index) => {
               const boxEle = document.createElement("div");
               boxEle.classList.add("box");
               boxEle.id = index;
               boxEle.addEventListener("click", markBoxWithCrossOrCircle);
               gameArena.append(boxEle);
          });
     }
     drawBox();
     function markBoxWithCrossOrCircle(e) {
          console.log(e.target);
          e.target.textContent = playerTurn;
          playerTurn = playerTurn === "X" ? "O" : "X";
     }
});
