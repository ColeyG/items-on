class Match {
    constructor(game) {
        this.game = game;
    }
    initMatchScreen() {
        let matchScreen = new ex.Scene();
        this.game.add('matchScreen', matchScreen);
        console.log('initialized');
    }
    toMatchScreen() {
        this.game.goToScene('matchScreen');
        console.log('went to');
    }
}

module.exports = Match;