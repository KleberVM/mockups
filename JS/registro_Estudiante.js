document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get all required fields
        const nombre = document.getElementById('nombre').value.trim();
        const apellidoPaterno = document.getElementById('apellidoPaterno').value.trim();
        const apellidoMaterno = document.getElementById('apellidoMaterno').value.trim();
        const email = document.getElementById('email').value.trim();
        const ci = document.getElementById('ci').value.trim();
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate all fields
        if (nombre.length < 3) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre debe tener al menos 3 caracteres'
            });
            return;
        }

        if (apellidoPaterno.length < 3) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El apellido paterno debe tener al menos 3 caracteres'
            });
            return;
        }

        if (apellidoMaterno.length < 3) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El apellido materno debe tener al menos 3 caracteres'
            });
            return;
        }

        if (ci.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El carnet de identidad debe tener al menos 6 caracteres'
            });
            return;
        }

        if (!fechaNacimiento) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La fecha de nacimiento es requerida'
            });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese un correo electrónico válido'
            });
            return;
        }

        // Password validation
        if (password.length < 8) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La contraseña debe tener al menos 8 caracteres'
            });
            return;
        }

        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Las contraseñas no coinciden'
            });
            return;
        }

        // If all validations pass
        Swal.fire({
            icon: 'success',
            title: '¡Registro Exitoso!',
            text: 'Tu cuenta ha sido creada correctamente',
            showConfirmButton: false,
            timer: 2000
        }).then(() => {
            // Redirect to dashboard
            window.location.href = 'dashboard_Estudiante.html';
        });
    });
});