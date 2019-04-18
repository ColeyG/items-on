class Player extends ex.Actor {
    constructor(player, game, x, y) {
        super(x, y, 40, 65);
        this.player = player;
        this.game = game;
        this.x = x;
        this.y = y;
        this.velX = 0;
        this.velY = 0;
    }
    update(engine, delta) {
        ex.Actor.prototype.update.call(this, engine, delta);
        if (engine.input.keyboard.isHeld(ex.Input.Keys.W)) {
            this.velY--;
        }
        if (engine.input.keyboard.isHeld(ex.Input.Keys.A)) {
            this.velX--;
        }
        if (engine.input.keyboard.isHeld(ex.Input.Keys.S)) {
            this.velY++;
        }
        if (engine.input.keyboard.isHeld(ex.Input.Keys.D)) {
            this.velX++;
        }
        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
    }
}

module.exports = Player;