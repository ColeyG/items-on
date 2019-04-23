class LoadQueue {
    constructor(game) {
        this.game = game;
    }
    load() {
        this.testCharTx = new ex.Texture('./assets/test-char-resize.png');
        return [this.testCharTx];
    }
    createSheets() {
        //Test Character Sprite Sheets
        this.testCharSp = new ex.SpriteSheet(this.testCharTx, 10, 1, 80, 128);
        this.testCharRunningRight = this.testCharSp.getAnimationByIndices(this.game, [2, 3, 4, 5, 6, 7, 8], 125);
        this.testCharRunningLeft = this.testCharSp.getAnimationByIndices(this.game, [2, 3, 4, 5, 6, 7, 8], 125);
        this.testCharRunningLeft.flipHorizontal = true;
        this.testCharStanding = this.testCharSp.getAnimationByIndices(this.game, [0], 0);
    }
}

module.exports = LoadQueue;