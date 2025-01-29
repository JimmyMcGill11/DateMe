const svg = d3.select("svg");

// 🐰 Body
svg.append("ellipse")
  .attr("cx", 200)
  .attr("cy", 250)
  .attr("rx", 50)
  .attr("ry", 70)
  .attr("fill", "#D9C2A3");

// 🐰 Head
svg.append("circle")
  .attr("cx", 200)
  .attr("cy", 170)
  .attr("r", 40)
  .attr("fill", "#D9C2A3");

// 🐰 Ears
const leftEar = svg.append("ellipse")
  .attr("cx", 180)
  .attr("cy", 100)
  .attr("rx", 20)
  .attr("ry", 60)
  .attr("fill", "#D9C2A3");

const rightEar = svg.append("ellipse")
  .attr("cx", 220)
  .attr("cy", 100)
  .attr("rx", 20)
  .attr("ry", 60)
  .attr("fill", "#D9C2A3");

// 🐰 Inner Ears
svg.append("ellipse")
  .attr("cx", 180)
  .attr("cy", 100)
  .attr("rx", 10)
  .attr("ry", 40)
  .attr("fill", "pink");

svg.append("ellipse")
  .attr("cx", 220)
  .attr("cy", 100)
  .attr("rx", 10)
  .attr("ry", 40)
  .attr("fill", "pink");

// 🐰 Eyes
const leftEye = svg.append("circle")
  .attr("cx", 190)
  .attr("cy", 165)
  .attr("r", 5)
  .attr("fill", "black");

const rightEye = svg.append("circle")
  .attr("cx", 210)
  .attr("cy", 165)
  .attr("r", 5)
  .attr("fill", "black");

// 🐰 Nose
svg.append("circle")
  .attr("cx", 200)
  .attr("cy", 172)
  .attr("r", 4)
  .attr("fill", "pink");

// 🐰 Mouth
svg.append("path")
  .attr("d", "M 195 180 Q 200 190, 205 180")
  .attr("stroke", "black")
  .attr("fill", "transparent")
  .attr("stroke-width", 2);

// 🐰 Whiskers
svg.append("line").attr("x1", 175).attr("y1", 175).attr("x2", 150).attr("y2", 170).attr("stroke", "black").attr("stroke-width", 2);
svg.append("line").attr("x1", 175).attr("y1", 180).attr("x2", 150).attr("y2", 185).attr("stroke", "black").attr("stroke-width", 2);
svg.append("line").attr("x1", 225).attr("y1", 175).attr("x2", 250).attr("y2", 170).attr("stroke", "black").attr("stroke-width", 2);
svg.append("line").attr("x1", 225).attr("y1", 180).attr("x2", 250).attr("y2", 185).attr("stroke", "black").attr("stroke-width", 2);

// 🐰 Paws
svg.append("circle").attr("cx", 180).attr("cy", 310).attr("r", 15).attr("fill", "#D9C2A3");
svg.append("circle").attr("cx", 220).attr("cy", 310).attr("r", 15).attr("fill", "#D9C2A3");

// 🐰 Tail
svg.append("circle").attr("cx", 250).attr("cy", 270).attr("r", 10).attr("fill", "#E6DACB");

// // ❤️ Heart (Floating Effect)
// const heart = svg.append("text")
//   .attr("x", 250)
//   .attr("y", 150)
//   .attr("font-size", "24px")
//   .attr("fill", "red")
//   .text("❤️");

// function floatHeart() {
//   heart.transition()
//     .duration(1000)
//     .attr("y", 130)
//     .transition()
//     .duration(1000)
//     .attr("y", 150)
//     .on("end", floatHeart);
// }

// 🏆 Ears Movement Animation
function moveEars() {
  leftEar.transition()
    .duration(500)
    .attr("cy", 90)
    .transition()
    .duration(500)
    .attr("cy", 100);

  rightEar.transition()
    .duration(500)
    .attr("cy", 90)
    .transition()
    .duration(500)
    .attr("cy", 100)
    .on("end", moveEars);
}
moveEars(); // Start ear animation

// 🏆 Blinking Animation (Using setInterval)
setInterval(() => {
  leftEye.attr("r", 1);
  rightEye.attr("r", 1);
  setTimeout(() => {
    leftEye.attr("r", 5);
    rightEye.attr("r", 5);
  }, 200);
}, 3000); // Blink every 3 seconds

const noBtn = document.querySelector(".container .buttons .btn-1");
const yesBtn = document.querySelector(".container .buttons .btn-2");
const title = document.querySelector(".container h1");
const svg2 = document.querySelector("svg");

if (localStorage.getItem("request")) {
    const heart = svg.append("text")
    .attr("x", 250)
    .attr("y", 150)
    .attr("font-size", "24px")
    .attr("fill", "red")
    .text("❤️");

    function floatHeart() {
    heart.transition()
      .duration(1000)
      .attr("y", 130)
      .transition()
      .duration(1000)
      .attr("y", 150)
      .on("end", floatHeart);
    }
    floatHeart();

    title.innerHTML = "Ok, I will Call You";
    svg2.style.cssText = "";
    
    noBtn.remove();
    yesBtn.remove();
}

else {  
  noBtn.addEventListener("mouseover", function () {
    let xAxis = Math.round(Math.random() * 500);
    let yAxis = Math.round(Math.random() * 500);
    noBtn.style.cssText = `transform: translate(-${xAxis}px, -${yAxis}px);`;

    d3.select("svg path")
      .attr("d", "M 195 180 Q 200 180, 205 180");
    
    svg2.style.cssText = "";
  });

  noBtn.addEventListener("click", function () {
    noBtn.remove();
    yesBtn.remove();

    title.innerHTML = "It Wasn't an Option at All";
  });
  
  yesBtn.addEventListener("mouseover", function () {
    d3.select("svg path")
      .attr("d", "M 195 180 Q 200 190, 205 180");
    
    svg2.style.cssText = "animation: rappit .5s infinite ease";
  });
  
  yesBtn.addEventListener("click", function () {
    const heart = svg.append("text")
    .attr("x", 250)
    .attr("y", 150)
    .attr("font-size", "24px")
    .attr("fill", "red")
    .text("❤️");

    function floatHeart() {
    heart.transition()
      .duration(1000)
      .attr("y", 130)
      .transition()
      .duration(1000)
      .attr("y", 150)
      .on("end", floatHeart);
    }
    floatHeart();

    title.innerHTML = "Ok, I will Call You";
    svg2.style.cssText = "";
    
    localStorage.setItem("request", "yes");
    noBtn.remove();
    yesBtn.remove();
  });
}