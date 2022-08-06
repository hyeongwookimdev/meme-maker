const speechBalloon = document.querySelector("#speech-balloon");
const heart = document.querySelector("#heart");
const arcWidth = document.querySelector("#arc-width");
const arcBtn = document.querySelector("#arc-btn");

let isSpeechBalloon = false;
let isHeart = false;
let isArc = false;

/*
let isPainting = false;
let isFilling = false;
let isFillingText = false;
let isArc = false;
let isSpeechBalloon = false;
let isHeart = false;
*/

function onSpeechBalloonClick() {
  console.log(speechBalloon);
  if (isSpeechBalloon) {
    isSpeechBalloon = false;
    speechBalloon.innerText = "💬";
  } else {
    isSpeechBalloon = true;
    speechBalloon.innerText = "Cancle";
    isHeart = false;
    heart.innerText = "❤️";
    isArc = false;
    arcBtn.innerText = "⚪️ Draw Circle";
  }
}
function onHeartClick() {
  if (isHeart) {
    isHeart = false;
    heart.innerText = "❤️";
  } else {
    isHeart = true;
    heart.innerText = "Cancle";
    isSpeechBalloon = false;
    speechBalloon.innerText = "💬";
    isArc = false;
    arcBtn.innerText = "⚪️ Draw Circle";
  }
}

function onArcClick() {
  if (isArc) {
    isArc = false;
    arcBtn.innerText = "⚪️ Draw Circle";
  } else {
    isArc = true;
    arcBtn.innerText = "Cancle Circle Mode";
    isHeart = false;
    heart.innerText = "❤️";
    isSpeechBalloon = false;
    speechBalloon.innerText = "💬";
  }
}

function onDoubleClickSpeech(event) {
  if (isSpeechBalloon) {
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
    ctx.quadraticCurveTo(
      event.offsetX - 50,
      event.offsetY,
      event.offsetX - 50,
      event.offsetY + 37.5
    );
    ctx.quadraticCurveTo(
      event.offsetX - 50,
      event.offsetY + 75,
      event.offsetX - 25,
      event.offsetY + 75
    );
    ctx.quadraticCurveTo(
      event.offsetX - 25,
      event.offsetY + 95,
      event.offsetX - 45,
      event.offsetY + 100
    );
    ctx.quadraticCurveTo(
      event.offsetX - 15,
      event.offsetY + 95,
      event.offsetX - 10,
      event.offsetY + 80
    );
    ctx.quadraticCurveTo(
      event.offsetX + 50,
      event.offsetY + 75,
      event.offsetX + 50,
      event.offsetY + 37.5
    );
    ctx.quadraticCurveTo(
      event.offsetX + 50,
      event.offsetY,
      event.offsetX,
      event.offsetY
    );
    ctx.fill();
  }
}

//event.offsetX + , event.offsetY +
function onDoubleClickHeart(event) {
  if (isHeart) {
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
    ctx.bezierCurveTo(
      event.offsetX,
      event.offsetY - 3,
      event.offsetX - 5,
      event.offsetY - 15,
      event.offsetX - 25,
      event.offsetY - 15
    );
    ctx.bezierCurveTo(
      event.offsetX - 55,
      event.offsetY - 15,
      event.offsetX - 55,
      event.offsetY + 22.5,
      event.offsetX - 55,
      event.offsetY + 22.5
    );
    ctx.bezierCurveTo(
      event.offsetX - 55,
      event.offsetY + 40,
      event.offsetX - 35,
      event.offsetY + 62,
      event.offsetX,
      event.offsetY + 80
    );
    ctx.bezierCurveTo(
      event.offsetX + 35,
      event.offsetY + 62,
      event.offsetX + 55,
      event.offsetY + 40,
      event.offsetX + 55,
      event.offsetY + 22.5
    );
    ctx.bezierCurveTo(
      event.offsetX + 55,
      event.offsetY + 22.5,
      event.offsetX + 55,
      event.offsetY - 15,
      event.offsetX + 25,
      event.offsetY - 15
    );
    ctx.bezierCurveTo(
      event.offsetX + 10,
      event.offsetY - 15,
      event.offsetX,
      event.offsetY - 3,
      event.offsetX,
      event.offsetY
    );
    ctx.fill();
  }
}

function onDoubleClickCircle(event) {
  if (isArc) {
    console.log(arcWidth);
    ctx.arc(event.offsetX, event.offsetY, arcWidth.value, 0, 2 * Math.PI);
    ctx.fill();
  }
}

canvas.addEventListener("dblclick", onDoubleClickSpeech);
canvas.addEventListener("dblclick", onDoubleClickHeart);
canvas.addEventListener("dblclick", onDoubleClickCircle);

speechBalloon.addEventListener("click", onSpeechBalloonClick);
heart.addEventListener("click", onHeartClick);
arcBtn.addEventListener("click", onArcClick);
