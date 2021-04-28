const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercicio 1
const newTurnOnLesson2 = () => {
  const turnoAdd = {
    turno: 'manhã'
  }
  Object.assign(lesson2, turnoAdd)
}
newTurnOnLesson2()

// Exercicio 2
const listKeysInObj = (obj) => {
  const arrayObject = Object.keys(obj);
  for(index in arrayObject) {
    console.log(arrayObject[index])
  }
}

listKeysInObj(lesson2)

// Exercicio 3
const listKeysInObjLenght = (obj) => {
  const arrayObject = Object.keys(obj);
    console.log(arrayObject.length);
}

// Exercicio 4
const listKeysInObjItens = (obj) => {
  let arrayObjectkeys = Object.keys(obj);
  let arrayObjectvalue = Object.values(obj);
  for(index in arrayObjectkeys) {
    console.log(`
    key = ${arrayObjectkeys[index]} 
    value = ${arrayObjectvalue[index]}`)
  }
}

//listKeysInObjItens (lesson2)

//Exercicio 5
const allLessonsFunction = () => {  
  const alllesson = {
    lesson1,
    lesson2,
    lesson3,
  }
  console.log(alllesson)
}
//allLessonsFunction()
