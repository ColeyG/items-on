const fs = require('fs');
const Title = require('./game/title');
const game = new ex.Engine({})
const titleScreen = new Title(game);


titleScreen.initTitleScreen();

game.start();