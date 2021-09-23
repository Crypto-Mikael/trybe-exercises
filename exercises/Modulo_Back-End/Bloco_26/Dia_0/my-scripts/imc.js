const readline = require("readline-sync");

// 1. Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.

const calculadoraDeIMC = () => {
  const peso = readline.questionInt("Qual seu peso em KG? ");
  const altura = readline.questionInt("Qual sua altura em CM? ");
  const IMC = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  calculadoraDeGrauDeObesidade(IMC);
  return console.log(
    `O seu Indice de Massa Corporal é ${IMC}`
  );

};

const calculadoraDeGrauDeObesidade = (IMC) => {
  let situacao = "";
  if (IMC < 18.5) {
    situacao = "Abaixo do peso (magreza)";
  } else if (IMC > 18.5 && IMC < 24.9) {
    situacao = "Peso normal";
  } else if (IMC > 25.5 && IMC < 29.9) {
    situacao = "Acima do peso (sobrepeso)";
  } else if (IMC > 30.0 && IMC < 34.9) {
    situacao = "Obesidade grau I";
  } else if (IMC > 35.0 && IMC < 39.9) {
    situacao = "Obesidade grau II";
  } else if (IMC > 40.0) {
    situacao = "Obesidade grau II e IV";
  }
  console.log(`Seu grau é ${situacao}`)
}

calculadoraDeIMC();
