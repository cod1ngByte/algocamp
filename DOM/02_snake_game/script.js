document.addEventListener("DOMContentLoaded", function () {
     const gameArena = document.querySelector(".game-arena");

     const arenaSize = 600;
     const cellSize = 20;
     let score = 0;
     let isGameStarted = false;
     const food = { x: 300, y: 300 }; // {x : 15*20, y: 15*20} , cells coordinate in pixel( top : 300px, left : 300px)

     const snakes = [
          { x: 160, y: 300 },
          { x: 140, y: 300 },
          { x: 120, y: 300 },
     ];
     //head body body body tail

     function drawDiv() {
          console.log("draw div");
          const foodDiv = document.createElement("div");
          foodDiv.classList.add("food");
          foodDiv.style.top = `${food.y}px`;
          foodDiv.style.left = `${food.x}px`;

          gameArena.append(foodDiv);

          snakes.forEach((snake) => {
               const snakeDiv = document.createElement("div");
               snakeDiv.classList.add("snake");
               snakeDiv.style.top = `${snake.y}px`;
               snakeDiv.style.left = `${snake.x}px`;
               gameArena.appendChild(snakeDiv);
               console.log(snake);
          });
     }

     function drawFoodAndSnake() {
          console.log("draw food and snake");
          drawDiv();
     }
     function runGame() {
          if (!isGameStarted) {
               console.log("run game");
               isGameStarted = true;
               drawFoodAndSnake();
               //gameloop() -->Todo
          }
     }

     function init() {
          const scoreBoard = document.createElement("div");
          // scoreBoard.textContent = "0";
          scoreBoard.id = "score-board";
          document.body.insertBefore(scoreBoard, gameArena); //insert before gameArena

          const startBtn = document.createElement("button");
          startBtn.textContent = "Start Game";
          startBtn.classList.add("start-button");

          document.body.appendChild(startBtn);

          //--->start button event
          startBtn.addEventListener("click", function startGame() {
               // startBtn.style.display = "none"; //remove the button from web page layout
               runGame();
          });
     }
     init();
});
