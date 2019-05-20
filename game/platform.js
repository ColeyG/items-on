class Platform extends ex.Actor {
  constructor(game, x, y, width, height) {
    super(x, y, width, height);
    this.game = game;
    this.game = game;
    this.x = x;
    this.y = y;
    this.velX = 0;
    this.velY = 0;
    this.collisionType = ex.CollisionType.Fixed;
  }
}

module.exports = Platform;
