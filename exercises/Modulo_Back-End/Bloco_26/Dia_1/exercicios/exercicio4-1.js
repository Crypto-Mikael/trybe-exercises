const simpsons = require("./simpsons.json");

function returnAllJSON() {
  const promise = new Promise((resolve, reject) => {
    if (!simpsons) reject(new Error("JSON not found"));
    const reWrite = simpsons.map(({ id, name }) => `${id} - ${name}`);
    const result = reWrite.forEach((item) => console.log(item));
    resolve(result);
  });
  return promise;
}

try {
  returnAllJSON().then((result) => result);
} catch (err) {
  console.log(`err: ${err}`);
}
