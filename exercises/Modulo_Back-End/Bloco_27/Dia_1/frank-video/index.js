const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()} - ${file.originalname}`);
  },
})

const upload = multer({ storage });

app.get('/ping', (req, res) => res.send('pong'))

app.post('/upload', upload.single('arquivo'), (req, res) => {
  console.log(req.body, req.file); 
  res.send('ok')
});


app.listen(port, () => console.log(`Example app listening on port port!`))