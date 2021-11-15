
   /* let email= document.getElementById("email");
    let pwd  = document.getElementById("pwd");*/
    /*let error=document.getElementById("error");
    let strengthBadge = document.getElementById('StrengthDisp');
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
  */
/*function validate()
{
let email= document.getElementById("email");

let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(regex.test(email.value) && email.value.length>0  )

{
   
    return true;
    }
else

{ 
    
error.innerHTML="Invalid Email or field cannot be empty";
error.style.color="red";
return false;

}
} 
function CheckPasswordStrength(password) {
    var password_strength = document.getElementById("password_strength");

    //if textBox is empty
    if(password.length==0){
        password_strength.innerHTML = "";
        return false;
    }

    //Regular Expressions
    var regex = new Array();
    regex.push("[A-Z]"); //For Uppercase Alphabet
    regex.push("[a-z]"); //For Lowercase Alphabet
    regex.push("[0-9]"); //For Numeric Digits
    regex.push("[$@$!%*#?&]"); //For Special Characters

    var passed = 0;

    //Validation for each Regular Expression
    for (var i = 0; i < regex.length; i++) 
    {
        if(new RegExp (regex[i]).test(password))
        {
            passed++;
        }
    }

    //Validation for Length of Password
    if(passed > 0 && password.length > 8){
        passed++;
    }

    //Display of Status
    var color = "";
    var passwordStrength = "";
    switch(passed){
        case 0:
            case 1:
            case 2:
                strength = "Weak";
                color = "red";
                break;
            case 3:
                 strength = "Medium";
                color = "orange";
                break;
            case 4:
                 strength = "Strong";
                color = "green";
                break;
    }
    password_strength.innerHTML = passwordStrength;
    password_strength.style.color = color;

if(passed <= 2){
    document.getElementById('show').disabled = true;
   }else{
       document.getElementById('show').disabled = false;
   }
       }















/* function validate() 
    {

    
let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(regex.test(email.value) && email.value.length>0 && pwd.length>0 )
{
    error.innerHTML="Valid Email";
    error.style.color="green";
    
        

    return true;
    }
else

{ 
    
error.innerHTML="Invalid Email or field cannot be empty";
error.style.color="red";
return false;

}

    function passwordChanged() {
        var strength = document.getElementById('strength');
        var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{8,}).*", "g");
        var pwd = document.getElementById("password");
        if (pwd.value.length == 0) {
            strength.innerHTML = 'Type Password';
        } else if (false == enoughRegex.test(pwd.value)) {
            strength.innerHTML = 'More Characters';
        } else if (strongRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:green">Strong!</span>';
        } else if (mediumRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:orange">Medium!</span>';
        } else {
            strength.innerHTML = '<span style="color:red">Weak!</span>';
        }
    }}*/
   /* function CheckPasswordStrength(password) {
var password_strength = document.getElementById("password_strength");

//TextBox left blank.
if (password.length == 0) {
    password_strength.innerHTML = "";
    return false;
}

//Regular Expressions.
var regex = new Array();
regex.push("[A-Z]"); //Uppercase Alphabet.
regex.push("[a-z]"); //Lowercase Alphabet.
regex.push("[0-9]"); //Digit.
regex.push("[$@$!%*#?&]"); //Special Character.

var passed = 0;

//Validate for each Regular Expression.
for (var i = 0; i < regex.length; i++) {
    if (new RegExp(regex[i]).test(password)) {
        passed++;
    }
}

//Display status.
var color = "";
var strength = "";
switch (passed) {
    
    case 0:
        strength = "Weak";
        color = "red";
        break;
    case 1:
         strength = "Medium";
        color = "orange";
        return true;
        break;
    case 2:
         strength = "Strong";
        color = "green";
        return true;
        break;
       
}
password_strength.innerHTML = strength;
password_strength.style.color = color;
if(strength=="Strong" || strength=="Medium"){
    return true;
}
    
if(passed <= 2){
 document.getElementById('show').disabled = true;
}else{
    document.getElementById('show').disabled = false;
}
    }*/
function validate()
{
    this.validateemail();
    return this.validatepass();
    return this.passstrength();
}
function validateemail()
{
let email= document.getElementById("email");
let error=document.getElementById("error");

let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(regex.test(email.value))

{error.innerHTML="Valid email address";
   error.style.color="green";
    return true;
    }
else

{ 
    
error.innerHTML="Invalid Email or Password Format";
error.style.color="red";
return false;

}
}
function validatepass()
{
    let pwd  = document.getElementById("pwd");
let error=document.getElementById("error");
var regp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
if(regp.test(pwd.value))

{error.innerHTML="Valid Password Format";
   error.style.color="green";
    return true;
    }
else

{ 
    
error.innerHTML="Invalid Password or Email Format";
error.style.color="red";
return false;
}
}
function passstrength(password) 
{
    var password_strength = document.getElementById("password_strength");
 
//TextBox left blank.
if (password.length == 0) {
    password_strength.innerHTML = "";
    return;
}

//Regular Expressions.
var regex = new Array();
regex.push("[A-Z]"); //Uppercase Alphabet.
regex.push("[a-z]"); //Lowercase Alphabet.
regex.push("[0-9]"); //Digit.
regex.push("[$@$!%*#?&]"); //Special Character.

var passed = 0;

//Validate for each Regular Expression.
for (var i = 0; i < regex.length; i++) {
    if (new RegExp(regex[i]).test(password)) {
        passed++;
    }
}

//Validate for length of Password.
if (passed > 2 && password.length > 8) {
    passed++;
}

//Display status.
var color = "";
var strength = "";
switch (passed) {
    case 0:
    case 1:
        strength = "Weak";
        color = "red";
        break;
    case 2:
        strength = "Good";
        color = "darkorange";
        break;
    case 3:
    case 4:
        strength = "Strong";
        color = "green";
        break;
    case 5:
        strength = "Very Strong";
        color = "darkgreen";
        break;
}

password_strength.innerHTML = strength;
password_strength.style.color = color;
}
    
