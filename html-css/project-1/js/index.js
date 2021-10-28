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
