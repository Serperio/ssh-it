// JavaScript source code
function level1() {
    {
        var contra = document.getElementById("contra").value;
        if (contra == "abc123") {
            alert("Contraseņa Correcta!. Avance al siguiente nivel.")
        } else if (contra=="") {
            alert("No ha ingresado ninguna contraseņa.")
        } else {
            alert("Contraseņa Invalida. Por favor, Intentelo de nuevo.")
        }
    }
}