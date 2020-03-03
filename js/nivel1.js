// JavaScript source code
function level1() {
    {
        var contra = document.getElementById("contra").value;
        if (contra == "abc123") {
            alert("Contraseña Correcta!. Avance al siguiente nivel.")
        } else if (contra=="") {
            alert("No ha ingresado ninguna contraseña.")
        } else {
            alert("Contraseña Invalida. Por favor, Intentelo de nuevo.")
        }
    }
}