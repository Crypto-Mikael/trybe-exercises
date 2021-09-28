const readline = require("readline-sync");

// 1. (Bonus) Crie um script que realize o fatorial de um número n .;

const fatorial = () => {
  const fatorial = readline.questionInt("Qual seu numero fatorial? ");
  if (fatorial != 0) {
    let numero = fatorial;
    for (let i = 1; i < fatorial; i++) {
      numero *= i;
    }
    console.log(numero);
  } else {
    console.log("Digite um numero acima de 0");
  }
};
fatorial();
