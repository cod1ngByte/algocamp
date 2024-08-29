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

     let dx = cellSize; //+20
     let dy = 0;
     let intervalId;
     function updateSnake() {
          const newHead = { x: snakes[0].x + dx, y: snakes[0].y + dy };
          snakes.unshift(newHead); //add new head to snake

          //collison of snake head with food
          if (newHead.x === food.x && newHead.y === food.y) {
               score += 10;

               //todo : move food
               clearInterval(intervalId);
          } else {
               console.log("pop");
               snakes.pop(); //remove tail
          }
          console.log(snakes);
          console.log(food);
     }

     function changeDirection(e) {
          console.log(e);
          const isGoingUp = dy === -cellSize;
          const isGoingDown = dy === cellSize;
          const isGoingLeft = dx === -cellSize;
          const isGoingRight = dx === cellSize;

          if (e.code === "ArrowUp" && !isGoingDown) {
               dx = 0; // style.left
               dy = -cellSize; // style.top
          } else if (e.code === "ArrowDown" && !isGoingUp) {
               dx = 0;
               dy = cellSize;
          } else if (e.code === "ArrowLeft" && !isGoingRight) {
               dx = -cellSize;
               dy = 0;
          } else if (e.code === "ArrowRight" && !isGoingLeft) {
               dx = cellSize;
               dy = 0;
          }
     }

     function drawDiv(xCoord, yCoord, className) {
          const divEle = document.createElement("div");
          divEle.classList.add(className);
          divEle.style.top = `${yCoord}px`;
          divEle.style.left = `${xCoord}px`;
          return divEle;
     }

     function drawFoodAndSnake() {
          gameArena.innerHMTL = ""; // clear the game arena each time and redraw with the new position of food and snake
          const foodEle = drawDiv(food.x, food.y, "food");
          gameArena.appendChild(foodEle);

          snakes.forEach((snakeCell) => {
               const snakeEle = drawDiv(snakeCell.x, snakeCell.y, "snake");
               gameArena.appendChild(snakeEle);
          });
     }

     function gameLoop() {
          intervalId = setInterval(() => {
               updateSnake();
               drawFoodAndSnake();
          }, 500);
     }
     function runGame() {
          if (!isGameStarted) {
               isGameStarted = true;

               document.addEventListener("keydown", changeDirection);

               gameLoop();
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
               startBtn.style.display = "none"; //remove the button from web page layout
               runGame();
          });
     }
     init();
});
