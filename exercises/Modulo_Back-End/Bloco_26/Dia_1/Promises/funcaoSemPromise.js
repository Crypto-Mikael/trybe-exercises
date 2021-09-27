function calcularDivisao(num1, num2) {
  if (num2 === 0) throw new Error('Não pode ser feito um divisão por zero');

  const resultado = num1 / num2;

  return resultado;
}

try {
  const resultado = calcularDivisao(2, 0);
  console.log(`resultado: ${resultado}`)

} catch (err) {
  console.log(`erro: ${err.message}`);
}