basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) || (input.pinIsPressed(TouchPin.P1) || input.pinIsPressed(TouchPin.P2))) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.clearScreen()
    }
})
