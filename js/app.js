

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
  });





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
    newListTitle.value = listTitleValue;
    document.getElementById('second-box').value = '';

  }
