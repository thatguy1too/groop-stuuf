// Turns on alarm.
input.onButtonPressed(Button.AB, function () {
    Armed = On
})
// Turns off alarm.
input.onGesture(Gesture.Shake, function () {
    Armed = Off
})
let Pressure = 0
let Armed = 0
let On = 0
let Off = 0
Off = 0
On = 1
basic.forever(function () {
    // If the alarm is armed and on, it should show the pressure on the screen. 
    while (Armed == On) {
        Pressure = pins.analogReadPin(AnalogPin.P1)
        basic.showNumber(pins.analogReadPin(AnalogPin.P1))
        // If the pin(s) pressure is less than 700, then it will sound the alarm and an LED will turn on.
        if (pins.analogReadPin(AnalogPin.P1) < 700) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            music.playMelody("C5 C C5 C C5 C C5 C ", 120)
        }
        // If the pin reads greater than 700, then nothing happens.
        if (pins.analogReadPin(AnalogPin.P1) > 700) {
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    }
})
