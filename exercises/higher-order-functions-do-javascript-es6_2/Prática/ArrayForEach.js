const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Use o método forEach chamando a callback showEmailList para apresentar os emails.

emailListInData.forEach((item, position, array) => {
  showEmailList(item);
  console.log(`Position is equal: ${position}`)
  console.log(`Number o email is equal: ${array.length - position}`)
})

