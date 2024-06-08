document.getElementById('btn').addEventListener('click', function() {
  let input = document.getElementById('input');
  let todoText = input.value.trim();

  if (todoText !== "") {
      let todoList = document.getElementById('todo-list');
      let listItem = document.createElement('li');
      listItem.textContent = todoText;

      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function() {
          todoList.removeChild(listItem);
      });

      listItem.appendChild(deleteBtn);
      todoList.appendChild(listItem);

      todoInput.value = "";
  }
});