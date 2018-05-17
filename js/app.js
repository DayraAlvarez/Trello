var a = document.getElementById('nav-txt');

function create (event) {
  var gettingStarted =document.getElementById('getting-started');
  var secondValue =document.getElementById('second-value');
  secondValue.style.visibility='visible';
  gettingStarted.style.visibility='hidden';
}

a.addEventListener('click', create);

var saveButton =document.getElementById('new-list-button');
saveButton.addEventListener('click', createList);

function createList (){
  var listTittleValue=document.getElementById('second-box').value;
  var newListTitle = document.getElementById('new-list-title');
  newListTitle.value = listTittleValue;
  document.getElementById('second-box').value = '';

}
