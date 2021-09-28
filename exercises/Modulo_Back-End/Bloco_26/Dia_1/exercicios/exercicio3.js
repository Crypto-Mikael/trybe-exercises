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

const resolvedFunction = async () => {
  try {
    const randomNumber = Array.from({length: 3}, () => Math.floor(Math.random() * 40));
    const result = await AlgebericPromise(...randomNumber)
    console.log(`resultado: ${result}`);
  } catch (err) {
    console.log(`err: ${err}`)
  }
}

resolvedFunction();
