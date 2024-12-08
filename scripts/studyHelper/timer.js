let timer;
let seconds = 0;
let isRunning = false; // Track whether the timer is running

function startTimer() {
    if (!isRunning) { // Only start the timer if it's not already running
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

function switchButton() {
    let currentVal = document.getElementById("stopButton").innerText;

    if (currentVal == "Stop" && isRunning) {
        currentVal = document.getElementById("stopButton").innerText = "Clear"
    } else {
        currentVal = document.getElementById("stopButton").innerText = "Stop"
    }
}

function stopTimer() {
    if (isRunning) {
        // If the timer is running, stop it
        clearInterval(timer);
        isRunning = false;
    } else {
        // If the timer is not running, reset to 0
        seconds = 0;
        updateDisplay();
    }
}

function updateDisplay() {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    document.querySelector('.time-display').textContent = `${hrs} hours ${mins} min ${secs} sec`;
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', switchButton);
document.querySelector('.stop').addEventListener('click', stopTimer);
