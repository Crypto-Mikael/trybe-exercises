function cacularDivisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error("Numero não pode ser divisivel por zero"));

    const resultado = num1 / num2;
    resolve(resultado);
  });
  return promise;
}

cacularDivisao(2, 0)
  .then((result) => console.log(result))
  .catch((err) => console.log(`erro: ${err.message}`))