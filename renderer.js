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
const Player = require('./game/controls');
const PlayerOne = new Player('playerOne', game);

game.start().then(() => {
    titleScreen.initTitleScreen();
    titleScreen.toTitleScreen();

    let ball = new ex.Actor(150, 50, 50, 50);
    ball.color = ex.Color.Blue
    game.add(ball);
    matchScreen.initMatchScreen();
    matchScreen.toMatchScreen();

    let ball2 = new ex.Actor(150, 50, 50, 50);
    ball2.color = ex.Color.Red
    game.add(ball2);

    //PlayerOneControls.update(game);
    game.add(PlayerOne);

    if (game.input.keyboard.wasPressed(ex.Input.Keys.R)) {
        console.log('asg');
    }
});