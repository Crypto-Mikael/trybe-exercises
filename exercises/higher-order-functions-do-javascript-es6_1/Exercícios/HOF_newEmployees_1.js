const newPersonObj = (nomeCompleto) => {
 const email = `${nomeCompleto}@trybe.com`
 return email
};

const newEmployees = (retornoDoNome) => {
  const employees = {
    id1: retornoDoNome('PedroGuerra'),
    id2: retornoDoNome('Luiza Drumond'),
    id3: retornoDoNome('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(newPersonObj));