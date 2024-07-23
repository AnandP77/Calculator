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
      
