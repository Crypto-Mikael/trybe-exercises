function AlgebericPromise(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    const result = (num1 + num2) * num3;
    
    if (
      typeof num1 !== "number" ||
      typeof num2 !== "number" ||
      typeof num3 !== "number"
    )
      reject(new Error("Informe apenas números"));

    if (result < 50) reject(new Error("Valor muito baixo"));

    resolve(result);
  });

  return promise;
}

AlgebericPromise(5, 5, 5)
  .then((res) => console.log(`O calculo deu ${res}`))
  .catch((err) => console.log(`err: ${err}`));
