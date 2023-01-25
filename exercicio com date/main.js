const data = document.querySelector('#data');
const date = new Date();

/*
const diasDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira"];
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const semanaTexto = diasDaSemana[date.getDay()];
const anoTexto = mesesDoAno[date.getMonth()];

const hora = (date.getHours() <10 ? '0' : '') + date.getHours();
const minutos = (date.getMinutes() <10 ? '0' : '') + date.getMinutes();
data.innerHTML = `${semanaTexto}, ${date.getDate()} de ${anoTexto} de ${date.getFullYear()} 
${hora}:${minutos}`;
*/ 

data.innerHTML =  `${date.toLocaleDateString('pt-BR', {dateStyle:"full"})} ${date.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})}`;