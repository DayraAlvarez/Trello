var hola = alert("Please enter your name");
// Al hacer click en boton
var startAdding =  document.getElementById('new-task-button');
var addList = document.getElementById('nav-txt').value;
//Tomar texto ingresado
startAdding.addEventListener('click', function(){
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
});
//Creacion de nodos de texto en html
//var yourNewList = document.createElement(addList);

var elementContainer = document.createElement('p');
//elementContainer.appendChild(yourNewList);
//newList.appendChild(elementContainer);

//cont.appendChild(newList);
