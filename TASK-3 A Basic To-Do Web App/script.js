const textInputField = document.querySelector('#text-input-field');
const addButton = document.querySelector('#add-button');
const todosContainer = document.querySelector('.todos-container');

addButton.addEventListener('click', () => {
    if (textInputField.value.trim().length == '')
        return;


    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');

    todosContainer.appendChild(todoItemContainer);

    
    const todoText = document.createElement('p');
    todoText.id = 'todo-text';
    todoText.innerText = textInputField.value;
    todoItemContainer.appendChild(todoText);


    todoText.addEventListener('dblclick', () => {
        todoText.classList.add('line-through');
        editButton.setAttribute("disabled", "disabled");
    })



    
    const editButton = document.createElement('button');
    editButton.id = 'edit-button';
    
    const editImage = document.createElement('img');
    editImage.src = 'edit.svg';
    editButton.appendChild(editImage);
    todoItemContainer.appendChild(editButton);
    
    editButton.addEventListener('click', () => {
        textInputField.value = todoText.innerText;
        const parent = editButton.parentElement;
        parent.parentElement.removeChild(parent);
    });

    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete-button';
    
    const deleteImage = document.createElement('img');
    deleteImage.src = 'delete.svg';
    deleteButton.appendChild(deleteImage);
    todoItemContainer.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        const parent = deleteButton.parentElement;
        parent.parentElement.removeChild(parent);
    });


    textInputField.value = "";

});