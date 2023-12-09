
//========================= Corroborar inicio de sesión ===========================
const usuario = JSON.parse(localStorage.getItem('usuario'));

if (usuario === null){
  window.location.assign("login.html");
}
else{
  const $nombreUsuario = document.querySelector('#nombreUsuario');
  $nombreUsuario.innerHTML= `Sesión: <span class="text-pattern">${usuario.nombre}</span>`;
  actualizarSaldo(usuario.saldo - 10);

}


//========================== Cerra sesión =====================================

const $btnCerrarSesion = document.querySelector('#btnCerrarSesion');

function cerrarSesion(){
  localStorage.clear();
  swal(`Cerrando Sesión`, "Se le redirigirá al login", "info").then((value) => {
      window.location.assign("login.html");
  });
  
}

//======================== Consultar saldo ====================

const $btnConsultarSaldo = document.querySelector('#btnConsultarSaldo');

function consultarSaldo() {
  const regex = /(\d+)/g;
  const $saldo = document.querySelector('#saldo');
  const valor = $saldo.textContent.match(regex);
  return parseInt(valor);
}

function actualizarSaldo(valor = 0) {
  const $tarjeta = document.querySelector('#tarjeta');
    $tarjeta.innerHTML = 
  ` <img src="Imagenes/${usuario.nombre}.jpg" class="card-img-top">
    <div class="card-body pt-5 pb-5 text-center">
      <h5 class="card-title">Tú saldo actual es de: </h5>
      <span class="card-text" id="saldo" >$${consultarSaldo() + valor}</span>                      
    </div>`;
  
}

// Preguntar al profe como solucionar esto sin tener que repetir tanto código
function actualizarSaldoBtn() {
  const $tarjeta = document.querySelector('#tarjeta');
    $tarjeta.innerHTML = 
  ` <img src="Imagenes/${usuario.nombre}.jpg" class="card-img-top">
    <div class="card-body pt-5 pb-5 text-center">
      <h5 class="card-title">Tú saldo actual es de: </h5>
      <span class="card-text" id="saldo" >$${consultarSaldo()}</span>                      
    </div>`;
  
}


//======================== Ingresar monto ====================

const $btnIngresarMonto = document.querySelector('#btnIngresarMonto');

function btnIngresarMonto() {
  const $tarjeta = document.querySelector('#tarjeta');
  $tarjeta.innerHTML =
    `<img src="Imagenes/${usuario.nombre}.jpg" class="card-img-top">
    <div class="card-body pt-5 pb-5 text-center">
      <h5 class="card-title mb-4">Ingresa el monto que quieras agregar</h5>
      <span class="card-text" id="saldo" style="display:none">$${consultarSaldo()}</span>
      <section class="container">
        <form id="formIngresoMonto" class=" mt-3">
            <div class="form-floating">
                <div class="input-group">
                    <span class="input-group-text">$</span>
                    <input type="number" id="input-saldo" class="form-control"> 
                  </div>
            <button id="btnAceptarMonto" type="button" class="btn btn-primary w-100 mt-3" onclick="ingresarSaldo()">Aceptar</button>
          </form>
      </section>
    </div>`;
}

function ingresarSaldo() {
  const inputSaldo = Number(document.querySelector('#input-saldo').value);
  const saldoFinal = consultarSaldo() + inputSaldo;

  if (inputSaldo <= 990 && consultarSaldo()+inputSaldo <= 990) {
    swal(`Monto ingresado = ${inputSaldo}`, `Nuevo saldo en cuenta = ${saldoFinal}`, "success");
    actualizarSaldo(inputSaldo);
  }
  else {
    swal(`Operación incorrecta`, `Tu saldo actual excedería el límite de 990 pesos por $${saldoFinal - 990}`, "error");
  }
}



//======================== Retirar monto ====================

const $btnRetirarMonto = document.querySelector('#btnRetirarMonto');

function btnRetirarMonto() {
  const $tarjeta = document.querySelector('#tarjeta');
  $tarjeta.innerHTML =
    `<img src="Imagenes/${usuario.nombre}.jpg" class="card-img-top">
    <div class="card-body pt-5 pb-5 text-center">
      <h5 class="card-title mb-4">Ingresa el monto que requieras retirar</h5>
      <span class="card-text" id="saldo" style="display:none">$${consultarSaldo()}</span>
      <section class="container">
        <form id="formIngresoMonto" class=" mt-3">
            <div class="form-floating">
                <div class="input-group">
                    <span class="input-group-text">$</span>
                    <input type="number" id="input-saldo" class="form-control"> 
                  </div>
            <button id="btnAceptarMonto" type="button" class="btn btn-danger w-100 mt-3" onclick="retirarSaldo()">Aceptar</button>
          </form>
      </section>
    </div>`;
}

function retirarSaldo() {
  const inputSaldo = Number(document.querySelector('#input-saldo').value);
  const saldoFinal = consultarSaldo() - inputSaldo;

  if (consultarSaldo()-inputSaldo >= 10) {
    swal(`Monto ingresado = ${inputSaldo}`, `Nuevo saldo en cuenta = ${saldoFinal}`, "success");
    actualizarSaldo(-inputSaldo);
  }
  else {
    swal(`Operación incorrecta`, `Tu saldo actual excedería el límite de 10 pesos por $${10 - saldoFinal}`, "error");
  }
}

//============================ Botón donar todo ======================

const $btnDonar = document.querySelector('#btnDonar');

function donar(){
  localStorage.setItem('usuario', JSON.stringify({nombre: usuario.nombre, password: usuario.password, saldo: 10}));
  window.location.assign('donacion.html');
  
}

//============================ Botón donar todo al Banco ======================

const $btnDonarBanco = document.querySelector('#btnDonarBanco');

function donarBanco(){
  localStorage.setItem('usuario', JSON.stringify({nombre: usuario.nombre, password: usuario.password, saldo: 10}));
  window.location.assign('donacionBanco.html');
  
}




//======================== Eventos ====================
$btnConsultarSaldo.addEventListener('click', actualizarSaldoBtn);
$btnIngresarMonto.addEventListener('click', btnIngresarMonto);
$btnRetirarMonto.addEventListener('click', btnRetirarMonto);
$btnCerrarSesion.addEventListener('click', cerrarSesion);
$btnDonar.addEventListener('click', donar);
$btnDonarBanco.addEventListener('click', donarBanco);







