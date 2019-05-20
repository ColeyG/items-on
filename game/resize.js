let gameCanvas = document.querySelector("#gameCanvas");

function resize() {
  if (window.innerHeight * 1.7778 > window.innerWidth) {
    let gameSizeCoefficent = window.innerWidth / 1920;
    gameCanvas.style.transform = "scale(" + gameSizeCoefficent + ")";
    gameCanvas.style.marginTop =
      (window.innerHeight - gameCanvas.offsetHeight * gameSizeCoefficent) / 2 +
      "px";
    gameCanvas.style.marginLeft = "0px";
  } else {
    let gameSizeCoefficent = window.innerHeight / 1080;
    gameCanvas.style.transform = "scale(" + gameSizeCoefficent + ")";
    gameCanvas.style.marginLeft =
      (window.innerWidth - gameCanvas.offsetWidth * gameSizeCoefficent) / 2 +
      "px";
    gameCanvas.style.marginTop = "0px";
  }
}

window.addEventListener("resize", resize);

resize();
