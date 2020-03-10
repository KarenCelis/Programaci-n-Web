function validar_contrasena(contrasena) {

    if (contrasena.length >= 8) {
        var mayuscula = false;
        var minuscula = false;
        var numero = false;
        var caracter_raro = false;

        for (var i = 0; i < contrasena.length; i++) {
            if (contrasena.charCodeAt(i) >= 65 && contrasena.charCodeAt(i) <= 90) {
                mayuscula = true;
            } else if (contrasena.charCodeAt(i) >= 97 && contrasena.charCodeAt(i) <= 122) {
                minuscula = true;
            } else if (contrasena.charCodeAt(i) >= 48 && contrasena.charCodeAt(i) <= 57) {
                numero = true;
            } else {
                caracter_raro = true;
            }
        }
        if (mayuscula == true && minuscula == true && caracter_raro == true && numero == true) {
            return true;
        }
    }
    return false;
}

function validarRegistro() {
    debugger

    var nombreC = document.forms["registro"]["nombresCompletos"].value
    var tipoDocumento = document.forms["registro"]["tipoDocumento"].value
        // alert(tipoDocumento)
    var numDocumento = document.forms["registro"]["numeroDocumento"].value
    var genero = document.forms["registro"]["genero"].value
        // alert(genero)
    var fechaNacimiento = document.forms["registro"]["fechaNacimiento"].value
    var telefonoCelular = document.forms["registro"]["telefonoCelular"].value
    var telefonoFijo = document.forms["registro"]["telefonoFijo"].value
    var correo = document.forms["registro"]["email"].value
    var contrasena = document.forms["registro"]["contrasena"].value
    var contrasenaR = document.forms["registro"]["contrasenaR"].value

    var isCheck = document.forms["registro"]["chekTerCon"].checked


    if (localStorage.getItem(correo) == null) {

        var usuario = {
            'nombre': nombreC,
            'tipoDocumento': tipoDocumento,
            'numDocumento': numDocumento,
            'genero': genero,
            'fechaNacimiento': fechaNacimiento,
            'telefonoCelular': telefonoCelular,
            'telefonoFijo': telefonoFijo,
            'correo': correo,
            'contrasena': contrasena

        }


        // Aqui van las VALIDACIONES
        var contr = validar_contrasena(contrasena)
        if (contrasena != contrasenaR || contr == false || isCheck == false) {
            alert("Inconsistencia en el ingreso de los datos")
            return false;

        } else {

            ocalUser = JSON.stringify(usuario)

            localStorage.setItem(correo, localUser)

            return true;

        }



    } else {
        alert("Este usuario ya se encuentra en nuestro sistema")
        return false


    }


}