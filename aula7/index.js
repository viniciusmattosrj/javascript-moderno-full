/*
    REGRAS JS
    
    1. Não podemos criar constantes com palavras reservadas
    2. constantes precisam ter nomes significativos
    3. Não podem começar o nome de uma variável com um número
    4. Não podem conter espaços ou traços
    5. Utilizamos camelCase
    6. Case-Sensitive
    7. Não podemos modificar o valor de uma constante
    8. Não utilize var, utilize const
*/

const nome = 'Vinicius';
console.log(nome);


const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);

const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);

let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado);

/* Aqui só concateno não realizo a soma */
resultadoTriplicado = resultadoTriplicado + 5; 
console.log(typeof (primeiroNumero + segundoNumero));

console.log(typeof(primeiroNumero));
console.log(typeof segundoNumero);