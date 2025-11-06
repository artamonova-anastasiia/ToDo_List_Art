function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Будь ласка, введіть завдання.");
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    const completeButton = document.createElement('button');
    completeButton.textContent = '✔️';
    completeButton.className = 'complete-btn-new';
    completeButton.onclick = function() {
        taskSpan.classList.toggle('completed');
    };

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(completeButton);
    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
    taskInput.value = '';
}