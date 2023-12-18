

inputs = document.querySelectorAll('input.inpt') ;
btn_submit = document.querySelector('.submit > input')
divs = document.querySelectorAll('.form-group') ;
icons = document.querySelectorAll('svg') ;
title = document.querySelector('h3');

function validateInputs() {
    const inputs = document.querySelectorAll('input.inpt') ;

    let allInputsEmpty = true;
  
    for (const input of inputs) {
      if (input.value.trim() === '') {
        allInputsEmpty = false;
        break;  // Exit the loop if a non-empty input is found
      }
    }
  
    if (allInputsEmpty) {
      return true;
    }
  }


submit_active = function () {
    if (validateInputs()) {
        btn_submit.disabled = false;
        btn_submit.style.backgroundColor = '#32630c';
        btn_submit.style.boxShadow = 'black 0px 7px 6px 0px'
   }else {
        btn_submit.disabled = true;
        btn_submit.style.backgroundColor = '#77975e';
        btn_submit.style.boxShadow = ''
   }  
}

effct = function (id) {

    divs.forEach(div => {
        if (div.id == id) {
            div.style.borderBottom = '#7fe332 3px solid' ;
            div.style.transform = 'scale(1.1)'
        }
    });
    icons.forEach(icon => {
        if (icon.id == id) {
            icon.style.color = '#7fe332' ;
        }
    }); 
     
}
no_effct = function (id) {
    divs.forEach(div => {
        if (div.id == id) {
            div.style.borderBottom = '3px #77975e solid' ;
            div.style.transform = 'scaleZ(-1.1)'
        }
    });
    inputs.forEach(i => {
        if (i.name == id) {
           input = i; 
        }
        
    });
    icons.forEach(icon => {
        if (icon.id == id && input.value == '') {
            icon.style.color = '#77975e' ;
        }
    });
}

