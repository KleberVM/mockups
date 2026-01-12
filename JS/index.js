
//Cierra el modal de registro estudiante tutor
document.addEventListener('DOMContentLoaded', function() {
    const registroModal = document.getElementById('registro-modal');
    const closeRegistroBtn = registroModal.querySelector('.close');

    // Close modal when clicking the "X"
    closeRegistroBtn.addEventListener('click', () => {
        registroModal.style.display = 'none';
    });

    // Optional: Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === registroModal) {
            registroModal.style.display = 'none';
        }
    });
});