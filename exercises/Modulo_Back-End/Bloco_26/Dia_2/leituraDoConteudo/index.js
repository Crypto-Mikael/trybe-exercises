const fs = require('fs');

function leArquivo(nomeDoArquivo) {
  console.log('olou')
  try {
    const conteudoDoArquivo = fs.readFileSync(nomeDoArquivo, 'utf8');
    return conteudoDoArquivo;
  } catch (err) {
    return null;
  }
}

module.exports = { leArquivo };