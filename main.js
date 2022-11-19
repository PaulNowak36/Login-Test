const username = document.querySelector("#username");
const password = document.querySelector("#password");
const login = document.querySelector("#button");

console.log(login);

console.log(username);

console.log(password);


login.addEventListener("click", validate);
function validate() {


    console.log('hello');
    
    if (username.value == "admin" && password.value == "admin") {
        login.href='Hello.html';
        alert("Login successfully");

        //window.location("Hello.html");
	    //alert("Login successfully");
    }
    else if (username.value == "" && password.value == "") {
        login.href='';
    }  
    else {
        alert("Invalid username or password");
        return false;
    } 
}