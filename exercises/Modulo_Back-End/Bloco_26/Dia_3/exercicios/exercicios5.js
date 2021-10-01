const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.get("/simpsons", (_req, res) => {
  try {
    const data = fs.readFileSync("./simpsons.json", "utf-8");
    res.status(200).send(data);
  } catch (err) {
    console.error(err)
  }
});

app.listen(port, () => {
  console.log(`Ouvindo a porta ${port}`);
});
