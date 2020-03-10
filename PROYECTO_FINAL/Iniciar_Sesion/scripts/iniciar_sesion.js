function validarInicio() {
    var correo = document.forms["inicioS"]["email"].value
    var contrasena = document.forms["inicioS"]["contrasena"].value
        //Est es para el inicio de sesion
    if (localStorage.getItem(correo) != null) {
        /**
         * Para iniciar sesión buscamos el objeto respectivo al formCorreo / o usuario
         * usamos localStorage.getItem(key) para obtener el valor de esa clave
         */
        var localUser = localStorage.getItem(correo)
            /**
             * Luego hacemos la operación inversa para convertir una cadena de texto a un objeto
             */
        var usuario = JSON.parse(localUser)

        /**
         * Y finalmente podemos validar la entrada del usuario con lo almacenado en el storage
         */
        //alert(usuario.contrasena)
        if (usuario.contrasena == contrasena) {
            return true
        } else {
            alert("Usuario o Cantraseña Incorrecto")
            return false;

        }
    }
}