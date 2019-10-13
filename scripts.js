var name = "test";
var password = "1234";

function ready() {
	
	var logged = document.getElementById("logged");
	var fail = document.getElementById("fail");

	var lName = localStorage.getItem("name");
	var lPass = localStorage.getItem("password");
	console.log(lName,lPass);
	if(name == lName && password == lPass){
		logged.style.display = 'block';
	}

	var btn = document.getElementById("login-btn");	
	btn.addEventListener("click", function(event){
		event.preventDefault();		
		var username = document.getElementById("username").value;
		var userpass = document.getElementById("userpass").value;
		if(username == '' || userpass == ''){
			alert('empty');
		}else{
			if(name == username && password == userpass){
				localStorage.setItem("name", username);
				localStorage.setItem("password", userpass);
				logged.style.display = 'block';
				fail.style.display = 'none';
			}
			else if(name != username || password != userpass){
				fail.style.display = 'block';
			}else{
				return false;
			}
		}		
	});		
}

document.addEventListener("DOMContentLoaded", ready);