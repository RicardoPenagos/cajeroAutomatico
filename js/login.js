//======================= Cuentas ==========================
const cuentas = [
    { nombre: "Ricardo", password: 1234, saldo: 200 },
    { nombre: "Pepito", password: "user", saldo: 290 },
    { nombre: "Sensei", password: "admin", saldo: 990 }
];


//======================= Login ==========================
const $login = document.querySelector('#loginForm');
const getFormValues = (form) => Object.fromEntries(new FormData(form));



$login.addEventListener("submit", (event) => {
    event.preventDefault();
    const { user, password } = getFormValues($login);

    for (let element = 0; element <= cuentas.length; element++) {

        if (user == cuentas[element].nombre && password == cuentas[element].password){
            
            swal("Bienvenido", "Ingresaste a tu cuenta", "success").then((value) => {
                localStorage.setItem('usuario', JSON.stringify(cuentas[element]));
                window.location.assign("index.html");
            });;
            return;
            
        }else{
            swal("Rayos", "Te equivocaste de usuario o contraseña", "error");
            console.log(cuentas[element].nombre , "dentro del else");
        }
    };
    
});

