document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Add new to-do item
    addButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="edit-btn">✎</button>
                <button class="remove-btn">✕</button>
            `;
            todoList.appendChild(listItem);
            todoInput.value = ''; // Clear input field

            // Add event listener to remove button
            const removeButton = listItem.querySelector('.remove-btn');
            removeButton.addEventListener('click', () => {
                todoList.removeChild(listItem);
            });

            // Add event listener to edit button
            const editButton = listItem.querySelector('.edit-btn');
            editButton.addEventListener('click', () => {
                const newTaskText = prompt('Edit your task:', taskText);
                if (newTaskText !== null) {
                    listItem.querySelector('.task-text').textContent = newTaskText;
                }
            });
        }
    });

    // Add task with Enter key
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
