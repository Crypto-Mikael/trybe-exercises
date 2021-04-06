// Parte I

// 1. Acesse o elemento elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta');

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let ElementFather = document.getElementById('elementoOndeVoceEsta').parentNode;
ElementFather.style.color = 'orange';

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let grandchildtxt = document.getElementById('primeiroFilhoDoFilho') ;
grandchildtxt.innerText = 'Eu sou um neto muito querido.';

// 4. Acesse o primeiroFilho a partir de pai.
document.getElementById('pai').childNodes[1];

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').parentNode.childNodes[1];

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').parentNode.innerText;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').parentNode.childNodes[5];

// 8.Agora acesse o terceiroFilho a partir de pai.
document.getElementById('pai').childNodes[5];

// Parte II

// 1. Crie um irmão para elementoOndeVoceEsta.
let divCreator = document.createElement('div');
let divElement = document.getElementById('pai')
divElement.appendChild(divCreator).id = 'irmaoElementoOndeVoceEsta'

// 2. Crie um filho para elementoOndeVoceEsta.
let divElement2 = document.getElementById('elementoOndeVoceEsta')
divElement2.appendChild(divCreator).id = 'filhoElementoOndeVoceEsta'

// 3. Crie um filho para primeiroFilhoDoFilho.
let divElement3 = document.getElementById('primeiroFilhoDoFilho')
divElement3.appendChild(divCreator).id = 'filhoDoPrimeiroFilhoDoFilho'

// 4. A partir desse filho criado, acesse terceiroFilho.
document.getElementById('filhoDoPrimeiroFilhoDoFilho').parentNode.parentNode.parentNode[5]

// Parte III

// 1. Remova todos os elementos da página, menos pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.
let divPai = document.getElementById('pai')
divPai.removeChild(primeiroFilho)
divPai.removeChild(terceiroFilho)
divPai.removeChild(quartoEUltimoFilho)
let lastdivPai = document.getElementById('pai').childNodes
divPai.removeChild(segundoEUltimoFilhoDoFilho)

