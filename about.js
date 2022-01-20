

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('img')

image.addEventListener("mouseover", myFunction);

function myFunction() {
  alert ("Your so smart!");
}


