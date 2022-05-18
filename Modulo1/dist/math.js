"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let versao = "1.0";
function somar(n1, n2) {
    return n1 + n2;
}
function subtrair(n1, n2) {
    return n1 - n2;
}
function multiplicar(n1, n2) {
    return n1 * n2;
}
/*

Uma forma de exportar

module.exports.somar = somar;
module.exports.subtrair = subtrair;
module.exports.multiplicar = multiplicar;

*/
exports.default = {
    somar,
    subtrair,
    multiplicar,
    versao,
};
