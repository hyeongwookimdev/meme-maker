const arcWidth = document.querySelector("#arc-width");
const arcBtn = document.querySelector("#arc-btn");
const fillBackgroundBtn = document.querySelector("#fill-background-btn");
const textModeBtn = document.querySelector("#text-mode-btn");
const fontStyle = document.querySelector("#font-style");
const fontWidth = document.querySelector("#font-width");
const saveBtn = document.querySelector("#save");
const textInput = document.querySelector("#text");
const fileInput = document.querySelector("#file");
const modeBtn = document.querySelector("#mode-btn");
const destroyBtn = document.querySelector("#destroy-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const colorOption = Array.from(document.getElementsByClassName("color-option"));
const color = document.querySelector("#color");
const lineWidth = document.querySelector("#line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
//많이 쓸 변수 이름이라서 context => ctx

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.font = `${fontWidth.value}px serif`;
/*  CSS뿐 아니라 JS에도 높이와 너비를 지정해줘야 함
    선들을  그리기 시작할 때 width와 height를 JS에서만 수정할 것
    canvas에서 이미지의 퀄리티를 높이기 위해서 */
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;
let isFillingText = false;
let isArc = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return; //함수 끝내기
  } else if (isFilling) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.fill();
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting(event) {
  isPainting = true;
}
function cancelPainting(event) {
  isPainting = false;
}
function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

function onFontWidthChange(event) {
  console.log(fontStyle.value);
  if (fontStyle.value !== "") {
    ctx.font = `${event.target.value}px ${fontStyle.value}`;
  } else {
    ctx.font = `${event.target.value}px serif`;
  }
}

function onFontStyleChange(event) {
  if (event.target.value !== "")
    ctx.font = `${fontWidth.value}px ${event.target.value}`;
  else {
    ctx.font = `${fontWidth.value}px serif`;
  }
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}
// 위 아래의 함수를 합쳐서 실행할 방법을 찾아보자
function onColorClick(event) {
  ctx.strokeStyle = event.target.dataset.color;
  ctx.fillStyle = event.target.dataset.color;
  color.value = event.target.dataset.color;
}
function onModeClick(event) {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "📐 Draw Figure";
  } else {
    isFilling = true;
    modeBtn.innerText = "✏️ Draw Line";
  }
}

function onArcClick() {
  if (isArc) {
    isArc = false;
    arcBtn.innerText = "⚪️ Draw Circle";
  } else {
    isArc = true;
    arcBtn.innerText = "Cancle Circle Mode";
  }
}

function onFillBackgroundClick() {
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onTextModeClick(event) {
  if (isFillingText) {
    isFillingText = false;
    textModeBtn.innerText = "🪣 Fill Text";
  } else {
    isFillingText = true;
    textModeBtn.innerText = "✏️ Draw Text";
  }
}

function onDestroyClick() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick(event) {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "" && isFillingText === true) {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore();
  } else {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.strokeText(text, event.offsetX, event.offsetY);
    ctx.restore();
  }
}

function onDoubleClickCircle(event) {
  if (isArc) {
    console.log(arcWidth);
    ctx.arc(event.offsetX, event.offsetY, arcWidth.value, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function onSaveClick() {
  //목표: 현재 캔버스 안에 있는 이미지를 저장
  const url = canvas.toDataURL(); // base64로 인코딩되어있는 이미지를 돌려줌
  const a = document.createElement("a"); // <a href="" download=""></a> 이렇게 만들 것
  a.href = url;
  a.download = "myDrawing.png"; //download 속성은 파일 다운로드를 작동시킴
  a.click();
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("dblclick", onDoubleClickCircle);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
fontWidth.addEventListener("change", onFontWidthChange);
fontStyle.addEventListener("change", onFontStyleChange);

colorOption.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
textModeBtn.addEventListener("click", onTextModeClick);
fillBackgroundBtn.addEventListener("click", onFillBackgroundClick);
arcBtn.addEventListener("click", onArcClick);
