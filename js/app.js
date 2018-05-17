

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
    document.getElementById('add-task').style.display="block";
  });
