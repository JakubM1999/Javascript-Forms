let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let firstName = id("firstName"),
lastName = id("lastName"),
username = id("username"),
email = id("email"),
dateOfBirth = id("dateOfBirth"),
password = id("password"),
form = id("form"),
  
error = classes("error"),
yesIcon = classes("yesIcon"),
cancelIcon = classes("cancelIcon");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    engine(firstName, 0, "First name cannot be blank")
    engine(lastName, 1, "Last name cannot be blank")
    engine(username, 2, "Username cannot be blank")
    engine(email, 3, "E-mail cannot be blank")
    engine(dateOfBirth, 4, "Date of birth cannot be blank")
    engine(password, 5, "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters")
});

let engine = (id, serial, message) => {

    if(id.value.trim() === "") {
        error[serial].innerHTML = message;
        id.style.border = "2px solid #B50000";
        id.style.backgroundColor = "#F0CCCC"

        //Icons
        cancelIcon[serial].style.opacity = "1";
        yesIcon[serial].style.opacity = "0";
    }

    else{
        error[serial].innerHTML = "";
        id.style.border = "2px solid #009B19";
        id.style.backgroundColor = "#CCEBD1"


        //Icons
        cancelIcon[serial].style.opacity = "0";
        yesIcon[serial].style.opacity = "1";
    }
}

