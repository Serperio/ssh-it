// JavaScript source code
function level1() {
    {
        var contra = document.getElementById("contra").value;
        if (contra == "abc123") {
            alert("Contrase�a Correcta!. Avance al siguiente nivel.")
        } else if (contra=="") {
            alert("No ha ingresado ninguna contrase�a.")
        } else {
            alert("Contrase�a Invalida. Por favor, Intentelo de nuevo.")
        }
    }
}