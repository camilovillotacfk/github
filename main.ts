input.onButtonPressed(Button.A, function () {
    niños += 1
    basic.showNumber(niños)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    total = niñas + niños
    basic.showNumber(total)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    niñas += 1
    basic.showNumber(niñas)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    niñas = 0
    niños = 0
    total = 0
})
let niñas = 0
let total = 0
let niños = 0
basic.showString("Hello!")
