// 1. Acesse o elemento elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta')

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let ElementFather = document.querySelector('#elementoOndeVoceEsta').parentNode
ElementFather.style.color = 'orange'

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let grandchildtxt = document.querySelector('#primeiroFilhoDoFilho') 
grandchildtxt.innerHTML = 'Eu sou um neto muito querido.'

