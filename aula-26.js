const dados = [
    {
        nome: 'Jose',
        idade: 72,
    },
    {
        nome: 'Maria',
        idade: 68,
    },
    {
        nome: 'Bruno',
        idade: 32,
    },
    {
        nome: 'Davi',
        idade: 17,
    },
    {
        nome: 'Hernane',
        idade: 54,
    },
    {
        nome: 'Luis',
        idade: 22,
    },
    {
        nome: 'Rose',
        idade: 59,
    },
    {
        nome: 'Nohan',
        idade: 2,
    }
]

const mostrarDados = (info) => {
    return {
        nome: info.nome, //.dado= Exibe sem alterar o dado que deseja//
        idade: info.idade, //.dado= Exibe sem alterar o dado que deseja//

        ...info, //Todas as informações de uma só vez. Se O próximo tiver uma informação expecífica, ela não é exibida nesse//
        idade:`${info.nome} + ${info.idade}`, //.dado= Exibe sem alterar o dado que deseja//
    }
}

console.log(dados.map(mostrarDados)); //.map=É usado para transformar cada elemento de um array e retornar um novo array com os resultados, sem alterar o original,