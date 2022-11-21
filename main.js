

const macLogin = document.querySelector("#link");
const windowLogin = document.querySelector("#button");

if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    alert("Mac"); // You can do whatever here
    windowLogin.style.display = "none";
    macLogin.addEventListener("click", macValidate);
    console.log(macLogin);

} else {
    alert("Windows"); // You can do whatever here
    macLogin.style.display = "none";
    windowLogin.addEventListener("click", windowsValidate);
    console.log(windowLogin);
}


//macLogin.addEventListener("click", validate);
function macValidate() {


    console.log('hello');
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    
    if (username.value == "admin" && password.value == "admin") {
        macLogin.href='Hello.html';
        alert("Login successfully");
    }
    else if (username.value == "" && password.value == "") {
        alert("Please type something");
        macLogin.href='';
    }  
    else {
        alert("Invalid username or password");
        return false;
    } 
}

function windowsValidate() {
    var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "admin" && password == "admin") {		
		window.location.assign("Hello.html");
	   	alert("Login successfully");
	} else {
	alert("Invalid username or password");
	   return false;
	}
}