const noBtn = document.querySelector(".container .buttons .btn-1");
const yesBtn = document.querySelector(".container .buttons .btn-2");
const emoji = document.querySelector(".container .emoji");
const container = document.querySelector(".container");
const refuse = document.querySelector(".container h1");

noBtn.addEventListener("mouseover", function () {
  let xAxis = Math.round(Math.random() * 500);
  let yAxis = Math.round(Math.random() * 500);

  noBtn.style.cssText = `transform: translate(-${xAxis}px, -${yAxis}px);`;

  emoji.innerHTML = "😭";
});


noBtn.addEventListener("click", function () {
  noBtn.remove();
  yesBtn.remove();

  emoji.innerHTML = "😑";
  refuse.innerHTML = "It Wasn't an Option at All";
});

yesBtn.addEventListener("mouseover", function () {
  emoji.innerHTML = "😍";
});

yesBtn.addEventListener("click", function () {
  emoji.innerHTML = "❤️";
  emoji.style.cssText = "animation: emoji .4s infinite ease";

  noBtn.remove();
  yesBtn.remove();
});