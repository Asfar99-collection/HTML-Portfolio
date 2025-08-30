const title = document.getElementById("title");
const namefield = document.getElementById("nameField");
const loginButton = document.getElementById("loginButton");
const signupbutton = document.getElementById("signupbutton");

signupbutton.onclick = function(){
    title.innerHTML ="Signup";
    namefield.style.display = "block";

}
loginButton.onclick = function(){
    title.innerHTML ="Login";
    namefield.style.display = "none";

}
