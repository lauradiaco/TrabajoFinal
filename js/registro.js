
var objetoClientes = [];
var error = false;

/* 
****************************************************************************************
***                      Valido que los campos no estén vacíos                      ***
****************************************************************************************
 */

function validar() {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let telefono = document.getElementById("telefono");
    let email = document.getElementById("email");
    let usuario = document.getElementById("usuario");
    let psw = document.getElementById("psw");
    

    document.getElementById("validar_nombre").innerHTML = "";
    document.getElementById("validar_apellido").innerHTML = "";
    document.getElementById("validar_telefono").innerHTML = "";
    document.getElementById("validar_email").innerHTML = "";
    document.getElementById("validar_usuario").innerHTML = "";
    document.getElementById("validar_psw").innerHTML = "";


    if (nombre.value == "") {
        document.getElementById("validar_nombre").innerHTML = "Debe completar el Nombre";
        error = true;
        nombre.focus();
        error = true
    }

    if (apellido.value == "") {
        document.getElementById("validar_apellido").innerHTML = "Debe completar el Apellido";
        error = true;
        apellido.focus();
        error = true
    }

    if (telefono.value == "") {
        document.getElementById("validar_telefono").innerHTML = "Debe completar el Telefono";
        error = true;
        telefono.focus();
        error = true
    }

    if (email.value == "") {
        document.getElementById("validar_email").innerHTML = "Debe completar el Mail";
        error = true;
        email.focus();
        error = true
    }

    if (usuario.value == "") {
        document.getElementById("validar_nombre").innerHTML = "Debe completar el Usuario";
        error = true;
        usuario.focus();
        error = true
    }

    if (psw.value == "") {
        document.getElementById("validar_psw").innerHTML = "Debe completar la Clave";
        error = true;
        psw.focus();
        error = true
    }

    if (error == false) {
        window.alert(" GRACIAS POR REGISTRARSE ");  //  ventana emergente para avisar que se registro
        /*graboDatos();*/
        document.getElementById("nombre").value = ""
        document.getElementById("validar_nombre").innerHTML = "";

        document.getElementById("apellido").value = ""
        document.getElementById("validar_apellido").innerHTML = "";

        document.getElementById("telefono").value = ""
        document.getElementById("validar_telefono").innerHTML = "";

        document.getElementById("email").value = ""
        document.getElementById("validar_email").innerHTML = "";

        document.getElementById("usuario").value = ""
        document.getElementById("validar_usuario").innerHTML = "";

        document.getElementById("psw").value = ""
        document.getElementById("validar_psw").innerHTML = "";

    }

    if (error)
            return false;
        else
            return true;
}

 
/* 
****************************************************************************************
***  Blanqueo de variables y verifica que el navegador pueda utilizar local storage  ***
****************************************************************************************


if (error == false) {

    if (typeof (Storage) == "undefined") {
        alert("SIN SOPORTE del navegador");
    }

    if (localStorage.getItem("clientes") !== null){
        /* existe el archivo 
        var objetoClientes = JSON.parse(localStorage.getItem("clientes"));

        for (var i = 0; i < objetoClientes.length; i++) {
            var objetoPersona = objetoClientes[i];
        }
    }



        var cliNombre = document.getElementById("nombre");
        var cliApellido = document.getElementById("apellido");
        var cliTele = document.getElementById("tele");
        var cliMail = document.getElementById("email");
        var cliUsuario = document.getElementById("usuario");
        var cliPsw = document.getElementById("psw");
        var cliDestino = "XXX";    // se llena en OPC "RESERVAS"
        var cliDesde = "11/11/11";      // se llena en OPC "RESERVAS"v
        var cliHasta = "11/11/11";      // se llena en OPC "RESERVAS"
        var cliPax = "0";        // se llena en OPC "RESERVAS"
        var cliPrecio = "0";     // se llena en OPC "RESERVAS"

        //Creando el arreglo con los datos
        var objetoPersona1 = new Object();
        objetoPersona1.nombre = cliNombre.value;
        objetoPersona1.apellido = cliApellido.value;
        objetoPersona1.tele = cliTele.value;
        objetoPersona1.mail = cliMail.value;
        objetoPersona1.usuario = cliUsuario.value;
        objetoPersona1.psw = cliPsw.value;
        objetoPersona1.destino = cliDestino;
        objetoPersona1.desde = cliDesde;
        objetoPersona1.hasta = cliHasta;
        objetoPersona1.pax = cliPax;
        objetoPersona1.precio = cliPrecio;

        objetoClientes.push(objetoPersona1);
        
        localStorage.setItem("clientes", JSON.stringify(objetoClientes));


    /* FIN DE LA GRABACION DEL OBJETO 

    window.alert(" GRACIAS POR REGISTRARSE ");  //  ventana emergente para avisar que se registro

    window.location.assign("index.html");       // vuelvo al home

}

*/