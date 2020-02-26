/* Exercicio para fixar o conhecimento */

const nome = prompt('Digite o seu nome completo: ');

document.body.innerHTML += `O seu é <strong> ${nome}</strong><br />`;
document.body.innerHTML += `O seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra i no seu nome? ${nome.indexOf(0)} <br />`;
document.body.innerHTML += `Qual o último índice da letra i no seu nome? ${nome.lastIndexOf()}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.toLocaleUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toLocaleUpperCase()} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()} <br />`;


