bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    uarterteke = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    basic.showString(uarterteke)
    if (uarterteke.includes("5")) {
        bluetooth.uartWriteString("OK")
    }
    if (uarterteke.includes("8")) {
        ajto = !(ajto)
    }
    if (uarterteke.includes("2")) {
        mozg = 1000
    }
    if (uarterteke.includes("3")) {
        control.reset()
    }
})
function szirena () {
    music.setTempo(60)
    bluetooth.uartWriteLine("Szire'na!")
    while (true) {
        music.ringTone(988)
        music.rest(music.beat(BeatFraction.Whole))
        music.ringTone(784)
        music.rest(music.beat(BeatFraction.Whole))
    }
}
let ajto = false
let uarterteke = ""
let mozg = 0
mozg = 20000
basic.forever(function () {
    bluetooth.startUartService()
    if (ajto && input.pinIsPressed(TouchPin.P1)) {
        bluetooth.uartWriteString("Ajto'!")
        szirena()
    }
    if (mozg < input.acceleration(Dimension.Strength)) {
        bluetooth.uartWriteString("Mozga's!")
        szirena()
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        bluetooth.uartWriteString("Sze'f!")
        szirena()
    }
})
