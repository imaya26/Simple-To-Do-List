document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;

        li.addEventListener('click', function(e) {
            if (e.target !== li.querySelector('.delete-btn')) {
                li.classList.toggle('completed');
            }
        });

        li.querySelector('.delete-btn').addEventListener('click', function() {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }
});