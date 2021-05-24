const mathRandom = () => Math.ceil(Math.random(1) * 5);

const mathLotteryResult = (result) => {
  if(mathRandom() === result) {
    console.log(`Parabéns você ganhou`)
  } else {
    console.log(`Tente novamente`)
  }
}
mathLotteryResult(4);

// const sorteio = (num) => num === Math.round(Math.random() * 5) ? 'Parabéns você ganhou': 'Tente novamente';
// console.log(sorteio(4)) 