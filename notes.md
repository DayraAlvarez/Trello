html

<section id="form-two" class="column" >
  <div id="second-value-two" class="box">
    <input id="new-list-title" type="text" class="input-button" value="titulo"/>
      <a href " ">Ingresa una lista nueva </a>
    <button type="button" id="new-list-button-two" class="section-button">Guardar</button>
    <button type="button" id="delete-task-button-two"> X </button>
</div>
</section>
  <section id="form-one" class="column" >
    <div id="getting-started" class="first-box">
      <button id="nav-txt">&#9825; Agregue una nueva lista</button>
    </div>
    <div id="second-value" class="box" style="visibility:hidden;">
      <input  style="text" id="second-box" class="creating"/>
      <button type="button" id="new-list-button" class="section-button">Guardar</button>
      <button type="button" id="delete-task-button"> X </button>
  </div>
  </section>

  CSS

  .first-box{
    background-color: #026AA7;
    display: inline-block;
    color: white;
    border-radius: 4px;
    left:1%;
    padding: 1em 1em;
    position: relative;

  }

  #new-task{
    border-radius: 4px;
    border:none;
  }

  .section-button{
    background-color:#4CAF50;
    border-radius: 4px;
    border:none;
    color:white;
    cursor:pointer;
    font-family: helvetica;
    padding: 8px 10px;
    position: relative;
  }

  .section-button:hover{
    background-color: #54c358;
  }

  .column {
    width: 25%;
    height: 600px;
    float: left;
  }

  .box{
    display: block;
    position: relative;
    background-color:#bcd6dd;
    border-radius: 4px;
    padding:5% 5%;
    margin:6px;
  }

  .creating {
    width: 100%
  }

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
