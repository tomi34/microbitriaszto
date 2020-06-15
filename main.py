def on_uart_data_received():
    global uarterteke, ajto, mozg
    uarterteke = bluetooth.uart_read_until(serial.delimiters(Delimiters.NEW_LINE))
    basic.show_string(uarterteke)
    if uarterteke.includes("5"):
        bluetooth.uart_write_string("OK")
    if uarterteke.includes("8"):
        ajto = not (ajto)
    if uarterteke.includes("2"):
        mozg = 1000
    if uarterteke.includes("3"):
        control.reset()
bluetooth.on_uart_data_received(serial.delimiters(Delimiters.NEW_LINE),
    on_uart_data_received)

def szirena():
    music.set_tempo(60)
    bluetooth.uart_write_line("Szire'na!")
    while True:
        music.ring_tone(988)
        music.rest(music.beat(BeatFraction.WHOLE))
        music.ring_tone(784)
        music.rest(music.beat(BeatFraction.WHOLE))
ajto = False
uarterteke = ""
mozg = 0
mozg = 20000

def on_forever():
    bluetooth.start_uart_service()
    if ajto and input.pin_is_pressed(TouchPin.P1):
        bluetooth.uart_write_string("Ajto'!")
        szirena()
    if mozg < input.acceleration(Dimension.STRENGTH):
        bluetooth.uart_write_string("Mozga's!")
        szirena()
    if input.pin_is_pressed(TouchPin.P2):
        bluetooth.uart_write_string("Sze'f!")
        szirena()
basic.forever(on_forever)
