function creatOptions() {
  const locateCreatTagSelected = document.querySelector('#states');
  const states = ['Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espirito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso do Sul',
    'Mato Grosso',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantis']
  for (let index = 0; index < states.length; index += 1) {
    const CreatTagOptionOnSelect = document.createElement('option');
    locateCreatTagSelected.appendChild(CreatTagOptionOnSelect);
    CreatTagOptionOnSelect.innerHTML = states[index];
  }
}
creatOptions()


