import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function resetPassword() {
  const auth = getAuth();
  const email = document.getElementById('edtemail').value;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Mensaje de éxito: Se envió un correo electrónico de restablecimiento de contraseña
      alert('Se ha enviado un correo electrónico de restablecimiento de contraseña a ' + email);
    })
    .catch((error) => {
      // Manejar errores
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error al enviar el correo electrónico:', errorCode, errorMessage);
      // Mostrar un mensaje de error al usuario
    });
}