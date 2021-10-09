namespace SpriteKind {
    export const Veggie = SpriteKind.create()
    export const Sprout = SpriteKind.create()
}
function rabbitGoAfterSprout () {
    sprouts = sprites.allOfKind(SpriteKind.Sprout)
    if (targetSprout == null || targetSprout.kind() == SpriteKind.Veggie) {
        if (sprouts.length > 0) {
            sproutIndex = randint(0, sprouts.length - 1)
            targetSprout = sprouts[sproutIndex]
            targetSprout.say("Save me!")
            rabbit.follow(targetSprout, 50)
        }
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Sprout, function (enemy, theSprout) {
    info.player2.changeScoreBy(1)
    theSprout.setKind(SpriteKind.Veggie)
    turnSproutToVeggie(theSprout, rabbit)
    if (info.player2.score() == 10) {
        game.showLongText("Sierra: Oh no! It's game over and I can't do anything about it!", DialogLayout.Bottom)
        game.showLongText("Rabbit: Yay! I won!", DialogLayout.Bottom)
        game.over(false, effects.smiles)
    }
})
function turnSproutToVeggie (theSprout: Sprite, whoToFollow: Sprite) {
    veggieIndex = randint(0, veggies.length - 1)
    veggieImg = veggies[veggieIndex]
    theSprout.setImage(veggieImg)
    theSprout.say("")
    theSprout.follow(whoToFollow)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    game.showLongText("Sierra: Oh no! It's game over and I can't do anything about it!", DialogLayout.Bottom)
    game.showLongText("Rabbit: Yay! I won!", DialogLayout.Bottom)
    game.over(false, effects.smiles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sprout, function (hero, theSprout) {
    info.player1.changeScoreBy(1)
    theSprout.setKind(SpriteKind.Veggie)
    turnSproutToVeggie(theSprout, hero)
    if (info.player1.score() == 10) {
        game.showLongText("Rabbit: NOOO!!!", DialogLayout.Bottom)
        game.showLongText("Sierra: Yay! I saved the farm!", DialogLayout.Bottom)
        game.over(true)
    }
})
let groundTile: tiles.Location = null
let groundIndex = 0
let sprout: Sprite = null
let veggieImg: Image = null
let veggieIndex = 0
let sproutIndex = 0
let targetSprout: Sprite = null
let sprouts: Sprite[] = []
let rabbit: Sprite = null
let veggies: Image[] = []
let veggieImg2 = null
let veggieIndex2 = 0
let veggieImg3 = null
let veggieIndex3 = 0
let msg = `Hi! I'm Sierra. This time, I
need help defending this farm from a ninja
rabbit. Like always,  use the arrow keys to
move me and touch the sprouts to give me 
points. If I get ten points, I win. But if
the rabbit gets ten points, I lose. Good luck!`
veggies = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 . . 6 6 6 6 . . 
    . . . . . . 6 6 6 6 6 7 7 6 . . 
    . . . . . 6 7 7 6 6 7 7 7 6 . . 
    . . . . . 6 7 7 6 7 7 6 6 6 . . 
    . . 6 6 6 6 7 7 7 7 7 6 6 . . . 
    . . 6 7 7 6 7 7 7 7 7 7 6 6 . . 
    . . 6 7 7 7 7 7 7 7 7 7 6 6 . . 
    . . 6 6 7 7 7 7 7 7 7 6 6 6 . . 
    . . . 6 6 6 6 6 7 7 6 6 . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 7 1 . . . . . . 
    . . . . . . . 7 1 7 . . . . . . 
    . . . . . . . e . e . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . . 7 . 7 7 
    . . . . . . . . . 4 4 4 4 . . 7 
    . . . . . . . . 4 4 4 4 4 . . . 
    . . . . . . . . 4 4 4 4 e . . . 
    . . . . . . . 4 4 4 4 e . . . . 
    . . . . . . 4 4 4 4 e . . . . . 
    . . . . . 4 4 4 e e . . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . . 4 4 4 e . . . . . . . . 
    . . . . 4 4 e . . . . . . . . . 
    . . . 4 e . . . . . . . . . . . 
    . . 4 4 . . . . . . . . . . . . 
    . . 4 e . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 6 6 6 6 . . . . 
    . . . . . . 6 6 7 7 7 6 6 . . . 
    . . . . . 6 7 7 7 6 7 7 6 . . . 
    . . . . 6 7 7 6 6 6 6 7 6 . . . 
    . . . 6 6 7 7 6 7 7 6 7 6 . . . 
    . . . 6 7 7 6 6 7 7 6 7 . . . . 
    . . . 6 7 6 6 7 7 6 6 6 . . . . 
    . . . 6 7 6 7 7 6 6 7 6 . . . . 
    . . . 6 7 6 7 6 7 7 6 . . . . . 
    . . . 6 7 6 6 7 7 6 6 . . . . . 
    . . . . 6 7 7 6 6 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 7 7 . . . . . 
    . . . . . e e e e 7 e e e e . . 
    . . . . e e e e e e e e e e e . 
    . . . e e e d e e e e e e e e . 
    . . . e e e e e e e e e e e b . 
    . . e e e e e e e e e e e b b . 
    . . e e e e e e e e e e b b . . 
    . . e e f e e e e e e e b b . . 
    . . e e e e e e e e e b b . . . 
    . . e e e e e e d e b b . . . . 
    . . . . e b b b b b b . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . 7 . . . . 
    . . . . . . . 7 7 . 7 7 . . . . 
    . . . . . . . . 7 7 7 7 . . . . 
    . . . . . . . . . 7 7 . . . . . 
    . . . . . 4 4 2 2 7 4 2 2 . . . 
    . . . . 4 4 2 2 2 4 2 2 2 . . . 
    . . . . 4 4 2 2 4 2 2 2 2 . . . 
    . . . . 4 4 2 2 4 2 2 2 2 . . . 
    . . . . 2 4 2 2 4 2 2 2 2 . . . 
    . . . . 2 4 2 2 4 2 2 2 2 . . . 
    . . . . . 4 2 2 4 2 2 2 2 . . . 
    . . . . . 4 2 2 4 2 2 2 2 . . . 
    . . . . . 4 4 2 4 2 2 2 2 . . . 
    . . . . . . 4 2 4 4 2 2 2 . . . 
    . . . . . . 4 4 2 4 4 2 . . . . 
    . . . . . . . 4 2 2 . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 5 5 5 5 . . . . 
    . . . . . . 5 5 5 d 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 d 5 5 5 5 4 4 4 . . . 
    . . . . 5 5 5 5 4 4 4 . . . . . 
    . . . . 5 5 5 4 . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 d . . . 
    . . . 5 5 5 5 5 5 5 d d 5 5 . . 
    . . . 5 5 d d 5 5 5 5 5 5 5 . . 
    . . 5 5 5 d 5 5 5 d 5 5 5 4 . . 
    . . 5 5 5 5 5 5 5 5 5 5 4 4 . . 
    . . 5 5 5 d 5 5 d 5 5 4 4 . . . 
    . . 4 4 4 5 5 5 5 5 4 4 . . . . 
    . . . . 4 4 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 7 7 7 . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . c c c a a a . . . . . 
    . . . . . a a a a a a . . . . . 
    . . . . a a a a a a a a . . . . 
    . . . . c a a a a a a a . . . . 
    . . . . c a a a a a a a . . . . 
    . . . . c c a a a a a a . . . . 
    . . . . . c a a a a a a . . . . 
    . . . . . c c a a a a a . . . . 
    . . . . . . c c a a a a . . . . 
    . . . . . . a c c c . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
let sproutImg = img`
    . . . . 
    . 7 . 7 
    7 7 7 7 
    . 7 7 . 
    `
let sierra = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
sierra.z = 10
rabbit = sprites.create(img`
    . . . . . . b . . b b . . . . . 
    . . . . . b b . . b . . . . . . 
    . . . . . b 3 . b b . . . . . . 
    . . . . . b 3 . b 3 . . . . . . 
    . . . . . b 3 . b 3 . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 2 f f 2 . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . 7 b 7 7 7 . . . . . . 
    . . . . . . b b 7 . . . . . . . 
    . . . . 1 1 7 b b 1 1 . . . . . 
    . . . . 1 . 7 7 b . 1 . . . . . 
    . . . . . . 7 7 b . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    `, SpriteKind.Enemy)
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`normal`)
controller.moveSprite(sierra)
scene.cameraFollowSprite(sierra)
info.player1.setScore(0)
info.player2.setScore(0)
game.showLongText(msg, DialogLayout.Full)
let availableFieldTiles = tiles.getTilesByType(assets.tile`tile1`)
game.onUpdateInterval(1000, function () {
    if (availableFieldTiles.length > 0) {
        sprout = sprites.create(sproutImg, SpriteKind.Sprout)
        groundIndex = randint(0, availableFieldTiles.length - 1)
        groundTile = availableFieldTiles[groundIndex]
        tiles.placeOnTile(sprout, groundTile)
        availableFieldTiles.removeAt(groundIndex)
        rabbitGoAfterSprout()
    }
})
