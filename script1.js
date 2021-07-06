const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');


buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});


function calculate(event) {


  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === 'Answer') {


    if (display.value !== '') {


      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'Reset') {

    display.value = '';
  }
else if (clickedButtonValue === 'C') {


 
display.value = display.value.substring(0, display.value.length-1)
  }
  else {

    display.value += clickedButtonValue;
  }
}