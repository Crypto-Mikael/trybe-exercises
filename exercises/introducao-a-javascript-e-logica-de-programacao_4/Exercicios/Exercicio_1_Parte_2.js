  function checkpalindrome (word) {

  let drow = word.split('').reverse().join('')

  if (drow === word) {
      return true
  } else {
      return false
  }
}

console.log(checkpalindrome('roberto'))

/* Documentações visualizadas:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/