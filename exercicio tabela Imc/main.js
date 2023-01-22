const form = document.querySelector('#form');

// Enviar formulario
form.addEventListener('submit', function(event){
    event.preventDefault();

    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value); 
    const altura = Number(inputAltura.value);
    const Resultado = document.querySelector('#resultado');

    if (!peso || !altura) {
        Resultado.innerHTML = "Por favor preencha todos os campos.";
    }

    if (isNaN(peso) || isNaN(altura)) {
        Resultado.innerHTML = "Por favor insira valores válidos.";
    }

    calcular(peso,altura)

    function calcular (peso,altura){

        const classificacoesIMC = {
            magreza: [18.5, "Magreza", 0],
            normal: [24.9, "Normal", 0],
            sobrepeso: [29.9, "Sobrepeso", 1],
            obesidade: [39.9, "Obeso", 2],
            obesidadeGrave: [40, "Obsidade Grave", 3],
        };

        var imc = peso / (altura * altura);
        for(const key in classificacoesIMC){
            if(imc < classificacoesIMC[key][0]){
                resultado(imc,classificacoesIMC[key][1],classificacoesIMC[key][2])
                break;
            }
        }
    }

    function resultado (imc,classificacao,grau){
        Resultado.innerHTML = `Seu IMC: ${imc.toFixed(2)} tem como classificação: ${classificacao} e de grau ${grau}`;
    }
});