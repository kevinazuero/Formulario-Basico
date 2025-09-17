const form = document.getElementById('registrationForm');
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const contrasenaInput = document.getElementById('contrasena');
const nombreError = document.getElementById('nombreError');
const correoError = document.getElementById('correoError');
const contrasenaError = document.getElementById('contrasenaError');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clearErrors() {
    nombreError.textContent = '';
    correoError.textContent = '';
    contrasenaError.textContent = '';
}

function validateNombre(nombre) {
    if (nombre.trim() === '') {
        nombreError.textContent = 'El nombre es requerido';
        return false;
    }
    if (nombre.trim().length < 2) {
        nombreError.textContent = 'El nombre debe tener al menos 2 caracteres';
        return false;
    }
    nombreError.textContent = '';
    return true;
}

function validateCorreo(correo) {
    if (correo.trim() === '') {
        correoError.textContent = 'El correo es requerido';
        return false;
    }
    if (!emailRegex.test(correo)) {
        correoError.textContent = 'Por favor ingresa un correo válido';
        return false;
    }
    correoError.textContent = '';
    return true;
}

function validateContrasena(contrasena) {
    if (contrasena === '') {
        contrasenaError.textContent = 'La contraseña es requerida';
        return false;
    }
    if (contrasena.length < 8) {
        contrasenaError.textContent = 'La contraseña debe tener mínimo 8 caracteres';
        return false;
    }
    contrasenaError.textContent = '';
    return true;
}

function validateForm() {
    clearErrors();

    const nombre = nombreInput.value;
    const correo = correoInput.value;
    const contrasena = contrasenaInput.value;

    const isNombreValid = validateNombre(nombre);
    const isCorreoValid = validateCorreo(correo);
    const isContrasenaValid = validateContrasena(contrasena);

    return isNombreValid && isCorreoValid && isContrasenaValid;
}

nombreInput.addEventListener('blur', () => validateNombre(nombreInput.value));
nombreInput.addEventListener('input', () => {
    if (nombreError.textContent && validateNombre(nombreInput.value)) {
    }
});

correoInput.addEventListener('blur', () => validateCorreo(correoInput.value));
correoInput.addEventListener('input', () => {
    if (correoError.textContent && validateCorreo(correoInput.value)) {
    }
});

contrasenaInput.addEventListener('blur', () => validateContrasena(contrasenaInput.value));
contrasenaInput.addEventListener('input', () => {
    if (contrasenaError.textContent && validateContrasena(contrasenaInput.value)) {
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (validateForm()) {
        alert('¡Registro exitoso! Todos los datos son válidos.');
        form.reset();
        clearErrors();
    } else {
        alert('Por favor corrige los errores en el formulario.');
    }
});