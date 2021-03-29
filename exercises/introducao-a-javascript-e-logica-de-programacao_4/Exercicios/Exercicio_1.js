let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  console.log(`Bem vinda, ${info.personagem}!`);
  console.log(info.recorrente);

  for (const key in info) {
  console.log(info[key])
  }