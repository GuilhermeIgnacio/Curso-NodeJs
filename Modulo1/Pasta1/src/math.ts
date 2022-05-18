let versao: string = "1.0";

function somar(n1: number, n2: number): number {
  return n1 + n2;
}

function subtrair(n1: number, n2: number): number {
  return n1 - n2;
}

function multiplicar(n1: number, n2: number): number {
  return n1 * n2;
}

/*

Uma forma de exportar

module.exports.somar = somar;
module.exports.subtrair = subtrair;
module.exports.multiplicar = multiplicar;

*/

export default {
  somar,
  subtrair,
  multiplicar,
  versao,
};
