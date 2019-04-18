const fs = require('fs');

let gameCanvas = document.querySelector("#gameCanvas");
let game = new ex.Engine({
    canvasElementId: 'gameCanvas',
    displayMode: 'container'
});

const Title = require('./game/title');
const titleScreen = new Title(game);
const Match = require('./game/match');
const matchScreen = new Match(game);
const Player = require('./game/player');
let playerOne = new Player('1', game, 400, 400);

game.start().then(() => {
    titleScreen.initTitleScreen();
    titleScreen.toTitleScreen();

    let ball = new ex.Actor(150, 50, 50, 50);
    ball.color = ex.Color.Blue
    game.add(ball);
    matchScreen.initMatchScreen();
    matchScreen.toMatchScreen();

    playerOne.color = ex.Color.Red;
    game.add(playerOne);
});