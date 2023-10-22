/* 
****************************************************************************************
***  Blanqueo de variables y verifica que el navegador pueda utilizar local storage  ***
****************************************************************************************
 */

var objetoClientes = [];

if (typeof (Storage) == "undefined") {
    alert("SIN SOPORTE del navegador");
}

if (localStorage.getItem("clientes") !== null){
    /* existe el archivo */
    var objetoClientes = JSON.parse(localStorage.getItem("clientes"));

    for (var i = 0; i < objetoClientes.length; i++) {
        var objetoPersona = objetoClientes[i];
    }
}


function graboDatos() {
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


/* FIN DE LA GRABACION DEL OBJETO */

window.alert(" GRACIAS POR REGISTRARSE ");  //  ventana emergente para avisar que se registro

window.location.assign("index.html");       // vuelvo al home

}