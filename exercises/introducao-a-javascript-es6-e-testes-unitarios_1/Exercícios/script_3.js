// Documentação consultada.
// https://serprogramador.com.br/artigos/topico/javascript/Como-calcular-a-operacao-matematica-de-fatorial-com-JavaScript

function factorial(factorial) {
  let fatorial = factorial;
  let resultado = fatorial;
  for (let index = 1; index < fatorial; index+= 1) {
      resultado *= index;
  }
  return resultado;
}

console.log(factorial(5))