// 1.- Save inputs in variables

const yearInput = document.querySelector('[data-js="year"]');
const incomeInput1 = document.querySelector('[data-js="taxable-income1"]');
const incomeInput2 = document.querySelector('[data-js="taxable-income2"]');
const radioChoiceInput1 = document.querySelector('[data-js="one-person"]');

// 2. Save output in variables
const outputContainer = document.querySelector('[data-js="output-container"]');

// 3. Variables of inputs container

const income2Wrapper = document.querySelector('[data-js="income2-wrapper"]');

// 4. Function for Visibility of second input if radio choice 1 is false:

const displayChoice = () => {
  // 3.1 Save Boolean of the radio choice
  let booleanRadio = radioChoiceInput1.checked;
  //3.2 Display the options of the 2nd input Container or not
  booleanRadio
    ? (income2Wrapper.style.display = "none")
    : (income2Wrapper.style.display = "block");
};

// -------------------Help Variables for all years--------------

let tax, income, y, z;
let incomeA, incomeB, incomeC, incomeD;
let A, B, C, D, E;

// ------ Main Function for all years--------------------

// case 1
if (income <= incomeA) {
  tax = 0;
  // case 2
} else if (incomeA + 1 <= income <= incomeB) {
  y = (income - incomeA) / 10000;
  tax = (A * y + 1400) * y;
  // case 3
} else if (incomeB + 1 <= income <= incomeC) {
  z = (income - incomeB) / 10000;
  tax = (B * z + 2397) * z + C;
  // case 4
} else if (incomeC + 1 <= income <= incomeD) {
  tax = 0.42 * income - D;
  // case 5
} else if (income >= incomeD + 1) {
  tax = 0.45 * income - E;
}

// --- Values for all the years

switch (true) {
  // -----------------------2023
  case year === 2023:
    incomeA = 10908;
    incomeB = 15999;
    incomeC = 62809;
    incomeD = 277825;
    // -
    A = 979.18;
    B = 192.59;
    C = 966.53;
    D = 9972.98;
    E = 18307.73;
    break;
  // -----------------------2020
  case year === 2022:
    incomeA = 10347;
    incomeB = 14926;
    incomeC = 58596;
    incomeD = 277825;
    // -
    A = 1088.67;
    B = 206.43;
    C = 869.32;
    D = 9336.45;
    E = 17671.2;
    break;
  // -----------------------2021
  case year === 2021:
    incomeA = 9744;
    incomeB = 14753;
    incomeC = 57918;
    incomeD = 274612;
    // -
    A = 995.21;
    B = 208.85;
    C = 950.96;
    D = 9136.63;
    E = 17374.99;
    break;
  // -----------------------2020
  case year === 2020:
    incomeA = 9408;
    incomeB = 14532;
    incomeC = 57051;
    incomeD = 270500;
    // -
    A = 972.87;
    B = 212.02;
    C = 972.79;
    D = 8963.74;
    E = 17078.74;
    break;
  default:
    console.log("No year has been selected ");
}
