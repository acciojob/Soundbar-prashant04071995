//your JS code here. If required.
let audio = null;

function playSound(fileName) {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    audio = new Audio(`sounds/${fileName}`);
    audio.play();
}

function stopSound() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}
