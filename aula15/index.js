let num1 = 9.234343;

/* Arredondado para cima */
let num2 = Math.floor(num1);
console.log(num2);

/* Arredondado para baixo - ignorando as caisas decimais */
num2 = Math.ceil(num1);
console.log(num2);

/* Arrendondando conforme o 1 número depois casa decimal */
num2 = Math.round(num1);
console.log(num2);

/* Retornando o maior valor da lista */
console.log(Math.max(-5, -1, 0, 999, 1252, 124));

/* Retornando o menor valor da lista */
console.log(Math.min(-5, -1, 0, 999, 1252, 124));

/* Gerando números aleatórios entre 5 à 10 */
const aleatorio = Math.round(Math.random() * (10 -5) + 5);
console.log(aleatorio);