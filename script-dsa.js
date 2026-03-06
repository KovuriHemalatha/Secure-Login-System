const users = [
{username:"admin", password:"admin123", role:"admin"},
{username:"user", password:"user123", role:"user"}
];

function login(){

let uname=document.getElementById("username").value;
let pass=document.getElementById("password").value;

let foundUser=null;

for(let i=0;i<users.length;i++){

if(users[i].username===uname && users[i].password===pass){
foundUser=users[i];
break;
}

}

if(foundUser){

document.getElementById("loginPage").classList.add("hidden");

if(foundUser.role==="admin"){
document.getElementById("adminPage").classList.remove("hidden");
}
else{
document.getElementById("userPage").classList.remove("hidden");
}

}
else{
document.getElementById("message").innerText="Invalid Username or Password";
}

}

function logout(){

document.getElementById("adminPage").classList.add("hidden");
document.getElementById("userPage").classList.add("hidden");

document.getElementById("loginPage").classList.remove("hidden");

}