function tagSonCreator (type, where, what) {
  let h1Creator = document.createElement(type);
  let scopeElement = document.querySelector(where)
  let finalElement = scopeElement.appendChild(h1Creator).id = what

  return finalElement
}

tagSonCreator('h1','body','Title')
document.getElementById('Title').innerText = 'Exercício 5.2 - JavaScript DOM'
tagSonCreator('div','body','div_main')
document.getElementById('div_main').className = 'main-content'
tagSonCreator('div','#div_main','div_imp')
document.getElementById('div_imp').className = 'center-content'


