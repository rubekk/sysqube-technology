// querySelectors
const passwordInp = document.querySelector(".password-inp");
const showHideIcon = document.querySelector("#show-hide");

let showPassword = false;

// function to show or hide password
const handleShowHide=()=>{
	showPassword = !showPassword;
	showHideIcon.className = showHideIcon.className=="fa-solid fa-eye-slash"?"fa-solid fa-eye":"fa-solid fa-eye-slash";

	if(showPassword) passwordInp.setAttribute("type", "text");
	else passwordInp.setAttribute("type","password");
}

showHideIcon.addEventListener("click", handleShowHide)