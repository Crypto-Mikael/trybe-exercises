function tagSonCreator (type, where, what, clasification) {
  let h1Creator = document.createElement(type);
  let scopeElement = document.querySelector(where)
  if (what === true) {
    let finalElement = scopeElement.appendChild(h1Creator).id = clasification
    return finalElement
  } else {
    let finalElement = scopeElement.appendChild(h1Creator).className = clasification
    return finalElement  
  }
}
//1.
tagSonCreator('h1','body',true,'Title',)
document.getElementById('Title').innerText = 'Exercício 5.2 - JavaScript DOM'
//2.
tagSonCreator('div','body',false,'main-content')
//3.
tagSonCreator('div','.main-content',false,'center-content')
//4.
tagSonCreator('p','.center-content',false,'phrase_of_center')
document.querySelector('.center-content').innerText = 'Alguma coisa aki se escreve é não pode ser lida'
//5.
tagSonCreator('div','.main-content',false,'left-content')
//6.
tagSonCreator('div','.main-content',false,'right-content')
//7.
tagSonCreator('img','.left-content',false,'small-image')
document.querySelector('.small-image').src = 'https://picsum.photos/200'
//8.
tagSonCreator('ul','.right-content',false,'list')
let listsize = document.querySelector('.list').childNodes.length
for(index = 10; listsize < index; index -= 1) {
  tagSonCreator('il','.list',false,'il')

}
tagSonCreator('h3','main-content',true,'')



