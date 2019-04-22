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
        this.xAcceleration = 1500;
        this.jumpHeight = 600;
        this.fastFall = 600;
        this.jumpState = false;
        this.maxVel = 1000;
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
            this.velX = this.velX - this.xAcceleration * tickSeconds;
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.D)) {
            if (this.velX < 0) { this.velX = 0 }
            this.velX = this.velX + this.xAcceleration * tickSeconds;
        }

        if (!engine.input.keyboard.isHeld(ex.Input.Keys.D) && !engine.input.keyboard.isHeld(ex.Input.Keys.A)) {
            this.velX = this.velX * 0.25;
            if (this.velX > 1) {
                this.velX = 0;
            }
        }

        if (engine.input.keyboard.wasPressed(ex.Input.Keys.W) && this.jumpState == false) {
            this.velY = (-1 * this.jumpHeight);
            this.jumpState = true;
        }

        if (engine.input.keyboard.wasReleased(ex.Input.Keys.W) && this.jumpState == true) {
            this.velY = this.velY / 2;
        }

        if (engine.input.keyboard.wasPressed(ex.Input.Keys.S)) {
            this.velY = this.fastFall;
        }

        if (engine.input.keyboard.wasPressed(ex.Input.Keys.K)) {
            console.log(this);
        }

        this.on('collisionstart', () => {
            this.velY = 0;
            this.jumpState = false;
        })

        this.x = this.x + (this.velX * tickSeconds);
        this.y = this.y + (this.velY * tickSeconds);
    }
}

module.exports = Player;