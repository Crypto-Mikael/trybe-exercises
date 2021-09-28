const readline = require("readline-sync");

// 3. Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado;

const jogoDeAdvinhação = () => {
  const numeroAleatorio1a10 = Math.floor(Math.random() * 10 + 1);
  const numeroDoJogador = readline.questionInt("Digite um numero de 1 a 10! ");
  logResultado(numeroDoJogador, numeroAleatorio1a10);
  const perguntaReJogo = readline.question("Você quer jogar novamente? y/n ") 
  if (perguntaReJogo !== 'y') {
    return console.log("Até mais!")
  }
  jogoDeAdvinhação()
}

const logResultado = (numeroAleatorio1a10, numeroDoJogador) => {
  if (numeroAleatorio1a10 === numeroDoJogador) {
    console.log("Parabéns, numero correto!");
    return;
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${numeroAleatorio1a10}`)
    return;
  }
}

jogoDeAdvinhação();