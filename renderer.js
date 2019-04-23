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

//loading assets
var testCharTx = new ex.Texture('./assets/test-char-resize.png');
var loader = new ex.Loader([testCharTx]);

game.start(loader).then(() => {
    titleScreen.initTitleScreen();
    titleScreen.toTitleScreen();

    var testCharSp = new ex.SpriteSheet(testCharTx, 10, 1, 80, 128);
    var testCharRunning = testCharSp.getAnimationByIndices(game, [2, 3, 4, 5, 6, 7, 8], 125);
    var testCharStanding = testCharSp.getAnimationByIndices(game, [0], 0);

    let ball = new ex.Actor(150, 50, 50, 50);
    ball.color = ex.Color.Blue
    game.add(ball);
    matchScreen.initMatchScreen();
    matchScreen.toMatchScreen();

    ex.Physics.acc.setTo(0, 1000);

    playerOne.color = ex.Color.Red;
    playerOne.addDrawing('standing', testCharStanding);
    playerOne.addDrawing('running', testCharRunning);
    game.add(playerOne);
    game.add(ground);
});