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

  // Implemente uma função que adicione ao botão.

  function DayOfHolidaysOnCalendar(holidays) {
    let button = document.createElement('button')
    let buttonBlock = document.querySelector('.buttons-container')
    button.id = 'btn-holiday';
    button.innerHTML = holidays;
    buttonBlock.appendChild(button);

  }
  DayOfHolidaysOnCalendar('Feriados')

// Material consultado poís é 00:00;

  function clickEventButtonHolidays() {
  let clickPress = document.querySelector('#btn-holiday')
  let allHolidays = document.querySelectorAll('.holiday')
  let newcolor = '#eee';
  let oldcolor = 'white';
  clickPress.addEventListener('click', function () {
    for (let index = 0; index < allHolidays.length; index += 1) {
      if (allHolidays[index].style.backgroundColor === oldcolor) {
        allHolidays[index].style.backgroundColor = newcolor;
      } else {
        allHolidays[index].style.backgroundColor = oldcolor;
      }
    }
  });
  
  }
  clickEventButtonHolidays()

  function fridayButton(friday) {
    let button = document.createElement('button')
    let buttonBlock = document.querySelector('.buttons-container')
    button.id = 'btn-friday';
    button.innerHTML = friday
    buttonBlock.appendChild(button)
  }
  fridayButton('Sexta-feira');

  function clickEventButtonFriday() {
    let clickPress = document.querySelector('#btn-friday')
    let allFriday = document.querySelectorAll('.friday')
    let newtext = '/*Sextou'
    let oldtext = []
    for (let index = 0; index < allFriday.length; index += 1) {
      oldtext.push(allFriday[index].textContent)
    }
    clickPress.addEventListener('click', function () {
      for (let index = 0; index < allFriday.length; index += 1)
        if (allFriday[index].innerHTML === oldtext[index]) {
          allFriday[index].innerHTML = newtext;
        } else {
          allFriday[index].innerHTML = oldtext[index];
        }
      });
    // Material consultado : https://stackoverflow.com/questions/29089467/queryselectorall-print-textcontent-of-all-nodes
    }
    clickEventButtonFriday()

    function TextOfCalendarZoom() {
      let mouseOverDay = document.querySelectorAll('.day');
      for (let index = 0; index < mouseOverDay.length; index += 1) {
      
      mouseOverDay[index].addEventListener('mouseover', mouseover);
      mouseOverDay[index].addEventListener('mouseleave', mouseleave);
      function mouseover() {
        mouseOverDay[index].style.zoom = '150%';
      };
      function mouseleave() {
        mouseOverDay[index].style.zoom = '100%';
      };
    }
    }
    TextOfCalendarZoom()

    function calendarSpanCreator(assignment) {
      let divStorageSpan = document.querySelector('.my-tasks');
      let spanCreator = document.createElement('span');
      spanCreator.innerHTML = [assignment];
      divStorageSpan.appendChild(spanCreator);
    }
    calendarSpanCreator('cozinhar')

    function subtitleColorSelector(color) {
      let divStoragesubtitle = document.querySelector('.my-tasks');
      let colorCreator = document.createElement('div');
      colorCreator.className = 'task'
      colorCreator.style.backgroundColor = color
      divStoragesubtitle.appendChild(colorCreator)
    }
    subtitleColorSelector('magenta')





