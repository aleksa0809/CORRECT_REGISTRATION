let name = 'test';
let pass = '1234';


//how to hide the block
let login = document.getElementById("login");
let logged = document.getElementById("logged");


let username = document.getElementById("username");
let password = document.getElementById("password");

let errorMessage = document.getElementById("errorMessage");



let buttonLogin = document.getElementById("buttonLogin");
buttonLogin.addEventListener('click', log_in);

let buttonLogout = document.getElementById("buttonLogout");
buttonLogout.addEventListener('click', logout);


let currentUser = null;
currentUser = localStorage.getItem("currentUser");
/*if (currentUser) {
    login.style.display = 'none';

} else {
    logged.style.display = 'none';
}*/
logged.style.display = 'none';

function log_in() {

    if (name == username.value && pass == password.value) {
        currentUser = name;
        localStorage.setItem('currentUser', name);
        login.style.display = 'none';
        logged.style.display = 'block'; // pokazivaetsa
    } else {
        showErrorMessage();

    }
}

function showErrorMessage() {

    alert('error');
}


function logout() {

    login.style.display = 'block';
    logged.style.display = 'none';

    currentUser = null;
    localStorage.removeItem("currentUser");
    username.value = "";
    password.value = "";
}