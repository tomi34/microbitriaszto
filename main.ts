bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    uarterteke = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (uarterteke.includes("5")) {
        bluetooth.uartWriteString("OK")
    }
    if (uarterteke.includes("8")) {
        ajto = !(ajto)
    }
    if (uarterteke.includes("2")) {
        mozg = 2000
    }
    if (uarterteke.includes("3")) {
        control.reset()
    }
    basic.showString(uarterteke)
})
function szirena () {
    while (!(uarterteke.includes("0"))) {
        music.ringTone(988)
        basic.pause(1000)
        music.ringTone(784)
        basic.pause(1000)
        music.stopMelody(MelodyStopOptions.All)
    }
}
let ajto = false
let uarterteke = ""
let mozg = 0
mozg = 22020000
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
