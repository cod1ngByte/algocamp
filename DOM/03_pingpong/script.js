document.addEventListener("DOMContentLoaded", function () {
     const startBtn = document.createElement("button");
     const script = document.querySelector('[src="./script.js"]');
     const gameArena = document.querySelector(".game-arena");

     //initial value :
     let isGameStarted = false;
     let score = 0;
     let intervalId;
     const ball = { x: 200, y: 200 };
     const table = { x: 0, y: 180 };
     const gameArenaWidth = 600;
     const gameArenaHeight = 600;
     const ballWidth = 20;
     const ballHeight = 20;
     const tableHeight = 80;
     const tableWidth = 10;
     let bx = 1;
     let by = -1;

     function ballAndTableCollision() {}

     function ballMovement() {
          // const ballEle = document.querySelector(".ball");
          if (ball.x + bx > gameArenaWidth - ballWidth || ball.x + bx < 0) {
               bx = -bx; //change the direction of x
          }
          if (ball.y + by > gameArenaHeight - ballHeight || ball.y + by < 0) {
               by = -by; // change the direction of y
          }
          ball.x = ball.x + bx;
          ball.y = ball.y + by;
     }

     function drawDiv(xCoord, yCoord, className) {
          const div = document.createElement("div");
          div.classList.add(className);
          div.style.left = `${xCoord}px`;
          div.style.top = `${yCoord}px`;

          return div;
     }
     function drawBallAndTable() {
          gameArena.innerHTML = "";
          const tableEle = drawDiv(table.x, table.y, "table");
          gameArena.append(tableEle);

          const ballEle = drawDiv(ball.x, ball.y, "ball");
          gameArena.append(ballEle);
     }

     function gameLoop() {
          intervalId = setInterval(() => {
               ballMovement();
               drawBallAndTable();
               ballAndTableCollision();
          }, 10);
     }

     function tableMovement(e) {
          const tableEle = document.querySelector(".table");
          if (e.code === "ArrowUp" && table.y > 0) {
               table.y = table.y - 5;
          }
          if (e.code === "ArrowDown" && table.y < 600 - tableHeight) {
               table.y = table.y + 5;
          }
     }

     function startGame() {
          if (!isGameStarted) {
               startBtn.style.display = "none";
               isGameStarted = true;
               drawBallAndTable();

               document.addEventListener("keydown", tableMovement);
               gameLoop();
          }
     }

     function init() {
          startBtn.textContent = "Start";
          startBtn.classList.add("start-button");
          document.body.insertBefore(startBtn, script);

          //--> start button event
          startBtn.addEventListener("click", startGame);
     }
     init();
});
