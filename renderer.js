const fs = require("fs");

let game = new ex.Engine({
  canvasElementId: "gameCanvas",
  displayMode: "container"
});

const Title = require("./game/title");
const titleScreen = new Title(game);
const Match = require("./game/match");
const matchScreen = new Match(game);
const Player = require("./game/player");
let playerOne = new Player("1", game, 400, 400);
const Platform = require("./game/platform");
let ground = new Platform(game, 1920 / 2, 1060, 1500, 30);
ground.color = ex.Color.LightGray;

//loading assets
const LoadQueue = require("./asset-loading/load-queue");
const loadedAssets = new LoadQueue(game);
var loader = new ex.Loader(loadedAssets.load());
loader.logo = "./assets/SlimeA.png";
loader.backgroundColor = "red";
loader.startButtonFactory = () => {
  let myButton = document.createElement("button");
  myButton.textContent = "The best button";
  return myButton;
};
loadedAssets.createSheets();

game.start(loader).then(() => {
  titleScreen.initTitleScreen();
  titleScreen.toTitleScreen();

  matchScreen.initMatchScreen();
  matchScreen.toMatchScreen();

  ex.Physics.acc.setTo(0, 1000);

  playerOne.addDrawing("standing", loadedAssets.testCharStanding);
  playerOne.addDrawing("stopping", loadedAssets.testCharStanding);
  playerOne.addDrawing("runningRight", loadedAssets.testCharRunningRight);
  playerOne.addDrawing("runningLeft", loadedAssets.testCharRunningLeft);
  game.add(playerOne);
  game.add(ground);
});
