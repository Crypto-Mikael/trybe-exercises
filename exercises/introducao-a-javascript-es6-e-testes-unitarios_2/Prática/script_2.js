const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

// Sem Object.values
const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};
console.log(listSkillsWithFor(student));

// Com Object.values
const listSkillsWithValues = (student) => Object.values(student);
console.log(listSkillsWithValues(student));


