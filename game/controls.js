class Controls extends ex.Actor {
    constructor(player, game) {
        super();
        this.player = player;
        this.game = game;
    }
    update(engine, delta) {
        ex.Actor.prototype.update.call(this, engine, delta);
        if (engine.input.keyboard.wasPressed(ex.Input.Keys.W)) {
            console.log('bing');
        }
    }
}

module.exports = Controls;