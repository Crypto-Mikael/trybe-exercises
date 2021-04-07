function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  // Desenvolva uma fucao que crie cada dia do caledário;

  function creatDayOfTheCalendar() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    let month = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
      let day = dezDaysList[index];
      let daysListItem = document.createElement('li');
      daysListItem.innerText = day;
      daysListItem.classList = 'day'

      if (daysListItem.innerText === '24') {
        daysListItem.classList.add(['holiday']) 
      }
      else if (daysListItem.innerText === '25') {
        daysListItem.classList.add(['holiday']) 
      }
      else if (daysListItem.innerText === '31') {
        daysListItem.classList.add(['holiday']) 
      }

      if (daysListItem.innerText === '4') {
        daysListItem.classList.add(['friday']) 
      }
      else if (daysListItem.innerText === '11') {
        daysListItem.classList.add(['friday']) 
      }
      else if (daysListItem.innerText === '18') {
        daysListItem.classList.add(['friday']) 
      }
      else if (daysListItem.innerText === '25') {
        daysListItem.classList.add(['friday']) 
      }

      month.appendChild(daysListItem);
    };
  };

  creatDayOfTheCalendar()

  function DayOfHolidaysOnCalendar(holidays) {
    let button = document.createElement('button')
    let buttonBlock = document.querySelector('.buttons-container')
    button.id = 'btn-holiday'
    button.innerHTML = holidays
    buttonBlock.appendChild(button)

  }
  DayOfHolidaysOnCalendar('Feriados')