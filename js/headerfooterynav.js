let encabezado = `
<div class="slider-box">

    <ul>
        <li>
            <img src="img/img1.jpeg" alt="paisaje">
        </li>
        <li>
            <img src="img/img10.jpeg" alt="paisaje">
        </li>
        <li>
            <img src="img/img4.jpeg" alt="paisaje">
        </li>
        <li>
            <img src="img/img3.jpeg" alt="paisaje">
        </li>
    </ul>

</div>
<img class="img-1" src="img/logo-transparente.png" alt="logo"> `

document.querySelector("header").innerHTML = encabezado



pie = `
<div class="logo-footer">
     <img height="150px" src="img/Logo azul.jpeg" alt="logo">
</div>
<div class="social">
    <p><b>&copy;Sitio desarrollado en Codo a Codo
    por: Alejandra Blanco, Laura Diaco y William Chan</b></p>
    <a href="https://api.whatsapp.com/send?phone=1164941199">
    <img width="40" src="img/Whatsapp.jpeg" alt="Whatsapp"></a>
    <a href="https://www.facebook.com/Laura.diaco.98">
  <img width="40" src="img/facebook.jpeg" alt="Facebook"></a>
    <a href="https://www.instagram.com/laura.diaco/">
    <img width="40" src="img/instagram.jpeg" alt="Instagram"></a>
        </div>`

document.querySelector("footer").innerHTML = pie


navegador = ` <ul>
<li><a class="icono" href="index.html">Home</a></li>
<li><a class="icono" href="quienessomos.html">Quienes somos</a></li>
<li><a class="icono" href="registroylogin.html">Registro de Clientes</a></li>
<li><a class="icono" href="destinos.html">Destinos</a></li>
<li><a class="icono" href="contactoysucursales.html">Contacto y Sucursales</a></li>
<li><a class="icono" href="preguntasfrecuentes.html">Preguntas Frecuentes</a></li>
<li><a class="icono" href="paquetes.html">Paquetes</a></li>
<li><a class="icono" href="loginCRUD.html">Admin</a></li>
</ul>`

document.querySelector("nav").innerHTML = navegador