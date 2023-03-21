input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola que tal?")
})
input.onSound(DetectedSound.Loud, function () {
    radio.sendString("Bien")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
input.setSoundThreshold(SoundThreshold.Loud, 191)
