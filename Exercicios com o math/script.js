const num = Number(prompt('digite um numero'));

const Numero = document.getElementById('numero'); 
Numero.innerHTML = num;

const Raiz = document.getElementById('raiz');
Raiz.innerHTML = Math.sqrt(num);

const Inteiro = document.getElementById('inteiro');
Inteiro.innerHTML = Number.isInteger(num);

const Arredondado = document.getElementById('arredondado'); 
Arredondado.innerHTML = Math.ceil(num);

const Decimal = document.getElementById('decimal'); 
Decimal.innerHTML = num.toFixed(2);

