const nome = 'Vinicius';
const sobreNome = 'Mattos'; 

const idade = 32;
const peso = 83;
const alturaEmM = 1.86;

let indiceMassaCorporal;
let anoNascimento;
let ano = new Date();

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = (ano.getFullYear() - idade);

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);