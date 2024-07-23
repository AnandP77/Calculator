    // let input = document.getElementById('inputBox');
    // let buttons = document.querySelectorAll('button');

    // let string = "";
    // let arr = Array.from(buttons);
    // arr.forEach(button => {
    //     button.addEventListener('click', (e) =>{
    //         if(e.target.innerHTML == '='){
    //             string = eval(string);
    //             input.value = string;
    //         }

    //         else if(e.target.innerHTML == 'AC'){
    //             string = "";
    //             input.value = string;
    //         }
    //         else if(e.target.innerHTML == 'DEL'){
    //             string = string.substring(0, string.length-1);
    //             input.value = string;
    //         }
    //         else{
    //             string += e.target.innerHTML;
    //             input.value = string;
    //         }
            
    //     })
    // })
    document.getElementById('theme-toggle').addEventListener('change', (event) => {
        document.body.classList.toggle('dark', event.target.checked);
      });
      
      let display = document.getElementById('display');
      let currentInput = '';
      
      function appendNumber(number) {
        currentInput += number;
        updateDisplay();
      }
      
      function appendOperator(operator) {
        currentInput += ` ${operator} `;
        updateDisplay();
      }
      
      function appendDot() {
        if (!currentInput.includes('.')) {
          currentInput += '.';
        }
        updateDisplay();
      }
      
      function clearDisplay() {
        currentInput = '';
        updateDisplay();
      }
      
      function deleteDigit() {
        currentInput = currentInput.trim(); // Trim spaces
        currentInput = currentInput.slice(0, -1); // Remove last character
        updateDisplay();
      }
      
      function calculate() {
        try {
          currentInput = eval(currentInput).toString();
          if (currentInput === 'Infinity' || currentInput === 'NaN') {
            currentInput = 'Error';
          }
        } catch {
          currentInput = 'Error';
        }
        updateDisplay();
      }
      
      function updateDisplay() {
        display.textContent = currentInput || '0';
      }
      