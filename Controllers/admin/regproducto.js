import {userstate, Addproducto}from "../../Controllers/conecction.js"
userstate()

const save = document.getElementById('btnregister')
const retornar =document.getElementById('btnreturn')


async function registrar() {
    const cod = document.getElementById('edtcodigo').value;
    const name = document.getElementById('edtname').value;
    const desc = document.getElementById('edtdesc').value;
    const cant = document.getElementById('edtcantidad').value;
    
    // Validaciones de campos vacíos
    if (!cod || !name || !desc || !cant) 
    {
        alert("Todos los campos son obligatorios.");
        return; // Si algún campo está vacío, no continúa el proceso
    }
    try {

        // Intentar registrar el producto
        const validar = await Addproducto(cod, name, desc, cant);
        // Mostrar mensaje de éxito
        alert('El producto se registró exitosamente.');

        // Redirigir solo si el registro fue exitoso
        window.location.href = "../Admin/regproductos.html";
    } catch (error) {
        // Manejo de errores
        alert('Registro fallido. Inténtalo nuevamente.');
        console.error("Error al registrar el producto: ", error);
    }
}

// Evento para ejecutar la función al hacer clic en el botón de registro
window.addEventListener('DOMContentLoaded', async () => {
    save.addEventListener('click', registrar);
    });
window.addEventListener('DOMContentLoaded', async () => {
    retornar.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado
        window.history.back();   // Regresa a la página anterior en el historial
        });
    });