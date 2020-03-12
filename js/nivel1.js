// JavaScript source code
function level1() {
        var level_1 = document.getElementById("contra").value;
        var contra = document.getElementById("lvl1");
        contra.classList.remove('alert-success','alert-secondary','alert-danger');
        contra.classList.add('alert');
        if (level_1 == "abc123") {
            contra.classList.add('alert-success');
            contra.innerHTML='<strong>Correcto!</strong> Puedes acceder al siguiente nivel! :D';
        }
        else if (level_1 == "") {
            contra.classList.add('alert-secondary');
            contra.innerHTML='<strong>Vacío!</strong> Ingrese una contraseña.';
        }
        else  {
            contra.classList.add('alert-danger');
            contra.innerHTML='<strong>Incorrecto!</strong> Intentelo de nuevo :C';}
            
    }