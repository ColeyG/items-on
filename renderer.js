const fs = require('fs');

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
const Platform = require('./game/platform');
let ground = new Platform(game, 1920 / 2, 1060, 1500, 30);
ground.color = ex.Color.LightGray;

game.start().then(() => {
    titleScreen.initTitleScreen();
    titleScreen.toTitleScreen();

    let ball = new ex.Actor(150, 50, 50, 50);
    ball.color = ex.Color.Blue
    game.add(ball);
    matchScreen.initMatchScreen();
    matchScreen.toMatchScreen();

    ex.Physics.acc.setTo(0, 1000);

    playerOne.color = ex.Color.Red;
    game.add(playerOne);
    game.add(ground);
});