document.addEventListener("DOMContentLoaded", function () {
     const startBtn = document.createElement("button");
     const script = document.querySelector('[src="./script.js"]');
     const gameArena = document.querySelector(".game-arena");

     const scoreBoard = document.createElement("div");

     //initial value :
     let isGameStarted = false;
     let score = 0;
     let intervalId;
     const ball = { x: 300, y: 175 }; //x : left and y : top
     const table = { x: 0, y: 135 };
     const gameArenaWidth = gameArena.offsetWidth; //including padding and border
     const gameArenaHeight = gameArena.offsetHeight;
     const ballWidth = 20;
     const ballHeight = 20;
     const tableHeight = 80;
     const tableWidth = 10;
     let bx = 2;
     let by = 2;
     let ty = 7.5;

     function resetGame() {
          score = 0;
          scoreBoard.textContent = score;
          isGameStarted = false;
          bx = 2;
          by = 2;
          ty = 7.5;

          ball.x = 300;
          ball.y = 175;
          table.x = 0;
          table.y = 135;
          init();
     }

     function ballAndTableCollision() {
          if (ball.x <= 0) {
               // alert("your game score is ", score);
               clearInterval(intervalId);
               resetGame();
          }
          if (
               ball.x <= table.x + tableWidth && // Ball's left side hits the table's right side
               ball.y >= table.y &&
               ball.y <= table.y + tableHeight
               //ball.y is always in between table height
          ) {
               bx = bx * -1; // Reverse the ball's x horizontal direction
               score++;
               scoreBoard.textContent = score;
          }
     }

     function ballMovement() {
          // const ballEle = document.querySelector(".ball");
          // |--------|(ball)
          // |------(ball)|
          if (ball.x >= gameArenaWidth - ballWidth || ball.x <= 0) {
               bx = bx * -1; // reverse the ball horizontall direction
          }
          if (ball.y >= gameArenaHeight - ballHeight || ball.y <= 0) {
               by = by * -1; // reverse the ball vertical direction
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
               ballAndTableCollision();
               drawBallAndTable();
          }, 10);
     }

     function tableMovement(e) {
          const tableEle = document.querySelector(".table");
          if (e.code === "ArrowUp" && table.y > 0) {
               table.y = table.y - ty;
          }
          if (
               e.code === "ArrowDown" &&
               table.y <= gameArenaHeight - tableHeight
          ) {
               table.y = table.y + ty;
          }
     }

     function startGame() {
          if (!isGameStarted) {
               startBtn.style.visibility = "hidden";
               isGameStarted = true;

               document.addEventListener("keydown", tableMovement);
               gameLoop();
          }
     }

     function init() {
          startBtn.textContent = "Start";
          startBtn.classList.add("start-button");
          startBtn.style.visibility = "visible";
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
