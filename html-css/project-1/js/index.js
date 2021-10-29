console.log("javaScript added");

function namevalidate(){
    var name = document.getElementById("username").value;
    let reg = /^([^0-9/W]*)$/;
    if(reg.test(name)& name.length !=0){
        console.log("name is perfect");
        document.getElementById("nameinfo").innerHTML="";
        document.getElementById("username").style.border = "2px solid green";
    }
    else{
        document.getElementById("nameinfo").innerHTML="please fill proper username"
        document.getElementById("nameinfo").style.color = "red";
        document.getElementById("username").style.border = "2px solid red";
        console.log("name is not perfect");
    }
}

function passvalidate(){
    let reg = /[0-9][A-Z]/;
    var password = document.getElementById("password").value;
    if (password.length < 8) {
      document.getElementById("password").style.border = "2px solid red";
      document.getElementById("passinfo").innerHTML =
        "password must have atleast 8 characters"
      document.getElementById("passinfo").style.color = "red";
      console.log("password is not perfect");
      return false;
    }
    else if(!reg.test(password)){
         document.getElementById("password").style.border = "2px solid red";
         document.getElementById("passinfo").innerHTML =
           "password must have atleast one number and one upper";
         document.getElementById("passinfo").style.color = "red";
         console.log("password is not perfect");
    }
    else{
        document.getElementById("passinfo").innerHTML="";
        document.getElementById("password").style.border="2px solid green";
        console.log("password is perfect")
    }
}

function cityvalidate(){
    var city = document.getElementById("city").value;
    if (city.length == 0){
        document.getElementById("city").style.border="2px solid red";
        document.getElementById("cityinfo").innerHTML = "please provide proper city name"
        document.getElementById("cityinfo").style.color = "red";
        console.log("city not ok")
    }
    else{
         document.getElementById("city").style.border = "2px solid green";
         document.getElementById("cityinfo").innerHTML = "";
         console.log("city ok");
    }
}
function age(){
    var dob = new Date(document.getElementById("dob").value);
    var today = new Date();
    if (dob.getTime() > today.getTime())
    {
        document.getElementById("age").innerHTML = "please provide proper birth date";
        document.getElementById("age").style.color = "red";
    }
    else{       
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
        document.getElementById("age").innerHTML = `Age: ${age} years`;
        document.getElementById("age").style.color = "green";
        document.getElementById("age").style.fontWeight = "bold";
    }
    
}

