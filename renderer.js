const fs = require('fs');
const Title = require('./game/title');
let gameCanvas = document.querySelector("#gameCanvas");
let game = new ex.Engine({
    canvasElementId: 'gameCanvas',
    displayMode: 'container'
});
const titleScreen = new Title(game);

game.start().then(() => {
    titleScreen.initTitleScreen();
    titleScreen.toTitleScreen();
    let ball = new ex.Actor(150, 50, 50, 50);
    ball.color = ex.Color.Blue
    game.add(ball);
});