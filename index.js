console.log("esta funcionando js");

//  let contenedorTitulo = document.querySelector("div")
// let contenedorTitulo =  document.querySelectorAll("div")

let contenedorTitulo = document.getElementById("container-title");
let titulo = document.getElementById("title");

// setTimeout(()=>{
//     contenedorTitulo.innerHTML = "<h2>Ahora soy un h2</h2>"
// }, 5000 )

let subtitle = document.getElementById("subtitle");

setTimeout(() => {
  titulo.textContent = "La app cambio desde js";
  subtitle.style.color = "red";
}, 5000);

let containerApp = document.getElementById("container-app");
let btnMode = document.getElementById("btn-mode");

btnMode.addEventListener("click", () => {
  containerApp.style.backgroundColor = "black";
});

let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldo: 100,
    titularCuenta: "pepito",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldo: 200,
    titularCuenta: "maria",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldo: 500,
    titularCuenta: "juancito",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldo: 400,
    titularCuenta: "carmen",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldo: 150,
    titularCuenta: "jack",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldo: 45,
    titularCuenta: "juan carlos",
  },
];

let containerCards = document.getElementById("container-ctas");
let btnCuentas = document.getElementById("btn-ctas");

btnCuentas.addEventListener("click", () => {
  // let tarjetas = []

  // for (let i = 0; i < arrayCuentas.length; i++) {
  //      tarjetas.push(`<div class="card">
  //      <h3>${arrayCuentas[i].titularCuenta}</h3>
  //      <h4>${arrayCuentas[i].nroCuenta}</h4>
  //      <h4>${arrayCuentas[i].saldo}</h4>
  //  </div>`)
  // }

  let tarjetas = arrayCuentas
    .filter((elemento) => elemento.saldo >= 300)
    .map((elemento) => {
      return `<div class="card">
                <h3>${elemento.titularCuenta}</h3>
                <h4>${elemento.nroCuenta}</h4>
                <h4>${elemento.saldo}</h4>
            </div>`
    });

  containerCards.innerHTML = tarjetas;
});
