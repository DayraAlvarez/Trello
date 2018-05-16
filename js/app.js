var person = prompt("Please enter your name");
// Al hacer click en boton
var startAdding =  document.getElementById('new-task-button');
//Tomar texto ingresado
startAdding.addEventListener('click', function(){
  var addList = document.getElementById('nav-txt').value;
  document.getElementById('nav-txt').value = '';
//Contenedor en HTML
  var cont = document.getElementById('cont');
//Crear contenido en div
	var newList = document.createElement('div');
//Validar ingresar texto
if(addList.length == 0 || addList == null) {
  alert('Ingresa un nombre de lista');
  return false;
}
//Creaicion de nodos de texto en html
var yourNewList = document.createElement(addList);

var elementContainer = document.createElement('p');
elementContainer.appendChild(yourNewList);
newList.appendChild(elementContainer);

cont.appendChild(newList);
