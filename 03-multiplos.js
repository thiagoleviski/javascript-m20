var valorMaximo = 999;
var var1 = 3;
var var2 = 5;

function somaVar1(x) {
    let soma1 = 0;
    for (let i = 0; i <= x; i++) {
      if (i % var1 == 0) {
        soma1 += i;
      }
    }
    return soma1;
  }

  function somaVar2(x) {
    let soma2 = 0;
    for (let i = 0; i <= x; i++) {
      if (i % var2 == 0) {
        soma2 += i;
      }
    }
    return soma2;
  }

  let resultado = somaVar1(valorMaximo)+somaVar2(valorMaximo)
  console.log(resultado)

  module.exports = {resultado}