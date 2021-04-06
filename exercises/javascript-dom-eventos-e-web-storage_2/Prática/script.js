// 1. Acesse o elemento elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta')

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let ElementFather = document.getElementById('elementoOndeVoceEsta').parentNode
ElementFather.style.color = 'orange'

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let grandchildtxt = document.getElementById('primeiroFilhoDoFilho') 
grandchildtxt.innerText = 'Eu sou um neto muito querido.'

// 4. Acesse o primeiroFilho a partir de pai.
document.getElementById('pai').childNodes[1]

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').parentNode.childNodes[1]

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').parentNode.innerText

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').parentNode.childNodes[5]

// 8.Agora acesse o terceiroFilho a partir de pai.
document.getElementById('pai').childNodes[5]

