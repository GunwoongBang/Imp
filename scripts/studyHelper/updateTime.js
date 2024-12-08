function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Add leading zero if needed
    timeElement.textContent = `${hours}:${minutes}`;
}

// Update the time once immediately
updateTime();

// Update the time every minute
setInterval(updateTime, 60000);
