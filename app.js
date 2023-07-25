//UI logic:
const rules = document.getElementById('rules');
const showRulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');

//Event listeners
showRulesBtn.addEventListener('click', function () {
  rules.classList.add('show');
});

closeBtn.addEventListener('click', function () {
  rules.classList.remove('show');
});


//Canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//Create ball props
const ball = {
  x: canvas.width / 2,      // x and y positioning to the center
  y: canvas.height / 2,     // y vertically, x horizontally
  size: 10,                 // the redious of the ball
  speed: 4,                 // the speed the ball will move
  dx: 4,                    //the speed of the direction on the x axis 
  dy: -4,
};

//Create paddle props
const paddle = {
  x: canvas.width / 2 - 40, //the entire width is 80, so we are taking half the width do that 40
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0 //only moving on x axis
};

//Draw paddle on canvas
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
}

//Draw ball on canvas
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2, true);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
};

drawBall();
drawPaddle();