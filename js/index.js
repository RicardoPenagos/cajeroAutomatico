

//======================== Consultar saldo ====================

const $btnConsultarSaldo = document.querySelector('#btnConsultarSaldo');


function consultarSaldo() {
  const regex = /(\d+)/g;
  const $saldo = document.querySelector('#saldo');
  const valor = $saldo.textContent.match(regex);
  return parseInt(valor);
  //return parseInt(document.querySelector('#saldo').textContent.match(/(\d+)/g));
}

function actualizarSaldo(valor = 0) {
  const $tarjeta = document.querySelector('#tarjeta');
  $tarjeta.innerHTML = ` <img src="Imagenes/User-icon.jpg" class="card-img-top">
    <div class="card-body pt-5 pb-5 text-center">
      <h5 class="card-title">Tú saldo actual es de: </h5>
      <span class="card-text" id="saldo" >$${consultarSaldo() + valor}</span>                      
    </div>`
}





//======================== Ingresar monto ====================

const $btnIngresarMonto = document.querySelector('#btnIngresarMonto');

function btnIngresarMonto() {
  const $tarjeta = document.querySelector('#tarjeta');
  $tarjeta.innerHTML =
    `<img src="Imagenes/User-icon.jpg" class="card-img-top">
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
    `<img src="Imagenes/User-icon.jpg" class="card-img-top">
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







//======================== Eventos ====================
$btnConsultarSaldo.addEventListener('click', actualizarSaldo(0));
$btnIngresarMonto.addEventListener('click', btnIngresarMonto);
$btnRetirarMonto.addEventListener('click', btnRetirarMonto);





actualizarSaldo(0);

