let valorA = 'A';
let valorB = 'B';
let valorC = 'C';
console.log(valorA, valorB, valorC);

/* 1. Tentativa de solução */
/** 
 * aux = valorA; 
 * valorA = valorB; 
 * valorB = valorC; 
 * valorC = aux;
 * console.log(valorA, valorB, valorC);  
*/

/* 2. Tentativa de solução */
[valorA, valorB, valorC] = [valorB, valorC, valorA];
console.log(valorA, valorB, valorC);