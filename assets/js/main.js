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

// -----------------MAIN FUNCTION

const calculateTax = () => {
  // Add error handling

  if (Number(incomeInput1.value) === 0) {
    outputContainer.innerHTML = `<p class="alert">Bitte geben Sie ein gültige Wert</p>`;
    return;
  }

  // asign to year the year input value
  let year = Number(yearInput.value);
  //Add income2 if we habe 2 incomes
  let income = 0; //result Income
  let income1 = Number(incomeInput1.value);
  let income2 = Number(incomeInput2.value);

  if (income2 === 0) {
    // if we have only 1 income
    income = income1;
  } else {
    // if we have 2 income
    income = (income1 + income2) / 2;
  }

  // -------------------Help Variables for all years--------------
  // Give value 0 to be sure values are Numbers
  let tax = 0;
  let y = 0;
  let z = 0;
  let incomeA = 0;
  let incomeB = 0;
  let incomeC = 0;
  let incomeD = 0;
  let A = 0;
  let B = 0;
  let C = 0;
  let D = 0;
  let E = 0;

  // console.log(year);
  // console.log(typeof year);

  // ----------------------------------Year Choice--- Values for all the years
  if (year === 2023) {
    // -----------------------2023
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
    console.log("year23");
  } else if (year === 2022) {
    // -----------------------2022

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
    console.log("year22");
  } else if (year === 2021) {
    //-----------------------2021
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
    console.log("year21");
  } else if (year === 2020) {
    // -----------------------2020
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
    console.log("year20");
  } else {
    console.log("No year has been selected");
  }

  // ------ Main Function for all years--------------------

  // case 1
  if (income <= incomeA) {
    tax = 0;
    console.log("case1");
    // case 2
  } else if (incomeA + 1 <= income && income <= incomeB) {
    y = (income - incomeA) / 10000;
    tax = (A * y + 1400) * y;
    console.log("case2");
    // -case 3
  } else if (incomeB + 1 <= income && income <= incomeC) {
    z = (income - incomeB) / 10000;
    tax = (B * z + 2397) * z + C;
    console.log("case3");
    // case 4
  } else if (incomeC + 1 <= income && income <= incomeD) {
    let taxStep = 0.42 * income;
    tax = taxStep - D;
    console.log("case4");
    // case 5
  } else if (income >= incomeD + 1) {
    let taxStep = 0.45 * income;
    tax = taxStep - E;
    console.log("case5");
  } else {
    console.log("Error");
  }

  let roundTax = 0;

  if (income2 === 0) {
    // only 1 person
    roundTax = tax.toFixed(2); //-round only to output
    outputContainer.innerHTML = `<h3>Für das Jahr ${year} und das Einkommen von ${income} ist die  Einkommen­steuer:</h3><p class="output"><span class="big">€</span> ${roundTax}<p>`;
  } else {
    // 2 person
    roundTax = (tax * 2).toFixed(2); //-round only to output
    outputContainer.innerHTML = `<h3>Für das Jahr ${year} und die Einkommen von ${income1} und die Einkommen von ${income2} ist die Einkommen­steuer:</h3><p class="output"><span class="big">€</span> ${roundTax}<p>`;
  }

  // Remove alert if click inside

  incomeInput1.addEventListener("click", () => {
    outputContainer.innerHTML = "";
  });
};

//  #test values

// !2023

// -case1 : 5000/ year 2023
// tax=0

// -case2: 12000/ year 2023

// y = (12000 - 10908)/10000 = 0.1092
// tax = (979.18 * y + 1400) * y = 164.556369

// -case3: 25000/ year 2023

// z= (25000 -15999)/10000 =0.9001
// tax = (192.59*z + 2397)*z + 966.53 =3280.10226813

// -case4: 75000/ year 2023
// tax = 0.42 * 75000 -9972.98 = 21527.02

// -case5: 300000/ year 2023
// tax = 0.45 * 300000 -18307.73 = 116692.27

// !2022

// -case1 : 5000/ year 2023
// tax=0

// -case2: 12000/ year 2023

// y = (12000 - 10347)/10000 = 0.1653
// tax = (1088.67 * y + 1400) * y =261.166917

// -case3: 25000/ year 2023

// z= (25000 -14926)/10000 = 1,0074
// tax = (206.43*z + 2397)*z + 869.32 = 3.493,55427

// -case4: 75000/ year 2023
// tax = 0.42 * 75000 -9336.45 = 22163,55

// -case5: 300000/ year 2023
// tax = 0.45 * 300000 -17671.20 = 117328.8

// !2021

// -case1 : 5000/ year 2023
// tax=0

// -case2: 12000/ year 2023

// y = (12000 - 9744)/10000 =0,2256
// tax = (995.21 * y + 1400) * y = 366,49

// -case3: 25000/ year 2023

// z= (25000 -14753)/10000 = 1.0247
// tax = (208.85*z + 2397)*z + 950.96 = 3626,46051

// -case4: 75000/ year 2023
// tax = 0.42 * 75000 -9136.63 = 22363,37

// -case5: 300000/ year 2023
// tax = 0.45 * 300000 -17374.99 = 117625.01

// !2020

// -case1 : 5000/ year 2023
// tax=0

// -case2: 15000/ year 2023

// y = (12000 - 9408)/10000 = 0.2592
// tax = (972.87 * y + 1400) * y = 428.241921

// -case3: 25000/ year 2023

// z= (25000 -14532)/10000 =1.0468
// tax = (212.02*z + 2397)*z + 972.79 = 3714,29905

// -case4: 75000/ year 2023
// tax = 0.42 * 75000 -8963.74 = 22536,26

// -case5: 300000/ year 2023
// tax = 0.45 * 300000 -17078.74 = 117921,26
