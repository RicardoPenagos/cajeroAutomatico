//========================== Cerra sesión =====================================

const $btnCerrarSesion = document.querySelector('#btnCerrarSesion');

function cerrarSesion(){
  localStorage.clear();
  swal(`Cerrando Sesión`, "Se le redirigirá al login", "info").then((value) => {
      window.location.assign("login.html");
  });
  
}


//========================== Atrás =====================================

const $btnAtras = document.querySelector('#btnAtras');

function atras(){
    window.location.assign("index.html");
}


//======================== Eventos ====================

$btnCerrarSesion.addEventListener('click', cerrarSesion);
$btnAtras.addEventListener('click', atras);
