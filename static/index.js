// Function to append digits or operators to the display
function appendToDisplay(value) {
  let display = document.querySelector("#resultDisplay");
  if (display.value === '0' && value !== '.' && value !== '=') {
    display.value = value; // If it's the first digit, replace 0
  } else {
    display.value += value; // Otherwise, just append
  }
}

// Function to clear the display
function clearDisplay() {
  document.querySelector("#resultDisplay").value = '0';
}

// Function to perform the calculation when '=' is pressed
function calculate() {
  let display = document.querySelector("#resultDisplay");
  try {
    display.value = eval(display.value); // Using eval to evaluate the expression
  } catch (e) {
    display.value = 'Error'; // In case of an error (e.g., invalid syntax)
  }
}