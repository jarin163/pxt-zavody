let startTime = 0;
let stopTime = 0;

input.onButtonPressed(Button.A, function () {
    startTime = control.millis();
    basic.showString("GO!");
});

input.onButtonPressed(Button.B, function () {
    stopTime = control.millis();
    let elapsedTime = stopTime - startTime;
    basic.showNumber(elapsedTime);
});

input.onButtonPressed(Button.AB, function () {
    startTime = 0;
    stopTime = 0;
    basic.clearScreen();
});

