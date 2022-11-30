 
							 
document.forms.RegForm.addEventListener('submit',(event)=>{
event.preventDefault();

alert('submit called');
debugger;
let name1 =document.getElementsByName("Name").innerText;
var email =
    document.getElementsByName("Email").innerText;
var phone =
    document.getElementsByName("Telephone").innerText;
var what =
    document.getElementsByName("course").innerText;
var password =
    document.getElementsByName("Password").innerText;
var address =
    document.getElementsByName("Address").innerText;

    let nameHelp = document.getElementById('nameHelp');
    let addressHelp = document.getElementById('addressHelp');
    let emailHelp = document.getElementById('emailHelp');
    let passwordHelp = document.getElementById('passwordHelp');

    let phoneHelp = document.getElementById('phoneHelp');
    let courseHelp = document.getElementById('courseHelp');
    

var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
var regPhone=/^\d{10}$/;									 
var regName = /\d+$/g;	

debugger;
				if (name1 == "" || regName.test(name1)) {
					//window.alert("Please enter your name properly.");
                    nameHelp.innerText = "Please enter your name properly.";
					name.focus();
					
				}

				if (address == "") {
					//window.alert("Please enter your address.");
                    addressHelp.innerText = "Please enter your address."
					address.focus();
					
				}
				
				if (email == "" || !regEmail.test(email)) {
					//window.alert("Please enter a valid e-mail address.");
                    emailHelp.innerText = "Please enter a valid e-mail address.";
					email.focus();
					
				}
				
				if (password == "") {
					//alert("Please enter your password");
                    passwordHelp.innerText = "Please enter your password";
					password.focus();
					
				}

				if(password.length <6){
					//alert("Password should be atleast 6 character long");
                    passwordHelp.innerText = "Password should be atleast 6 character long";
					password.focus();
				

				}
				if (phone == "" || !regPhone.test(phone)) {
					//alert("Please enter valid phone number.");
                    phoneHelp.innerText = "Please enter valid phone number."
					phone.focus();
					
				}

				if (what.selectedIndex == -1) {
					//alert("Please enter your course.");
                    courseHelp.innerText = "Please enter your course."
					what.focus();
				
				}

})
		
