/* 
CO3: JavaScript Programming Essentials
Concepts Used:
- Arrays
- Objects
- Variables
- Basic expressions
*/

const users = [
{username:"admin", password:"admin123", role:"admin"},
{username:"user", password:"user123", role:"user"}
];

/*
CO4: JavaScript Interactivity & DOM
Concepts Used:
- DOM manipulation
- Event handling (button click calls login())
*/

function login(){

/*
CO3: Variables and Operators
*/
let uname = document.getElementById("username").value;
let pass = document.getElementById("password").value;

/*
CO3: Variable initialization
*/
let foundUser = null;

/*
CO3: Loop Concept
Concept Used: for loop to search user
*/
for(let i=0;i<users.length;i++){

/*
CO3: Conditional Statements
Concept Used: if condition for validation
*/
if(users[i].username === uname && users[i].password === pass){
foundUser = users[i];
break;
}

}

/*
CO4: DOM Manipulation
Concept Used: Changing page content dynamically
*/
if(foundUser){

document.getElementById("loginPage").classList.add("hidden");

/*
CO3: Conditional Logic
CO4: DOM interaction
*/
if(foundUser.role === "admin"){
document.getElementById("adminPage").classList.remove("hidden");
}
else{
document.getElementById("userPage").classList.remove("hidden");
}

}
else{

/*
CO5: Form Validation with JavaScript
Concept Used: Displaying error message for invalid login
*/
document.getElementById("message").innerText = "Invalid Username or Password";

}

}

/*
CO4: DOM Event Handling
CO5: Handling user input dynamically
*/

function logout(){

document.getElementById("adminPage").classList.add("hidden");
document.getElementById("userPage").classList.add("hidden");

document.getElementById("loginPage").classList.remove("hidden");

}
