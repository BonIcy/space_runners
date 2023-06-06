import animation from "../storage/animation.js";
import  myTeam from "./myTeam.js";

myTeam.muestraTeam();

animation.show();
let navbarToggler = document.querySelector('.navbar-toggler');
let navbarNav = document.querySelector('.navbar-nav');

navbarToggler.addEventListener('click', () => {
  navbarToggler.classList.toggle('open');
  navbarNav.classList.toggle('open');
});


// parte de tecnologias


const classIsAnimated = 'isAnimated';
const elLinks = document.getElementsByClassName('sn-link');
const elLinksLength = elLinks.length;
const elTitle = document.getElementsByClassName('sn-title')[0];
const elDescr = document.getElementsByClassName('sn-descr')[0];
const originalTitle = elTitle.textContent;
const originalDescr = elDescr.textContent;


for (let i = 0; i < elLinksLength; i++) {
	const thisLink = elLinks[i];
   
	thisLink.addEventListener('mouseenter', activeContact, false);
	thisLink.addEventListener('focus', activeContact, false);
	
	thisLink.addEventListener('mouseleave', resetContacts, false);
	thisLink.addEventListener('blur', resetContacts, false);
}

function activeContact(e) {
	const title = e.target.getAttribute('data-title');
	elTitle.textContent = title;
	elDescr.textContent = e.target.getAttribute('data-descr');
	
	// add a aria-label with a  ':' after the social network name
	// to force SR to make a pause before spelling the description
	elTitle.setAttribute('aria-label', `${title}:`);
	
	blinkText();
}

function resetContacts() {
	elTitle.textContent = originalTitle;
	elDescr.textContent = originalDescr;
	elTitle.removeAttribute('aria-label');

	blinkText();
}

function blinkText() {
	elTitle.classList.remove(classIsAnimated);
	elDescr.classList.remove(classIsAnimated);
	
	setTimeout(function(){
		elTitle.classList.add(classIsAnimated);
		elDescr.classList.add(classIsAnimated);
	}, 10);
}