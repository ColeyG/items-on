class Title {
    constructor(game) {
        this.game = game;
    }
    initTitleScreen() {
        let titleScreen = new ex.Scene();
        this.game.add('titleScreen', titleScreen);
        console.log('initialized');
    }
    toTitleScreen() {
        game.goToScene('titleScreen');
        console.log('went to');
    }
}

module.exports = Title;