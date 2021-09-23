const readline = require("readline-sync");

// 2. Vamos criar mais um script. Dessa vez, para calcular a velocidade média de um carro numa corrida;

const calcularVelocidade = () => {
  const distacia = readline.questionInt(
    "Qual a distacia que o veiculo irá percorrer? "
  );
  const tempo = readline.questionInt(
    "Em quanto tempo o veiculo irá percorrer essa distância? "
  );
  const velocidadeMedia = distacia / tempo;

  return (
    console.log(`A velocidade média do veiculo foi: ${velocidadeMedia}m/s`)
  );
};

calcularVelocidade();
