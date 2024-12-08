document.addEventListener('DOMContentLoaded', () => {
    const applicationButton = document.getElementById('application');
    const applicationModal = document.getElementById('applicationModal');
    const closeApplicationModal = document.getElementById('closeApplicationModal');

    // Open the modal when application section is clicked
    applicationButton.addEventListener('click', () => {
        applicationModal.style.bottom = '0'; // Slide the modal up
    });

    // Close the modal when the close button is clicked
    closeApplicationModal.addEventListener('click', () => {
        applicationModal.style.bottom = '-100%'; // Slide the modal down
    });

    // Optional: Close the modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === applicationModal) {
            applicationModal.style.bottom = '-100%';
        }
    });
});
