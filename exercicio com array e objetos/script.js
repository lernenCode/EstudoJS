main();

function main()
{
    // Variaveis
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];    

    // Chamar função do botão
    form.addEventListener('submit', botaoEnviar);


    // Responsavel por enviar os dados
    function botaoEnviar(evento) 
    {
        // Impedir que a pagina seja atualizada ao enviar
        evento.preventDefault();

        // Especificar dados
        const nome = form.querySelector('.nome');
        const nascimento = form.querySelector('.nascimento');
        const cpf = form.querySelector('.cpf');
        const email = form.querySelector('.email');
        const telefone = form.querySelector('.telefone');
        const curriculo = form.querySelector('.curriculo');
        const checkbox = form.querySelector('.concorda');
        
        // Passar dados para cadastro
        criarCadastro(nome.value, nascimento.value, cpf.value, email.value, telefone.value, curriculo.value, checkbox.value)
        print();
    }

    // Responsavel por anotar os dados 
    function criarCadastro (nome, nascimento, cpf, email, telefone, curriculo, checkbox)
    {
        const Cadastro = { nome, nascimento, cpf, email, telefone, curriculo, checkbox}
        pessoas.push(Cadastro);
    }

    // Responsavel por escrever os dados 
    function print() {
        resultado.innerHTML = "";
        for (const pessoa of pessoas) {
          resultado.innerHTML += `Nome: ${pessoa.nome}  Nascimento: ${pessoa.nascimento}  Cpf: ${pessoa.cpf} 
          Email: ${pessoa.email} Tel.: ${pessoa.telefone} Curriculo.: ${pessoa.curriculo} LGPD: ${pessoa.checkbox} <br>`;
        }
        
        console.log(pessoas);
    }
}