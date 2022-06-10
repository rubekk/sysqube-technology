// querySelectors
const passwordInp = document.querySelector(".password-inp");
const showHideIcon = document.querySelector("#show-hide");
const passwordRules = document.querySelectorAll(".password-rules li span");

let showPassword = false;

// function to show or hide password
const handleShowHide=()=>{
	showPassword = !showPassword;
	showHideIcon.className = showHideIcon.className=="fa-solid fa-eye-slash"?"fa-solid fa-eye":"fa-solid fa-eye-slash";

	if(showPassword) passwordInp.setAttribute("type", "text");
	else passwordInp.setAttribute("type","password");
}

// function to validate password
const checkPassword=()=>{
	let password = passwordInp.value;

	// check password length
	if(password.length<12) passwordRules[0].className="remain";
	else passwordRules[0].classList.remove("remain");

	// check for uppercase
	if(!/[A-Z]/.test(password)) passwordRules[1].className="remain";
	else passwordRules[1].classList.remove("remain");

	// check for lowercase
	if(!/[a-z]/.test(password)) passwordRules[2].className="remain";
	else passwordRules[2].classList.remove("remain");

	// check for symbols
	if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)) passwordRules[3].className="remain";
	else passwordRules[3].classList.remove("remain");

	// check for numbers
	if(!/[0-9]/.test(password)) passwordRules[4].className="remain";
	else passwordRules[4].classList.remove("remain");

}

// event listeners
showHideIcon.addEventListener("click", handleShowHide)
passwordInp.addEventListener("input", checkPassword)
