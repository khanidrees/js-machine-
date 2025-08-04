const input = document.querySelector('#display');
const numpad = document.querySelector('#numpad');

//TODOS : 
// turn off keyboard ! Done
//clear button Done

input.readOnly = true;

numpad.addEventListener('click',(e)=>{
  const value = e.target.textContent;
  if(value === '=' ){
    if(input.value ==='') return;
    const result = Function('"use strict";return (' + input.value + ')')();
    if (result === Infinity || result === -Infinity || isNaN(result)) {
      return input.value = 'Error';
    } else {
      return input.value = result;
    }
  }
  if(value == 'clear'){
    return input.value = '';
  }
  console.log(value + '  '+ typeof value);
  if(value !== ''){
    input.value += value; 
  }

  
})