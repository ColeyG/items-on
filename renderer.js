const fs = require('fs');

const game = new ex.Engine({
})

var paddle = new ex.Actor(150, game.drawHeight - 40, 200, 20)

paddle.color = ex.Color.Chartreuse
paddle.collisionType = ex.CollisionType.Fixed

game.add(paddle)

game.input.pointers.primary.on('move', function (evt) {
    paddle.pos.x = evt.worldPos.x
})

var ball = new ex.Actor(100, 300, 20, 20)

ball.color = ex.Color.Red

ball.vel.setTo(100, 100)

ball.collisionType = ex.CollisionType.Passive

// On collision remove the brick, bounce the ball
ball.on('precollision', function (ev) {
    if (bricks.indexOf(ev.other) > -1) {
        // kill removes an actor from the current scene
        // therefore it will no longer be drawn or updated
        ev.other.kill()
    }

    // reverse course after any collision
    // intersections are the direction body A has to move to not be clipping body B
    // `ev.intersection` is a vector `normalize()` will make the length of it 1
    // `negate()` flips the direction of the vector
    var intersection = ev.intersection.normalize()

    // The largest component of intersection is our axis to flip
    if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
        ball.vel.x *= -1
    } else {
        ball.vel.y *= -1
    }
})

game.add(ball)

ball.on('postupdate', function () {
    if (this.pos.x < this.getWidth() / 2) {
        this.vel.x *= -1
    }

    if (this.pos.x + this.getWidth() / 2 > game.drawWidth) {
        this.vel.x *= -1
    }

    if (this.pos.y < this.getHeight() / 2) {
        this.vel.y *= -1
    }
})

ball.draw = function (ctx, delta) {
    ctx.fillStyle = this.color.toString()
    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, 10, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
}

var padding = 20 // px
var xoffset = 65 // x-offset
var yoffset = 20 // y-offset
var columns = 5
var rows = 3

var brickColor = [ex.Color.Violet, ex.Color.Orange, ex.Color.Yellow]

// Individual brick width with padding factored in
var brickWidth = game.drawWidth / columns - padding - padding / columns // px
var brickHeight = 30 // px
var bricks = []
for (var j = 0; j < rows; j++) {
    for (var i = 0; i < columns; i++) {
        bricks.push(
            new ex.Actor(
                xoffset + i * (brickWidth + padding) + padding,
                yoffset + j * (brickHeight + padding) + padding,
                brickWidth,
                brickHeight,
                brickColor[j % brickColor.length]
            )
        )
    }
}

bricks.forEach(function (brick) {
    // Make sure that bricks can participate in collisions
    brick.collisionType = ex.CollisionType.Active

    // Add the brick to the current scene to be drawn
    game.add(brick)
})

ball.on('exitviewport', function () {
    alert('You lose!')
})

game.start();