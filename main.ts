input.onButtonPressed(Button.A, function () {
    serial.writeNumbers([0, 1])
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY, function () {
	
})
basic.forever(function () {
	
})
