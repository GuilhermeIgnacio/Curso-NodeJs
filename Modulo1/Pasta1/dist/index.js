"use strict";
// const math = require("./math"); Uma forma de importar
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as math from "./math"; // Importando tudo
// import { somar, subtrair } from "./math"; // Importando apenas algumas funções
const math_1 = __importDefault(require("./math"));
let n1 = 10;
let n2 = 2;
console.log(`SOMA: ${math_1.default.somar(n1, n2)} `);
console.log(`SUBTRAÇÃO: ${math_1.default.subtrair(n1, n2)} `);
console.log(`MULTIPLICAÇÃO: ${math_1.default.multiplicar(n1, n2)} `);
