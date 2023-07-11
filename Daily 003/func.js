const form = document.getElementById('signup');
const name = form.elements['name'].value;
const password = form.elements['password'].value;
const email = form.elements['email'].value;

const welcome = document.querySelector(".welcome");
const container = document.querySelector(".container");


function showMessage(input, message, type){
    const msg = input.parentNode.querySelector("span");
    
    msg.innerText = message;
    
    input.className = type ? "success" : "error";
    
    return type;
}

function showError(input, message){
    return showMessage(input, message, false);
}

function showSuccess(input, message){
    return showMessage(input, "", true);
}

function hasValue(input, message){
    if(input.value.trim() === ""){
        return showError(input, message);
    }

    return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg){
    if(!hasValue(input, requiredMsg)){
        return false;
    }

    const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();
    
    if(!emailRegex.test(email)){
        return showError(input, invalidMsg);
    }else{
        return true;
    }
}

function validatePassword(input, requiredMsg, invalidMsg){
    if(!hasValue(input, requiredMsg)){
        return false;
    }

    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(!passRegex.test(password)){
        return showError(input, invalidMsg);
    }else{
        return true;
    }
}

const name_req = "Please enter your name!";
const email_req = "Please enter your email!";
const email_inv = "Please enter a correct email address format!";
const pass_req = "Please enter your password!";
const pass_inv = "Please enter a valid password! (6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter)"
welcome.style.display = "none";
form.addEventListener("submit", function(event){
    welcome.style.display = "none";
    event.preventDefault();

    let nameValid = hasValue(form.elements['name'], name_req);
    let emailValid = validateEmail(form.elements['email'], email_req,email_inv);
    console.log("valid name and email valid"+nameValid+"  "+emailValid);
    if(nameValid && emailValid){
        container.style.display = "none";
        welcome.innerHTML = "WELCOME!";
        welcome.style.display = "flex";
    
    }
});

