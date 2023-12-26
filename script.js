'use strict';
//Змінні для введення даних користувачем;
let userInfo1 = prompt('Будь ласка введіть перше число:');
let userInfo2 = prompt('Будь ласка введіть друге число:');

//Змінні для зведення результатів;
let num1 = parseFloat(userInfo1);
let num2 = parseFloat(userInfo2);

//Змінні зі зведенням сум та виведення альортів.
let sum = num1 + num2;
alert(num1 + '+' + num2 + '=' + sum);

let minus = num1 - num2;
alert(num1 + '-' + num2 + '=' + minus);

let increase = num1 * num2;
alert(num1 + "*" + num2 + '=' + increase);

let division = num1 / num2;
alert(num1 + '/' + num2 + '=' + division);