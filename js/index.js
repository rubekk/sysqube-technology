// query selectors
const hamburger = document.querySelector(".dropdown i");
const dropdownSec = document.querySelector(".responsive-dropdown");

let showDropdown = false;

// function to handle dropdown
const handleDropdown=()=>{
	showDropdown = !showDropdown;
	hamburger.className = hamburger.className=="fa-solid fa-bars"?"fa-solid fa-times":"fa-solid fa-bars";

	if(showDropdown) dropdownSec.style.display = "flex";
	else dropdownSec.style.display = "none";
}

hamburger.addEventListener("click", handleDropdown)