window.addEventListener("resize", () => {
    gameCanvas.width = window.innerWidth
    if (window.innerHeight * 1.777 > window.innerWidth) {
        gameCanvas.style.width = window.innerWidth + "px"
        gameCanvas.style.height = window.innerWidth / 1.777 + "px"
    } else {
        gameCanvas.style.height = window.innerHeight + "px"
        gameCanvas.style.width = window.innerHeight * 1.777 + "px"
    }
});

gameCanvas.width = window.innerWidth
if (window.innerHeight * 1.777 > window.innerWidth) {
    gameCanvas.style.width = window.innerWidth + "px"
    gameCanvas.style.height = window.innerWidth / 1.777 + "px"
} else {
    gameCanvas.style.height = window.innerHeight + "px"
    gameCanvas.style.width = window.innerHeight * 1.777 + "px"
}