var a = document.getElementById('nav-txt');

function create (event) {
  var gettingStarted =document.getElementById('getting-started');
  var secondValue =document.getElementById('second-value');
  secondValue.style.visibility='visible';
  gettingStarted.style.visibility='hidden';
}

a.addEventListener('click', create);

var b = document.getElementById('nav-txt-two');

function createNew (event) {
  var gettingStarted =document.getElementById('getting-started-two');
  var secondValue =document.getElementById('second-value-two');
  secondValue.style.visibility='visible';
  gettingStarted.style.visibility='hidden';
}

b.addEventListener('click', createNew);
