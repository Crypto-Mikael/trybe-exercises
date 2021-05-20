/*
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
  
*/
let info = {
  personagem: 'Margarida e Tio Patinhas',
  origem: ['Pato Donald','Christmas on Bear Moutain',`Dell's Four Color Comics #178`],
  nota: ['O último MacPatinhas','Namorada do personagem principal nos quadrinhos do Pato Donald'],
  recorrente:'Ambos recorrentes',
}

for (const key in info) {
  console.log(info[key])
}