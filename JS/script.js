
        document.addEventListener('DOMContentLoaded', function() {
            // ... existing login modal code ...

            // Registration Modal Functionality
            const registerNowBtn = document.querySelector('.get-started');
            const registerBtn = document.getElementById('register-button');
            const registroModal = document.getElementById('registro-modal');
            const closeRegistroBtn = registroModal.querySelector('.close');

            function showRegistroModal(e) {
                e.preventDefault();
                registroModal.style.display = 'block';
            }

            // Add click event listeners
            registerNowBtn.addEventListener('click', showRegistroModal);
            registerBtn.addEventListener('click', showRegistroModal);

            // Close modal when clicking X
            closeRegistroBtn.addEventListener('click', () => {
                registroModal.style.display = 'none';
            });

            // Close modal when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === registroModal) {
                    registroModal.style.display = 'none';
                }
            });
        });
  