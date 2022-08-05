const colorStyle = document.querySelector("#color-style");
const color1 = document.querySelector(".color-option:nth-of-type(1)");
const color2 = document.querySelector(".color-option:nth-of-type(2)");
const color3 = document.querySelector(".color-option:nth-of-type(3)");
const color4 = document.querySelector(".color-option:nth-of-type(4)");
const color5 = document.querySelector(".color-option:nth-of-type(5)");
const color6 = document.querySelector(".color-option:nth-of-type(6)");
const color7 = document.querySelector(".color-option:nth-of-type(7)");
const color8 = document.querySelector(".color-option:nth-of-type(8)");
const color9 = document.querySelector(".color-option:nth-of-type(9)");
const color10 = document.querySelector(".color-option:nth-of-type(10)");

function onColorStyleChange(event) {
  if (event.target.value === "pastel") {
    color1.style = "background-color: #f38181";
    color2.style = "background-color: #fbc687";
    color3.style = "background-color: #fce38a";
    color4.style = "background-color: #95e1d3";
    color5.style = "background-color: #a8d8ea";
    color6.style = "background-color: #3f72af";
    color7.style = "background-color: #8785a2";
    color8.style = "background-color: #ffc7c7";
    color9.style = "background-color: #ffe2e2";
    color10.style = "background-color: #f6f6f6";

    color1.dataset.color = "#f38181";
    color2.dataset.color = "#fbc687";
    color3.dataset.color = "#fce38a";
    color4.dataset.color = "#95e1d3";
    color5.dataset.color = "#a8d8ea";
    color6.dataset.color = "#3f72af";
    color7.dataset.color = "#8785a2";
    color8.dataset.color = "#ffc7c7";
    color9.dataset.color = "#ffe2e2";
    color10.dataset.color = "#f6f6f6";
  } else if (event.target.value === "neon") {
    color1.style = "background-color: #ff2e63";
    color2.style = "background-color: #ff9a00";
    color3.style = "background-color: #f7ec09";
    color4.style = "background-color: #00ffab";
    color5.style = "background-color: #0096ff";
    color6.style = "background-color: #4700d8";
    color7.style = "background-color: #9900f0";
    color8.style = "background-color: #f900bf";
    color9.style = "background-color: #ff85b3";
    color10.style = "background-color: #ffeded";

    color1.dataset.color = "#ff2e63";
    color2.dataset.color = "#ff9a00";
    color3.dataset.color = "#f7ec09";
    color4.dataset.color = "#00ffab";
    color5.dataset.color = "#0096ff";
    color6.dataset.color = "#4700d8";
    color7.dataset.color = "#9900f0";
    color8.dataset.color = "#f900bf";
    color9.dataset.color = "#ff85b3";
    color10.dataset.color = "#ffeded";
  } else {
    color1.style = "background-color: #e74c3c";
    color2.style = "background-color: #e67e22";
    color3.style = "background-color: #f1c40f";
    color4.style = "background-color: #2ecc71";
    color5.style = "background-color: #1abc9c";
    color6.style = "background-color: #3498db";
    color7.style = "background-color: #34495e";
    color8.style = "background-color: #9b59b6";
    color9.style = "background-color: #95a5a6";
    color10.style = "background-color: #ecf0f1";

    color1.dataset.color = "#e74c3c";
    color2.dataset.color = "#e67e22";
    color3.dataset.color = "#f1c40f";
    color4.dataset.color = "#2ecc71";
    color5.dataset.color = "#1abc9c";
    color6.dataset.color = "#3498db";
    color7.dataset.color = "#34495e";
    color8.dataset.color = "#9b59b6";
    color9.dataset.color = "#95a5a6";
    color10.dataset.color = "#ecf0f1";
  }
}

colorStyle.addEventListener("change", onColorStyleChange);
