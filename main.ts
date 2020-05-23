namespace SpriteKind {
    export const dart = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    laser = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.dart)
    laser = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 9 9 . . . . . . . 
. . . . . . . 9 9 . . . . . . . 
. . . . . . . 9 9 . . . . . . . 
. . . . . . . 9 9 . . . . . . . 
. . . . . . . 9 9 . . . . . . . 
. . . . . . . 9 9 . . . . . . . 
. . . . . . . 9 9 . . . . . . . 
. . . . . . . 9 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, jet, 0, -100)
    laser.setKind(SpriteKind.dart)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.dart, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let asteroid: Sprite = null
let laser: Sprite = null
let jet: Sprite = null
jet = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . . b b b b . . . . . . 
. . . . . . b b b b . . . . . . 
. b b b b b b 9 9 b b b b b b . 
. b . . . . b 9 9 b . . . . b . 
. b . . . . b b b b . . . . b . 
. b . . . . b b b b . . . . b . 
. b . . . . b b b b . . . . b . 
. b . . . . 5 5 5 5 . . . . b . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . 2 . 2 2 . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(jet)
info.setLife(5)
effects.starField.startScreenEffect()
game.onUpdateInterval(500, function () {
    asteroid = sprites.createProjectileFromSide(img`
. . . . . . . . . c c 8 . . . . 
. . . . . . 8 c c c f 8 c c . . 
. . . c c 8 8 f c a f f f c c . 
. . c c c f f f c a a f f c c c 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
. a c a a c f f a a b 8 f f c a 
. . c c b a f f f a b b c c 6 c 
. . . c b b a f f 6 6 a b 6 c . 
. . . c c b b b 6 6 a c c c c . 
. . . . c c a b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, 0, 0)
    asteroid.setKind(SpriteKind.Enemy)
})
forever(function () {
    music.playMelody("D F E A G B C C5 ", 240)
    music.playMelody("B G A F B D E C ", 240)
})
