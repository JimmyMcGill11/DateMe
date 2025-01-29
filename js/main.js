const noBtn = document.querySelector(".container .buttons .btn-1");
const yesBtn = document.querySelector(".container .buttons .btn-2");
const emoji = document.querySelector(".container .emoji");
const title = document.querySelector(".container h1");

if (localStorage.getItem("request")) {
  emoji.innerHTML = "❤️";
  emoji.style.cssText = "animation: emoji .4s infinite ease";
  title.innerHTML = "Ok, I will Call You";

  noBtn.remove();
  yesBtn.remove();
}

else {  
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
    title.innerHTML = "It Wasn't an Option at All";
  });
  
  yesBtn.addEventListener("mouseover", function () {
    emoji.innerHTML = "😍";
  });
  
  yesBtn.addEventListener("click", function () {
    emoji.innerHTML = "❤️";
    emoji.style.cssText = "animation: emoji .4s infinite ease";
    title.innerHTML = "Ok, I will Call You";
    
    localStorage.setItem("request", "yes");
    noBtn.remove();
    yesBtn.remove();
  });

}