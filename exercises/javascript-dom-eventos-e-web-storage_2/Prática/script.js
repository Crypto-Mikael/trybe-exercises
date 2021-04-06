// 1. Acesse o elemento elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta')
// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let ElementFather = document.querySelector('#elementoOndeVoceEsta').parentNode
ElementFather.style.color = 'orange'