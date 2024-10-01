// TOGGLE MENU 
const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header-mobile-nav-parent");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headNav.classList.toggle("open");
});


// SCROLL TO TOP
let mybutton = document.getElementById("roll-up");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 600) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


/* LINKS */
const links = document.querySelectorAll(".faqs-dropdown-item h4");
links.forEach((drop) => {
	drop.addEventListener("click", () => {
		drop.nextElementSibling.classList.toggle("open");
		drop.querySelector("i").classList.toggle("open");
	});
});
