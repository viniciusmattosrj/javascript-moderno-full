/* Explicando mais sobre numbers */

/* Tipo Number */
let num1 = 10;
let num2 = 2.5;
let num3 = 9.9735434;

console.log(num1.toString() + num2);
console.log(typeof num1);

/* Retornando o binário */
console.log(num1.toString(2));

/* Fixando os valores */
console.log(num3.toFixed(2));

/* Verificando se o valor de entrada */
console.log(Number.isInteger(num1));

/* Verificando se o resultado da conta é NaN */
let auxiliar = num1 * 'Olá';
console.log(Number.isNaN(auxiliar));