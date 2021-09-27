const readline = require("readline-sync");
const fs = require("fs").promises;

async function returnAllJSON(idFromCharacter) {
  const simpsons = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((fileContent) => {
      const result = JSON.parse(fileContent);
      return result;
    });
  const result = simpsons.filter((person) => Number(person.id) === Number(idFromCharacter))[0];
  if (!result) throw new Error('id não Encontrado')
  return (`${result.id} - ${result.name}`);
}

try {
  returnAllJSON(14)
    .then((result) => console.log(result))
} catch (err) {
  console.log(`err: ${err.menssage}`)
}
