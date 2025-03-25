document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('register-button');
    const modal = document.getElementById('registro-modal');
    const closeBtn = modal.querySelector('.close');

    registerButton.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});