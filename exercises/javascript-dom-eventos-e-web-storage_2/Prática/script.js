// 1. Acesse o elemento elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta')

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let ElementFather = document.getElementById('elementoOndeVoceEsta').parentNode
ElementFather.style.color = 'orange'

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let grandchildtxt = document.getElementById('primeiroFilhoDoFilho') 
grandchildtxt.innerHTML = 'Eu sou um neto muito querido.'

// 4. Acesse o primeiroFilho a partir de pai.
let firstson = document.getElementById('pai').childNodes[1]



