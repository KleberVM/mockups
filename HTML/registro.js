document.addEventListener('DOMContentLoaded', function() {
    // Password visibility toggle
    const togglePassword = document.querySelectorAll('.toggle-password');
    
    togglePassword.forEach(icon => {
        icon.addEventListener('click', function() {
            const input = this.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            } else {
                input.type = 'password';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            }
        });
    });

    // Form validation
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const apellidoPaterno = document.getElementById('apellidoPaterno').value.trim();
        const apellidoMaterno = document.getElementById('apellidoMaterno').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;

        // Validate name fields
        if (nombre.length < 2) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre debe tener al menos 2 caracteres'
            });
            return false;
        }

        if (apellidoPaterno.length < 2) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El apellido paterno debe tener al menos 2 caracteres'
            });
            return false;
        }

        if (apellidoMaterno.length < 2) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El apellido materno debe tener al menos 2 caracteres'
            });
            return false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, ingrese un correo electrónico válido'
            });
            return false;
        }

        // Validate password
        if (password.length < 8) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La contraseña debe tener al menos 8 caracteres'
            });
            return false;
        }

        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Las contraseñas no coinciden'
            });
            return false;
        }

        // Validate terms
        if (!terms) {
            Swal.fire({
                icon: 'warning',
                title: 'Atención',
                text: 'Debe aceptar los términos y condiciones'
            });
            return false;
        }

        // If all validations pass, show success message
        Swal.fire({
            icon: 'success',
            title: '¡Registro Exitoso!',
            text: 'Tu cuenta ha sido creada correctamente',
            showConfirmButton: false,
            timer: 2000
        }).then(() => {
            this.reset();
            // Here you can add redirect logic or additional actions
        });
    });
});