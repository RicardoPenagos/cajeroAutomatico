
//======================== Consultar saldo ====================

const $btnConsultarSaldo = document.querySelector('#btnConsultarSaldo');

function consultarSaldo(){
    const regex = /(\d+)/g;
    const $saldo = document.querySelector('#saldo');
    const valor = $saldo.textContent.match(regex);  
    return parseInt(valor);
    //return parseInt(document.querySelector('#saldo').textContent.match(/(\d+)/g));
}

function actualizarSaldo(){
    const $saldo = document.querySelector('#saldo');
    $saldo.innerHTML ="$" + consultarSaldo();
}



//======================== Consultar saldo ====================

const $btnIngresarMonto = document.querySelector('#btnIngresarMonto');

function btnIngresarMonto(){
    const $tarjeta = document.querySelector('#tarjeta');
    $tarjeta.innerHTML = 

    `<img src="Imagenes/User-icon.jpg" class="card-img-top">
    <div class="card-body pt-5 pb-5 text-center">
      <h5 class="card-title mb-4">Ingresa el monto que quieras agregar</h5>
      <span class="card-text" id="saldo" style="display:none">$10</span>
      <div class="input-group">
        <span class="input-group-text">$</span>
        <input type="number" class="form-control"> 
      </div>
      
    </div>`;

    console.log($tarjeta.innerHTML);
}

function ingresarSaldo(valor){
    const $saldo = document.querySelector('#saldo');
    $saldo.innerHTML ="$" + (consultarSaldo() + valor);
}


//======================== Eventos ====================
$btnConsultarSaldo.addEventListener('click', actualizarSaldo);
$btnIngresarMonto.addEventListener('click', btnIngresarMonto);



actualizarSaldo();
//btnIngresarMonto(); // actual
