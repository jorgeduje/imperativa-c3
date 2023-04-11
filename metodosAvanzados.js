// PROGRAMACION IMPERATIVA ---> COMO Y QUE 
// PROGRAMACION DECLARATIVA ---> QUE 
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldo: 27771,
      titularCuenta: "pepito",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldo: 8675,
      titularCuenta: "maria",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldo: 27363,
      titularCuenta: "juancito",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldo: 32415,
      titularCuenta: "carmen",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldo: 18789,
      titularCuenta: "jack",
    },
  ];
// CALLBACK

let nums = [12, 24, 11, 15] // [3, 6, 9, 12]

// MAP ---> siempre devuelve un arreglo, y siempre de la misma longitud
 let nuevoArr = nums.map( ( element, index)=> element)

 console.log(nuevoArr)

 let saldos = arrayCuentas.map( elemento => ({saldo: elemento.saldo, nombre: elemento.titularCuenta}))
 console.log(saldos)
// const recorrer =(arr)=>{
//     let nuevo = []
//     for (let i = 0; i < arr.length; i++) {
//         nuevo.push(arr[i] * 3)
//     }
//     return nuevo
// }

// let a = recorrer(nums)
// console.log(a)



//FILTER []
// SIEMPRE SIEMPRE SIEMPRE DEVUELVE UN ARREGLO

let filtrados = arrayCuentas.filter( elemento => elemento.tipoDeCuenta === "Caja de Ahorro")

console.log(filtrados)


//FIND 
console.log("-------------")
let consultarCliente = arrayCuentas.find( elemento => elemento.titularCuenta === "juancito")
console.log(consultarCliente)

// nums.indexOf(3)
// nums.push("hola")
// nums.push(true)

// nums.map( ()=>{} )
// nums.filter( ()=>{} )
// nums.find(()=>{})


// forEach 
let aa = []
let x = nums.forEach( (elemento)=> {
    aa.push(elemento)
})

console.log(aa)

// SORT , REDUCE 