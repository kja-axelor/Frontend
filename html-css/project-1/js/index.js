console.log("javaScript added");

function namevalidate(){
    var name = document.getElementById("username").value;
    let reg = /^([^0-9/W]*)$/;
    if(reg.test(name)& name.length !=0){
        document.getElementById("nameinfo").innerHTML="";
        document.getElementById("username").style.border = "2px solid green";
    }
    else{
        document.getElementById("nameinfo").innerHTML="please fill proper username"
        document.getElementById("nameinfo").style.color = "red";
        document.getElementById("username").style.border = "2px solid red";
    }
}

function passvalidate(){
    let reg = /[0-9][A-Z]/;
    var password = document.getElementById("password").value;
    if (password.length < 8) {
      document.getElementById("password").style.border = "2px solid red";
      document.getElementById("passinfo").innerHTML = "password must have atleast 8 characters"
      document.getElementById("passinfo").style.color = "red";
    }
    else if(!reg.test(password)){
         document.getElementById("password").style.border = "2px solid red";
         document.getElementById("passinfo").innerHTML = "password must have atleast one number and one upper";
         document.getElementById("passinfo").style.color = "red";
    }
    else{
        document.getElementById("passinfo").innerHTML="";
        document.getElementById("password").style.border="2px solid green";
    }
}

function cityvalidate(){
    var city = document.getElementById("city").value;
    if (city.length == 0){
        document.getElementById("city").style.border="2px solid red";
        document.getElementById("cityinfo").innerHTML = "please provide proper city name"
        document.getElementById("cityinfo").style.color = "red";
    }
    else{
         document.getElementById("city").style.border = "2px solid green";
         document.getElementById("cityinfo").innerHTML = "";
    }
}
function age(){
    const input = document.getElementById("dob").value;
    var dob = new Date(input);
    var today = new Date();
    /* if(input == "" || input == "null"){
    //     document.getElementById("dateinfo").innerHTML = "please fill date";
    //     document.getElementById("dateinfo").style.color = "red";
    //     document.getElementById("dob").style.border = "2px solid red";
    }*/
    if (dob.getTime() > today.getTime())
    {
        document.getElementById("age").innerHTML = "please provide proper birth date";
        document.getElementById("age").style.color = "red";
    }
    else{       
        const month = new Array("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");

        const b_day = dob.getDate();
        const b_month = dob.getMonth();
        const b_year = dob.getFullYear();

        const t_date = today.getDate();
        const t_month = today.getMonth();
        const t_year = today.getFullYear();

        let age = 0;
        if (t_month > b_month)
        {
            age = t_year - b_year;
        }
        else if(t_month == b_month){
            if(t_date >= b_day){
                age = t_year - b_year;
            }
            else{
                age = t_year - b_year - 1;
            }
        }
        else{
            age = t_year - b_year - 1;
        }
        // date
        document.getElementById("date").innerHTML = `your birthday is on <br> ${b_day} ${month[b_month]} ${b_year}`
        document.getElementById("date").style.color = "green"
        document.getElementById("date").style.fontWeight = "bold"

        // age
        document.getElementById("age").innerHTML = `Age: ${age} years`;
        document.getElementById("age").style.color = "green";
        document.getElementById("age").style.fontWeight = "bold";
    }   
}

// confirm password validation
document.validation.cnfpass.addEventListener("keyup", cnfpass);
function cnfpass(){
    const pass1 = document.getElementById("password").value;
    const pass2 = document.getElementById("cnfpass").value;
    if(pass1 != pass2){
        document.getElementById("cnfpassinfo").innerHTML = "Password didn't match";
        document.getElementById("cnfpassinfo").style.color = "red";
        document.getElementById("cnfpass").style.border = "2px solid red";
    }
    else if(pass2.length != 0)
    {
        document.getElementById("cnfpassinfo").innerHTML = "";
        document.getElementById("cnfpass").style.border= "2px solid green";
    }
}

function resetform(){
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