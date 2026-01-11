//Objeto simples: Armazena vários dados em uma única constante//

const cliente1 = {
    nome: 'Jose',
    sobrenome: 'Alves da Silva',
    idade: 52,
    cpf: 11122233344,
    genero: 'Masculino',
    peso: 83,
    altura: 185,
    endereco: 'Rua Getúlio Vargas',
    numero: 420,
    codigo_cliente: 1
}

const exibirInformacaoCliente = (clientes, informacoes) => { //função que exibe a informação. 'informacoes' usando `${}´ altera o texto com base na informação escolhida//
    console.log(`${informacoes} do(a) ${clientes.nome}:`, clientes[informacoes]);
}

exibirInformacaoCliente(cliente1, 'peso'); //cliente1 abre os dados, 'dado' exibe o dado escolhido//