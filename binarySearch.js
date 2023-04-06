// BINARYSEARCH

// 15

// buscado = 15
// min = 0
// max = arr.length - 1

// DENTRO DEL CICLO
// posicionMedio = (min + max) / 2
// encontrado = arr[posicionMedio]
// encontrado === buscado --> retornar posicionMedio
// encontrado > buscado ---> mover extremo max hasta la posicionMedio - 1
// encontrado < buscado ---> mover extremo min hasta la posicionMedio + 1
let numeros = [1, 3, 12, 15, 22, 34, 41, 54, 65];
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

const ordenar = (arr) => {
  let aux;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].titularCuenta > arr[j + 1].titularCuenta) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
};

ordenar(arrayCuentas)

const binarySearch = (arr, buscado) => {
  let min = 0; // 0 // 3
  let max = arr.length - 1; // 8 // 3 // 2
  let posicionMedio = undefined;
  let encontrado = undefined;

  while (min <= max) {
    posicionMedio = Math.floor((min + max) / 2); // 4 // 1 // 2 // 3
    encontrado = arr[posicionMedio]; // 22 // 3 // 12 // 15

    if (encontrado.titularCuenta === buscado) {
      return {
        posicion: posicionMedio,
        elemento: encontrado
      };
    }

    if (encontrado.titularCuenta > buscado) {
      max = posicionMedio - 1;
    } else {
      min = posicionMedio + 1;
    }
  }

  return "Lo siento el elemento buscado no existe en el arreglo";
};

let res = binarySearch(arrayCuentas, "pepito");
console.log(res);
