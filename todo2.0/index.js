const input = document.querySelector('#titleinpt');
const addBtn = document.querySelector('#addbtn');
const list = document.querySelector('#list');

// Store completed status in the array
const todoList = [
  { text: 'first', completed: false },
  { text: 'second', completed: false },
  { text: 'third', completed: false }
];

// Render all todos from the array
function renderTodos() {
  list.innerHTML = '';
  todoList.forEach((item, idx) => {
    const li = document.createElement('li');
    if (item.completed) li.classList.add('completed');
    li.id = idx;
    const span = document.createElement('span');
    span.textContent = item.text;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.type = 'button';
    deleteBtn.setAttribute('data-action', 'delete');
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  //optimization 
  // const fragment = document.createDocumentFragment();
  // todoList.forEach((item, idx) => {
  //   const li = document.createElement('li');
  //   if (item.completed) li.classList.add('completed');
  //   li.id = idx;
  //   // ... rest as before ...
  //   fragment.appendChild(li);
  // });
  // list.innerHTML = '';
  // list.appendChild(fragment);
}

// Add item
function addItem(value) {
  if (!value) return;
  todoList.push({ text: value, completed: false });
  renderTodos();
  input.value = '';
  input.focus();
}

// Delete item
function deleteItem(id) {
  todoList.splice(Number(id), 1);
  renderTodos();
}

// Event listeners
addBtn.addEventListener('click', () => {
  addItem(input.value.trim());
});

list.addEventListener('click', (e) => {
  const action = e.target.getAttribute('data-action');
  if (action === 'delete') {
    return deleteItem(e.target.parentNode.id);
  }
  // Toggle completed
  let li;
  if (e.target.tagName === 'LI') li = e.target;
  if (e.target.tagName === 'SPAN') li = e.target.parentNode;
  if (li) {
    const idx = Number(li.id);
    todoList[idx].completed = !todoList[idx].completed;
    renderTodos();
  }
});

// Optional: add via Enter key
input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addItem(input.value.trim());
});

// Initial render
renderTodos();
