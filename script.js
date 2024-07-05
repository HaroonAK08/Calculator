function appendToDisplay(value){
    document.getElementById('display').value += value;
}

function clearDisplay(){
    document.getElementById('display').value = '';
}

function calculateResult(){
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
    }
    catch(error){
document.getElementById('display').value = 'Error';
    }
}

// function appendToDisplay(value){
//     var display = document.getElementById('display');
//     // Allowing operators, but not if the display is empty or ends with an operator
//     if(!isNaN(value) || value === '.' || (display.value !== '' && isNaN(display.value.slice(-1)))) {
//         display.value += value;
//     }
// }


function clearDisplay1() {
    var display = document.getElementById('display');
    var currentValue = display.value;
    display.value = currentValue.substring(0, currentValue.length - 1);
}
  
  function toggleDarkTheme(){
    var body = document.body;
    var checkbox = document.getElementById("themeToggle");
    if(checkbox.checked){
        body.classList.add("dark-theme");
    }
    else{
        body.classList.remove("dark-theme");
    }
    }
  