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