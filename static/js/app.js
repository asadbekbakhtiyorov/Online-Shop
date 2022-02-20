var modalBtn = document.querySelector('.nav-contact');
var modalBg = document.querySelector('.container');
var modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
});

var modalBtn = document.querySelector('.login-menu');
var modalBg = document.querySelector('.container');
var modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

let all = document.getElementById('id');

function toggleCheckbox(id) {
  document.getElementById('select_all').checked = !document.getElementById(id).checked;
}
let changeIcon = function(icon){
  icon.classList.toggle('fa-check-circle')
}

function SelectAll() {
	var a = document.form,
		b = a.elements['CheckBox'],
		c = b.length,
		d,
		e = a.elements['CheckAll'];
	for (d=0; d<c; d++) {
		if (e.checked == true) {
			b[d].checked = true;
		} else {
			b[d].checked = false;
		}
	}
}

// MAP


function sayHi(){
	let map = document.getElementById("map-card").innerHTML = `<div style="width: 100%"><iframe width="90%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=90%25&amp;height=600&amp;hl=en&amp;q=England+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">bike gps</a></iframe></div>`;
}

function sayPi(){
	let map = document.getElementById("map-card").innerHTML = `<div style="width: 100%"><iframe width="90%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=90%25&amp;height=600&amp;hl=en&amp;q=Manchester+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">fitness tracker</a></iframe></div>`;
}

function sayLi(){
	let map = document.getElementById("map-card").innerHTML = `<div style="width: 100%"><iframe width="90%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=90%25&amp;height=600&amp;hl=en&amp;q=Istanbul+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">swimming watch</a></iframe></div>`;
}

function sayMi(){
	let map = document.getElementById("map-card").innerHTML = `<div style="width: 100%"><iframe width="90%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=90%25&amp;height=600&amp;hl=en&amp;q=italy+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">hiking gps</a></iframe></div>`;
}

map.checked = sayHi()


AOS.init()