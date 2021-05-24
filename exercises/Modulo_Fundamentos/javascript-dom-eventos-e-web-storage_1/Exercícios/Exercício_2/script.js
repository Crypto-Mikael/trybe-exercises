  function changemyfuture() {
    let myfuture = document.getElementsByTagName('p')[1];
    myfuture.innerHTML = 'Um belo Programador!!'
  }

  function blockYellowColorChanger() {
    let colorchanger = document.getElementsByTagName('div')[0];
    colorchanger.style.backgroundColor = 'rgb(76,164,109)'
  }

  function blockRedColorChanger() {
    let colorchanger = document.getElementsByTagName('div')[1];
    colorchanger.style.backgroundColor = 'white'
  }

  function correctionTextIntroduction() {
    let textchanger = document.getElementsByTagName('h1')[0]
    textchanger.innerText = 'A escola que te ensina a programar, a aprender e atrabalhar.'
  }
  
  function uppercaseParagraphs() {
    let pharagraphs = document.getElementsByTagName('p')
    for (index = 0; index < pharagraphs.length; index += 1) {
      pharagraphs = pharagraphs[index]
      pharagraphs.innerHTML = pharagraphs.innerHTML.toUpperCase();
    }
  }

  function showallParagraphs() {
    let pharagraphs = document.getElementsByTagName('p')
    for (index = 0; index < pharagraphs.length; index += 1) {
      console.log(pharagraphs[index].innerText);
    }
  }
  
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        Crie uma função que mude a cor do quadrado vermelho para branco.
        Crie uma função que corrija o texto da tag <h1>.
        Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        Crie uma função que exiba o conteúdo de todas as tags <p> no console.
 */