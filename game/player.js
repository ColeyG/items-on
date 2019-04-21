class Player extends ex.Actor {
    constructor(player, game, x, y) {
        super(x, y, 40, 65);
        this.player = player;
        this.game = game;
        this.x = x;
        this.y = y;
        this.velX = 0;
        this.velY = 0;
        this.collisionType = ex.CollisionType.Active;
        this.checkForFastBodies = true;
        this.acceleration = 30;
        this.maxVel = 15;
    }
    update(engine, delta) {
        ex.Actor.prototype.update.call(this, engine, delta);
        let tickSeconds = delta / 1000;

        if (this.velX > this.maxVel) {
            this.velX = this.maxVel;
        } else if (((this.velX) * (-1)) > this.maxVel) {
            this.velX = this.maxVel * (-1);
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.A)) {
            if (this.velX > 0) { this.velX = 0 }
            this.velX = this.velX - this.acceleration * tickSeconds;
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.D)) {
            if (this.velX < 0) { this.velX = 0 }
            this.velX = this.velX + this.acceleration * tickSeconds;
        }

        if (!engine.input.keyboard.isHeld(ex.Input.Keys.D) && !engine.input.keyboard.isHeld(ex.Input.Keys.A)) {
            this.velX = this.velX * 0.25;
            if (this.velX > 1) {
                this.velX = 0;
            }
        }

        this.on('precollision', () => {
            this.velY = 0;
        })

        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
    }
}

module.exports = Player;