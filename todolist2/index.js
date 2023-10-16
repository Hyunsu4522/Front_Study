document.addEventListener("DOMContentLoaded", function () {
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

    function saveTodoList() {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    function loadTodoList() {
        const toDoListView = document.querySelector('#todo-list-view');
        toDoListView.innerHTML = '';
        todoList.forEach(function (todoTitle) {
            const todoNode = getTodoNode(todoTitle);
            toDoListView.appendChild(todoNode);
        });
    }

    function getTodoNode(todoTitle) {
        const todoNode = document.createElement('div');
        todoNode.innerText = todoTitle;
        todoNode.onclick = function () {
            todoNode.isDone = !todoNode.isDone;
            if (todoNode.isDone) {
                this.className = 'done';
            } else {
                this.className = '';
            }
        }

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>";
        todoNode.appendChild(removeBtn);
        removeBtn.onclick = function () {
            const index = todoList.indexOf(todoTitle);
            if (index !== -1) {
                todoList.splice(index, 1);
                saveTodoList();
                loadTodoList();
            }
        }

        return todoNode;
    }

    function addTodo() {
        const inputElement = document.getElementById('search-input');
        const inputValue = inputElement.value.trim();
        if (inputValue !== '') {
            todoList.push(inputValue);
            saveTodoList();
            const todoNode = getTodoNode(inputValue);
            document.getElementById('todo-list-view').appendChild(todoNode);
            inputElement.value = '';
        }
    }

    document.querySelector('button').addEventListener('click', addTodo);


    document.getElementById('search-input').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addTodo();
        }
    });


    loadTodoList();
});