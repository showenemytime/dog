let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');


priority.onclick = function () {
priority.classList.toggle('is-important')
if(priority.classList.contains('is-important')) {
priority.textContent ='Важная задача';
} else {
priority.textContent='Обычная задача';
}
};

form.onsubmit = function (evt) {
evt.preventDefault();

let newTask = document.createElement('li'); 
newTask.classList.add('li');
newTask.textContent = input.value;
input.value='';

if(priority.classList.contains('is-important')) {
newTask.classList.add('is-important')
};

list.append(newTask);
};


/*
1. При каждом клике у переключателя приоритета (переменная priority) переключается класс is-important. Если класс есть, то приоритет высокий, если класса нет, то обычный.
2. Если приоритет высокий, то текстовое содержимое у переключателя — 'Важная задача'. Если приоритет обычный, то текстовое содержимое — 'Обычная задача'.
3. Каждая задача в списке — это элемент li. При отправке формы (переменная form) новая задача добавляется в конец списка (переменная list).
4. Текст задачи берётся из поля ввода (переменная input).
5. Если выставлен высокий приоритет, то новой задаче добавляется класс is-important.
6. Бонусное задание: после того, как задача добавится в список, поле ввода можно очистить. Но можно не очищать. Кекса устроят оба варианта.
*/
