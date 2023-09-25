// 1.- Save inputs in variables

const yearInput = document.querySelector('[data-js="year"]');
const incomeInput1 = document.querySelector('[data-js="taxable-income1"]');
const incomeInput2 = document.querySelector('[data-js="taxable-income2"]');
const radioChoiceInput1 = document.querySelector('[data-js="one-person"]');

// 2. Save output in variables
const outputContainer = document.querySelector('[data-js="output-container"]');

// 3. Variables of inputs container

const income2Wrapper = document.querySelector('[data-js="income2-wrapper"]');
console.log({ income2Wrapper });

// 4. Function for Visibility of second input if radio choice 1 is false:

const displayChoice = () => {
  // 3.1 Save Boolean of the radio choice
  let booleanRadio = radioChoiceInput1.checked;
  //3.2 Display the options of the 2nd input Container or not
  booleanRadio
    ? (income2Wrapper.style.display = "none")
    : (income2Wrapper.style.display = "block");
};

// -------------------MAIN FUNCTION--------------
