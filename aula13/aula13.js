/*  String são indexadas */

let umaString = "O rato roeu a roupa do rei de roma";
console.log(umaString.charAt(4));

// Exbindo o código referente ao número informado 
console.log(umaString.charCodeAt(2));

// Buscando um valor iniando por onde foi informado.
console.log(umaString.indexOf(3));

// Buscando um valor iniando por onde foi informado.
console.log(umaString.lastIndexOf('o'));

// Apresentando os valores que atendem a expressão
console.log(umaString.match(/[a-z]/g));

// Realizando uma busca dentro de um string
console.log(umaString.search(/x/));

// Realizando o replace em uma string
console.log(umaString.replace(/rato/, 'Outra'));

// Capturando comprimenro de uma string
console.log(umaString.length);

/* Equivalente ao length */
console.log(umaString.substring(umaString.length -5, umaString -1));

/* Quebrando uma string nos espaços */
console.log(umaString.split(' '));

/* Manipulando a string para Maiúscula vs Minúscula */
console.log(umaString.toLocaleLowerCase());
console.log(umaString.toLocaleUpperCase());