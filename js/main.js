const display = document.getElementById("display");

function appendtoDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function clearEntry() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    // Handle the error, such as displaying an error message to the user
    display.value = "Error";
  }
}
