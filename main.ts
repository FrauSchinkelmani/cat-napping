input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (true) {
        basic.showIcon(IconNames.Target)
    } else {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
        basic.clearScreen()
    }
})
let logging = false
logging = false
loops.everyInterval(60000, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("temp", input.temperature()),
        datalogger.createCV("light", input.lightLevel())
        )
    }
})
basic.forever(function () {
	
})
