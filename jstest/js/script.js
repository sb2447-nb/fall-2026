const button = document.getElementById("colorButton");
const colors = ["#ffb6c1", "#add8e6", "#d8bfd8", "#98fb98", "#fffacd", "#ffdab9"];
function changeColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}
button.addEventListener("click", changeColor);
