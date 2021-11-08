const date = new Date();

var calender = function () {
  // First Day
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();

  // first day index
  const firstdayIndex = new Date(date.getFullYear(),date.getMonth(),1).getDay();

  // LastDay(current month)
  const lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();

  // lastday index current month
 const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0)
 .getDay();

  // LastDay(Previous month)
  const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var daysList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // weekdays
  let weekdays = document.getElementById("weekdays");
  let dayst = "<tr>";
  for (let day in daysList) {
    dayst += `<th>${daysList[day]}</th>`;
  }
  dayst = dayst + `</tr>`;
  weekdays.innerHTML = dayst;

  const c_month = date.getMonth();
  document.querySelector(".months h1").innerHTML = months[c_month];

  document.querySelector(".months p").innerHTML = date.toDateString();

 let  monthDays = document.querySelector("#days");

  // space logic (prev days)
  let days = ``;

  for (let j = firstdayIndex; j > 0; j--) {
    days += `<td class="disable">${prevLastDay - j + 1}</td>`;
    // days += `<td></td>`
  }

  // Loop logic
  let count = firstdayIndex - 1;
  for (let i = 1; i <= lastDay; i++) {
      count += 1;
      // row seperate
      if(count % 7 == 0){
          days += `</tr>`;
          count = 0;
      }

      // display date

      // today
      if(i === new Date().getDate())
      {
          days += `<td class="today">${i}</td>`;
      }
      else if(count % 7 == 5){
        // friday
          days += `<td class="friday">${i}</td>`
      }
      else if(count % 7 == 0){
          // Sunday
         days += `<td class="sunday">${i}</td>`;
      }
      else{
          days += `<td>${i}</td>`;
      }
  }

  // space logic (next days)
  const nextDays = 7 - lastDayIndex - 1;
  for (let index = 1; index <= nextDays; index++) {
      days += `<td class="disable">${index}</td>`;
    // days += `<td></td>`
  }
  days += `</tr>`;
  monthDays.innerHTML = days;
};

let upper = document.querySelector(".up").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  calender();
});

let down = document.querySelector(".down").addEventListener("click", ()=>{
    date.setMonth(date.getMonth() + 1);
    calender();
});

calender();
