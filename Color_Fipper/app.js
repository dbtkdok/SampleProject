const colors = ["#EEAFAF", "#AFC4E7", "#BAE7AF", "#FFF77F", "#FF7F7F", "#FDC4F8", "#CB9FFD", "#A9E1ED", "#F3CDA0"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}