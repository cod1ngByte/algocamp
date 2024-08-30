document.addEventListener("DOMContentLoaded", function () {
     const startBtn = document.createElement("button");
     const script = document.querySelector('[src="./script.js"]');
     const gameArena = document.querySelector(".game-arena");
     const scoreBoard = document.createElement("div");

     //initial value :
     let isGameStarted = false;
     let score = 0;
     let intervalId;
     const ball = { x: 300, y: 280 };
     const table = { x: 0, y: 200 };
     const gameArenaWidth = 600;
     const gameArenaHeight = 600;
     const ballWidth = 20;
     const ballHeight = 20;
     const tableHeight = 100;
     const tableWidth = 10;
     let bx = 1;
     let by = -1;

     function resetGame() {
          score = 0;
          scoreBoard.textContent = score;
          isGameStarted = false;
          bx = 1;
          by = -1;

          ball.x = 300;
          ball.y = 280;
          table.x = 0;
          table.y = 200;
          init();
     }

     function ballAndTableCollision() {
          if (ball.x <= 0) {
               clearInterval(intervalId);
               resetGame();
          }
          if (
               ball.x <= table.x + tableWidth && // Ball's left side hits the table's right side
               ball.y >= table.y &&
               ball.y <= table.y + tableHeight
               //ball.y is always in between table height
          ) {
               bx = -bx; // Reverse the ball's x horizontal direction
               score++;
               scoreBoard.textContent = score;
          }
     }

     function ballMovement() {
          // const ballEle = document.querySelector(".ball");
          if (ball.x + bx > gameArenaWidth - ballWidth) {
               bx = -bx; // reverse the ball horizontall direction
          }
          if (ball.y + by > gameArenaHeight - ballHeight || ball.y + by < 0) {
               by = -by; // reverse the ball vertical direction
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
          }, 8);
     }

     function tableMovement(e) {
          const tableEle = document.querySelector(".table");
          if (e.code === "ArrowUp" && table.y > 0) {
               table.y = table.y - 10;
          }
          if (e.code === "ArrowDown" && table.y < 600 - tableHeight) {
               table.y = table.y + 10;
          }
     }

     function startGame() {
          if (!isGameStarted) {
               startBtn.style.display = "none";
               isGameStarted = true;

               document.addEventListener("keydown", tableMovement);
               gameLoop();
          }
     }

     function init() {
          startBtn.textContent = "Start";
          startBtn.classList.add("start-button");
          startBtn.style.display = "block";
          document.body.insertBefore(startBtn, script);
          scoreBoard.id = "score-board";
          scoreBoard.textContent = 0;
          document.body.insertBefore(scoreBoard, gameArena);
          drawBallAndTable();

          //--> start button event
          startBtn.addEventListener("click", startGame);
     }
     init();
});
