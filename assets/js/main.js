const date_number = document.getElementById('date_number');
const date_text = document.getElementById('date_text');
const date_month = document.getElementById('date_month');
const date_year = document.getElementById('date_year');

const tasks_container = document.getElementById('tasks_container');

const setDate = () => {
 const date = new Date();
 date_number.textContent = date.toLocaleDateString('es', {day: 'numeric'});
 date_text.textContent = date.toLocaleDateString('es', {weekday: 'long'});
 date_month.textContent = date.toLocaleDateString('es', {month: 'short'});
 date_year.textContent = date.toLocaleDateString('es', {year: 'numeric'});
}

const addTask = event => {
 const {value} = event.target.task;
 if(!value) return;

 const task = document.createElement('div');
 task.classList.add('task', 'round_border');
 task.addEventListener('click', changeTaskState);
 task.textContent = value;
 tasks_container.prepend(task);
 
 event.preventDefault();
 event.target.reset();
}

const changeTaskState = event => {
 event.target.classList.toggle('done');
}

const order = () => {
 const done = [];
 const todo = [];

 tasks_container.childNodes.forEach(n => {
  n.classList.contains('done') ? done.push(n) : todo.push(n);
 });

 return [...todo, ...done];
}

const orderedTasks = () => {
 order().forEach(n => tasks_container.appendChild(n));
}

setDate();