function namevalidate() {
  var name = document.getElementById("username").value;
  let reg = /^([^0-9/W\s]*)$/;
  if (reg.test(name) && (name.length != 0)) {
    document.getElementById("nameinfo").innerHTML = "";
    document.getElementById("username").style.border = "2px solid green";
    return true;
  } else {
    document.getElementById("nameinfo").innerHTML =
      "please fill proper username";
    document.getElementById("nameinfo").style.color = "red";
    document.getElementById("username").style.border = "2px solid red";
    return false;
  }
}

function passvalidate() {
  var password = document.getElementById("password").value;
  if(password.length < 8){
    document.getElementById("password").style.border = "2px solid red";
    document.getElementById("passinfo").innerHTML = "password must have atleast 8 characters";
    document.getElementById("passinfo").style.color = "red";
    return false;
  }
  else if (password.search(/[0-9]/) == -1) {
    document.getElementById("password").style.border = "2px solid red";
    document.getElementById("passinfo").innerHTML = "password must have atleast one number";
    document.getElementById("passinfo").style.color = "red";
    return false;
  }
  else if(password.search(/[A-Z]/) == -1){
    document.getElementById("password").style.border = "2px solid red";
    document.getElementById("passinfo").innerHTML ="password must have atleast one uppercase";
    document.getElementById("passinfo").style.color = "red";
    return false;
  }
   else {
    document.getElementById("passinfo").innerHTML = "";
    document.getElementById("password").style.border = "2px solid green";
    return true;
  }
}

function cityvalidate() {
  let reg = /^([^0-9/W\s]*)$/;
  var city = document.getElementById("city").value;
  if (city.length != 0 && reg.test(city)) {
     document.getElementById("city").style.border = "2px solid green";
     document.getElementById("cityinfo").innerHTML = "";
     return true;
  } else {
    document.getElementById("city").style.border = "2px solid red";
    document.getElementById("cityinfo").innerHTML =
      "please provide proper city name";
    document.getElementById("cityinfo").style.color = "red";
    return false;
  }
}
function y_age() {
  const input = document.getElementById("dob").value;
  var dob = new Date(input);
  var today = new Date();
  if(input == "" || input == "null"){
        document.getElementById("date").innerHTML = "please fill DOB";
        document.getElementById("date").style.color = "red";
        return false;
    }
  else if (dob.getTime() > today.getTime()) {
    document.getElementById("age").innerHTML =
      "please provide proper birth date";
    document.getElementById("age").style.color = "red";
    return false;
  } else {
    const month = new Array(
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC"
    );

    const b_day = dob.getDate();
    const b_month = dob.getMonth();
    const b_year = dob.getFullYear();

    const t_date = today.getDate();
    const t_month = today.getMonth();
    const t_year = today.getFullYear();

    let age = 0;
    if (t_month > b_month) {
      age = t_year - b_year;
    } else if (t_month == b_month) {
      if (t_date >= b_day) {
        age = t_year - b_year;
      } else {
        age = t_year - b_year - 1;
      }
    } else {
      age = t_year - b_year - 1;
    }
    // date
    document.getElementById("date").innerHTML = `your birthday is on <br> ${b_day} ${month[b_month]} ${b_year}`;
    document.getElementById("date").style.color = "green";
    document.getElementById("date").style.fontWeight = "bold";

    // age
    document.getElementById("age").innerHTML = `Age: ${age} years`;
    document.getElementById("age").style.color = "green";
    document.getElementById("age").style.fontWeight = "bold";
    return true;
  }
}

// // confirm password validation
document.validation.cnfpass.addEventListener("keyup", cnfpasswd);
function cnfpasswd() {
  const pass1 = document.getElementById("password").value;
  const pass2 = document.getElementById("cnfpass").value;
  if(pass2.length == 0){
    document.getElementById("cnfpassinfo").innerHTML = "please confirm your password";
    document.getElementById("cnfpassinfo").style.color = "red";
    document.getElementById("cnfpass").style.border = "2px solid red";
    return false;
  }
  else if (pass1 != pass2) {
    document.getElementById("cnfpassinfo").innerHTML = "Password didn't match";
    document.getElementById("cnfpassinfo").style.color = "red";
    document.getElementById("cnfpass").style.border = "2px solid red";
    return false;
  }
  else{
    document.getElementById("cnfpassinfo").innerHTML = "";
    document.getElementById("cnfpass").style.border = "2px solid green";
    return true;
  }
}

function radiobtnvalid() {
  let role = document.getElementsByName("role");
  if (!(role[0].checked || role[1].checked || role[2].checked)) {
    document.getElementById("roleinfo").innerHTML = "please check role!";
    document.getElementById("roleinfo").style.color = "red";
    return false;
  } else {
    document.getElementById("roleinfo").innerHTML = "";
    return true;
  }
}

function checkboxvalid(){
  let mail = document.getElementById("mail");
  let payroll = document.getElementById("payroll");
  let service = document.getElementById("service");

  if(!(mail.checked || payroll.checked || service.checked)){
    document.getElementById("checkinfo").innerHTML = "please check activities"
    document.getElementById("checkinfo").style.color = "red";
    return false;
  }
  else{
     document.getElementById("checkinfo").innerHTML = "";
    return true;
  }
}

function selvalidate(){
  let server = document.getElementById("server");
  if(server.value == "webserver"){    
    document.getElementById("servinfo").innerHTML = "please choose a server";
    document.getElementById("servinfo").style.color = "red";
    return false;
  }
  else{
    document.getElementById("servinfo").innerHTML = "";
    return true;
  }
}

function resetform() {
  // html reset
  document.getElementById("nameinfo").innerHTML = "";
  document.getElementById("passinfo").innerHTML = "";
  document.getElementById("cityinfo").innerHTML = "";
  document.getElementById("age").innerHTML = "";
  document.getElementById("cnfpassinfo").innerHTML = "";
  document.getElementById("date").innerHTML = "";
 
  
  // css reset
  document.getElementById("cnfpass").style = "";
  document.getElementById("username").style = "";
  document.getElementById("city").style = "";
  document.getElementById("password").style = "";
}
