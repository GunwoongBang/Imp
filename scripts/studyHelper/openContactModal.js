document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.getElementById('contact');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');

    // Open the modal when contact section is clicked
    contactButton.addEventListener('click', () => {
        contactModal.style.bottom = '0'; // Slide the modal up
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', () => {
        contactModal.style.bottom = '-100%'; // Slide the modal down
    });

    // Optional: Close the modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            contactModal.style.bottom = '-100%';
        }
    });
});
