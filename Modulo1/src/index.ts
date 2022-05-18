// const math = require("./math"); Uma forma de importar

// import * as math from "./math"; // Importando tudo
// import { somar, subtrair } from "./math"; // Importando apenas algumas funções
import math from "./math";

let n1: number = 10;
let n2: number = 2;

console.log(`SOMA: ${math.somar(n1, n2)} `);
console.log(`SUBTRAÇÃO: ${math.subtrair(n1, n2)} `);
console.log(`MULTIPLICAÇÃO: ${math.multiplicar(n1, n2)} `);
