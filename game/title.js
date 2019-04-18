class Title {
    constructor(game) {
        this.game = game;
    }
    initTitleScreen() {
        let titleScreen = new ex.Scene();
        this.game.add('titleScreen', titleScreen);
    }
    toTitleScreen() {
        this.game.goToScene('titleScreen');
    }
}

module.exports = Title;