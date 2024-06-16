let todoForm = document.querySelector('.todoForm');
let activeTodoList = document.querySelector('.activeTodoList');
let activeTodoCount = document.querySelector('.activeTodoCount');
let silme = document.querySelector('#silme');
let ekle = document.querySelector('#ekle');
let studentList = [];
let activeTodoCounter = 0; 

if(typeof localStorage.studentList !== 'undefined') {
  studentList = JSON.parse(localStorage.studentList);
  renderStudents();
}

function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(todoForm);
  let formObj = Object.fromEntries(formData);
  studentList.push(formObj);
  todoForm.reset();
  save();
  renderStudents();
}

ekle.addEventListener('click', handleFormSubmit);

function save() {
  localStorage.studentList = JSON.stringify(studentList);
}

function renderStudents() {
  activeTodoList.innerHTML = '';
  for(let i = 0; i < studentList.length; i++) {
    activeTodoList.innerHTML += `<li><span>${studentList[i].todo}</span><button>✔</button><button>🗑</button></li>`;
  }
}

function deleteItem() {
  localStorage.clear();
}

silme.addEventListener("click", deleteItem);





