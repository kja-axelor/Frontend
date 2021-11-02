const date = new Date();

// First Day
const firstDay = new Date(date.getFullYear(),date.getMonth(),1).getDate();

// first day index 
const firstdayIndex = date.getDay();

// LastDay(current month)
const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();

// lastday index current month
const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();

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
    "December"
]

var daysList = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
]

// weekdays
let weekdays = document.getElementById("weekdays");
let dayst = "<tr>";
for (let day in daysList){
    dayst += `<th>${daysList[day]}</th>`
}
dayst = dayst + `</tr>` ;
weekdays.innerHTML = dayst;


const c_month = date.getMonth();
document.querySelector(".months h1").innerHTML = months[c_month];

document.querySelector(".months p").innerHTML = date.toDateString();

monthDays = document.querySelector("#days");


// space logic (prev days)
let days = `<tr>`;
for (let j = firstdayIndex - 1; j > 0; j--) { 
        days += `<td>${prevLastDay - j + 1}</td>`
        // days += `<td></td>`
}
// Loop logic
for (let i = 1; i <= lastDay; i++) {
    if(i % 7 == 0){
        days += `</tr><td>${i}</td>`
    }
    else{
        days += `<td>${i}</td>`
    }
}

// space logic (next days)
const nextDays = 7 - lastDayIndex - 1;
for (let index = 1; index <= nextDays; index++) {
    days += `<td>${index}</td>`
    // days += `<td></td>`
    
}

monthDays.innerHTML = days;
days += `</tr>`
