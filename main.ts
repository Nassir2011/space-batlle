let jet = sprites.create(img`
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
jet.setFlag(SpriteFlag.StayInScreen, true)
forever(function () {
	
})
