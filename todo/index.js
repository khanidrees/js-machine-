const list = document.querySelector('#list');
const input = document.querySelector('#titleinp');
const addBtn = document.querySelector('#addbtn');

const todolist = [];

list.addEventListener('click',(e)=>{
  const element = e.target;
  const action = element.getAttribute('data-action');
  if(action ==='delete'){
    return deleteItem(element.parentNode);
  } 
  if(action ==='complete'){
     element.parentElement.classList.toggle('completed');
  }
})

addBtn.addEventListener('click',(e)=>{
  const val = input.value.trim();// remove spaces deom both sides
  if(!val) return;
  
  const listItem = createItem(val);
  list.appendChild(listItem);
  input.value = ''; // clear input after adding
  input.focus(); // return focus for faster input

});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addBtn.click();
  }
});

function createItem(val){
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = val;

  //completed and delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  const completeBtn = document.createElement('button');
  completeBtn.innerText = 'Complete';
  
  completeBtn.setAttribute('data-action', 'complete');
  deleteBtn.setAttribute('data-action', 'delete');

  completeBtn.type = 'button';
  deleteBtn.type = 'button';

  listItem.appendChild(span);
  listItem.appendChild(completeBtn);
  listItem.appendChild(deleteBtn);
  return listItem;
}

function deleteItem(element){
  element.remove();
}
