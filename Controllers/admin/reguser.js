import {createuser, everification, userstate}from "../../Controllers/conecction.js"
userstate()

const crear=document.getElementById('btnsave');

function validatePassword(psw) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{}|\\:;"'<>,.?/~`]).{8,}$/;
    return regex.test(psw);
}

// envia el correo de verificacion 
async function register() {


    const email = document.getElementById('edtemail').value;
    const psw = document.getElementById('edtpassword').value;
    const confemail= document.getElementById('edtconfemail').value;
    const confipsw = document.getElementById('edtconf_password').value;

    if (!email || !confemail || !psw || !confipsw   ) {
        alert("Todos los campos son obligatorios.");
        return;
    }
    
        // Validar que el correo y la confirmación coincidan
    if (email !== confemail) {
        errorMsg.textContent = 'Los correos electrónicos no coinciden.';
        return;
    }

    // Validar que la contraseña y la confirmación coincidan
    if (psw !== confipsw) {
        errorMsg.textContent = 'Las contraseñas no coinciden.';
        return;
    }
    
    if (!validatePassword(psw)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, un número y un carácter especial.");
        return;
    }

     


    try {
        
        const userCredential = await createuser(email, psw);
        const user = userCredential.user;


        // Envia el correo de verificación
        await everification();
        alert('El usuario se registró exitosamente. Verifique su correo para continuar.');
        window.location.href = "../Admin/reguser.html";
    } catch (error) {
        // Capturar cualquier error durante el proceso de registro o verificación
        alert(`Error: ${error.message}`);
        console.error(`Código de error: ${error.code}`, error);
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    crear.addEventListener('click', register);
});

//funcion de contraseñas 




