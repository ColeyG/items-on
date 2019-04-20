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
        this.speed = 0;
    }
    update(engine, delta) {
        ex.Actor.prototype.update.call(this, engine, delta);

        if (this.speed > 10) {
            this.speed = 10;
        }

        if (!engine.input.keyboard.isHeld(ex.Input.Keys.A) && !engine.input.keyboard.isHeld(ex.Input.Keys.D)) {
            this.speed = 0;
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.A) && engine.input.keyboard.isHeld(ex.Input.Keys.D)) {
            this.speed = 0;
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.W)) {
            this.velY = -5;
        }
        if (engine.input.keyboard.isHeld(ex.Input.Keys.A) || engine.input.keyboard.isHeld(ex.Input.Keys.D)) {
            this.speed = this.speed + 0.25;
        }
        if (engine.input.keyboard.isHeld(ex.Input.Keys.A)) {
            this.x = this.x - this.speed;
        }
        if (engine.input.keyboard.isHeld(ex.Input.Keys.D)) {
            this.x = this.x + this.speed;
        }

        if (this.velY > 0) {
            console.log('fired');
            this.velY = 35;
        }

        this.on('precollision', () => {
            this.velY = 0;
        })

        this.y = this.y + this.velY;
    }
}

module.exports = Player;