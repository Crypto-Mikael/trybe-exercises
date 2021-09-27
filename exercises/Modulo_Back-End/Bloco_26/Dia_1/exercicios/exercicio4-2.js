const readline = require("readline-sync");
const simpsons = require("./simpsons.json");

function simpsonsIdReturn() {
  const promise = new Promise((resolve, reject) => {
    const idPerson = readline.questionInt(
      "Qual o id do personagem você deseja? "
    );
    if (idPerson > 10 || idPerson < 0)
      reject(new Error("Digite um numero entre 1-10 "));

    const result = simpsons.filter(
      (person) => Number(person.id) === Number(idPerson)
    );
    resolve(console.log(`${result[0].id} - ${result[0].name}`));
  });

  return promise;
}

try {
  simpsonsIdReturn().then((result) => result);
} catch (err) {
  console.log(`err: ${err}`);
}
