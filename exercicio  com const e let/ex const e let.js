
/*
luiz otavio miranda nasceu em 1980 tem 30 anos, 
pesa 84 kg tem 1.18 de altyura e seu imc é de 252525
*/

const nome = "Luiz Otávio";
const sobrenome = "Miranda";

const idade = 30;
const peso = 84;

const altura = 1.80;

let imc; // pese / (altura * altura)
let nascimento;
let nomeCompleto;


imc = peso / (altura * altura);
nascimento = 2022 - idade;
nomeCompleto = nome + ' '+ sobrenome;

console.log(`${nomeCompleto} nasceu em ${nascimento} tem ${idade}, pesa ${peso} e tem ${altura} de altura e seu imc é de ${imc}`);