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

     function startGame() {
          startBtn.style.display = "none";
          isGameStarted = true;
          // gameLoop(); // Todo
          drawBallAndTable();
          moveBall();
     }
     // function gameLoop(){
     //      intervalId = setInterval(()=>{
     //           moveBall();
     //           drawBallAndTable();
     //      },200)
     // }

     function init() {
          startBtn.textContent = "Start";
          startBtn.classList.add("start-button");
          document.body.insertBefore(startBtn, script);
          startBtn.addEventListener("click", startGame);
     }
     init();
});
