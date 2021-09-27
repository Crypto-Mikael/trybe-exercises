const fs = require("fs").promises;

async function returnAllJSON() {
  const simpsons = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((fileContent) => {
      const result = JSON.parse(fileContent);
      return result;
    });
  const reWrite = simpsons.map(({ id, name }) => `${id} - ${name}`);
  const result = reWrite.forEach((item) => console.log(item));
  return result;
}

try {
  returnAllJSON().then((result) => result);
} catch (err) {
  console.log(`err: ${err}`);
}
