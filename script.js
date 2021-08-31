const form = document.getElementById('email')
var input=document.getElementsByClassName('input')
var input2=document.getElementsByClassName('error-message')
var button=document.getElementsByTagName('button')
var icon=document.getElementsByClassName('icon-error')

function setErrorFor(input) {
	// const formControl = input.parentElement;
	// const small = formControl.querySelector('small');
	// formControl.className = 'input error';
	// small.innerText = message;
	input2[0].style.display="inline"
	input[0].classList.add('error')
	icon[0].classList.add('icon-show')
	
}
function setSuccessFor(input) {
	// const formControl = input.parentElement;
	// formControl.className = 'form-control success';
	input2[0].style.display="none"
	input[0].classList.remove('error')
	icon[0].classList.remove('icon-show')
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function checkInputs() {
  // trim to remove the whitespaces
  var inputValue = input[0].value.trim();

  if(inputValue === '') {
	setErrorFor(input);
} else if (!isEmail(inputValue)) {
	setErrorFor(input);
} else {
	setSuccessFor(input);
}
}

//for anyone that checks this godawful code, just now that 75% of it was copy pasted from Florin Pop, thank god for that guy