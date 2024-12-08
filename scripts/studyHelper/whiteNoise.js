const noiseOptions = document.querySelectorAll('.noise-option');
const audio = new Audio();
let currentlyPlaying = null; // To track the currently playing sound

noiseOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Check if the clicked option is already playing
        if (currentlyPlaying === option) {
            audio.pause(); // Pause the audio
            currentlyPlaying.classList.remove('playing'); // Remove the "playing" class
            currentlyPlaying = null; // Reset the currently playing option
        } else {
            // Set the audio source to the selected sound
            audio.src = `${option.dataset.sound}`;
            audio.play();

            // Remove "playing" class from the previously playing option
            if (currentlyPlaying) {
                currentlyPlaying.classList.remove('playing');
            }

            // Add "playing" class to the newly selected option
            option.classList.add('playing');
            currentlyPlaying = option; // Update the currently playing option
        }
    });
});

// Optional: Stop playback when the audio ends and remove the "playing" indicator
audio.addEventListener('ended', () => {
    if (currentlyPlaying) {
        currentlyPlaying.classList.remove('playing');
        currentlyPlaying = null; // Reset the currently playing option
    }
});
