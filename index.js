// Method one

// let display = document.getElementById('display');  // 🔹 This line selects the <input> element (the   calculator screen) and stores it in a variable called display.You will use display.value to show or update the numbers and results.


//   function append(value) {
//     display.value += value;
//   }

//   function clearDisplay() {
//     display.value = '';
//   }

//   function calculate() {
//     try {
//       display.value = eval(display.value);
//     } catch {
//       display.value = 'Error';
//     }
//   }

//   let display = document.getElementById('display');
  

 

//   function append(value) {
//     display.value += value; 
//   }

//   function clearDisplay() {
//     display.value = '';
//   }

//  function calculate() {
//     try {
//       display.value = eval(display.value);
//     } catch {
//       display.value = 'Error';
//     }
//   }

  // calculate();

 let display = document.getElementById("display");
//  console.log(display);

function append(value){
  display.value += value;
}

function clearDisplay(value){
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value)
  } catch {
    display.value = 'Error';
  }
}