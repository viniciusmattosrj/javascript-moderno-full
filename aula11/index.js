/** 
 * Entendendo os Operadores Aritimeticos
 */ 

const num1 = 10;
const num2 = 2;

/* + Adição Concatenação */
console.log(num1 + num2);

/* - Subtração */
console.log(num1 - num2);

/* * Multiplicação */
console.log(num1 * num2);

/* / Divisão */
console.log(num1 / num2);

/* ** Potenciação */
console.log(num1 ** num2);

/* % Resto da divisão */
console.log(num1 % num2);


/* Operadores de Atribuição */
let contador = 2;
contador += 2;
console.log(contador);

contador -= 2;
console.log(contador);

contador *= 3;
console.log(contador);

contador /= 4;
console.log(contador);

contador **= 5;
console.log(contador);


/* NaN - Not a Number */
const num3 = 10;
const num4 = 'Cadeira';
console.log(num3 * num4);
console.log(typeof num4);


/* Conversão de números */
const num5 = 10;
const num6 = parseInt('5');
console.log(num5 + num6);

const num7 = parseFloat('2.5');
console.log(num5 + num7);

const num8 = Number('4.0');
console.log(num5 + num8);