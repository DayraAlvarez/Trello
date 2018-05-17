

  var addList = document.getElementById('add-list');
  addList.addEventListener('click', function(){
    addList.style.display="none";
    document.getElementById('add-list-form').style.display="block";
  });


  var saveList =document.getElementById('save-list');
  saveList.addEventListener('click', function(){
    document.getElementById('add-list-form').style.display="none";
    var listTitleValue=document.getElementById('new-list-title').value;
    document.getElementById('list-title').textContent=listTitleValue;
    document.getElementById('task').style.display="block";

  });


  var addTask = document.getElementById('task');
    addTask.addEventListener('click', function(){
    document.getElementById('new-task').style.display="block";
    addTask.style.display="none";
  });

  var saveTask= document.getElementById('save-new-task-button');
  saveTask.addEventListener('click',function(){
    var createNewTask=document.getElementById('save-new-task-content').value;
    var newTask=document.createElement('p');
    newTask.textContent=createNewTask;
     document.getElementById('father').appendChild(newTask);
      //obtener el valor del input
      //CREAR UN NUEVO P CON ESE CONTENIDO
      //inserarlo
      //VACIAR EL CONTENIDO DEL FORMULARIO
      //DEVOLVER EL FOCUS AL Formulario
  });
