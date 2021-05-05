const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const avgList = []
  for (let index = 0; index < grades.length; index += 1) {
  const gradesAvg = [grades[index].reduce((acumulator,actualNumber) => (actualNumber + acumulator),0)]
  avgList.push(gradesAvg / 5)
  }

  const ObjProducts = (avegraList,students) => avegraList.map((obj, index) => (
    { name: avegraList[index],
      average: students[index]}
  ))
  return ObjProducts(students,avgList);
}
const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);