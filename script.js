let display = document.getElementById("display");
let currentValue = "0"; // Inicialize com 0
let currentOperator = "";
let previousValue = "";

function appendToDisplay(value) {
  if (currentValue === "0") {
    currentValue = value; // Substitua 0 pelo primeiro dígito
  } else {
    currentValue += value;
  }
  display.textContent = currentValue;
}

function clearScreen() {
  currentValue = "0"; // Reinicialize com 0
  previousValue = "";
  currentOperator = "";
  display.textContent = currentValue;
}

function deleteLastCharacter() {
  if (currentValue.length > 1) {
    currentValue = currentValue.slice(0, -1);
  } else {
    currentValue = "0"; // Se houver apenas um dígito, reinicialize com 0
  }
  display.textContent = currentValue;
}

function calculateResult() {
  previousValue = currentValue;
  currentValue = eval(currentValue);
  display.textContent = currentValue;
}
