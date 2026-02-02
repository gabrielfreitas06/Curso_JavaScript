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

// const informacoes = {
//    jose: {
//        idade: 67
//    },
//    ronaldo: {
//        idade: 33
//    },
//    antonio: {
//        idade: 42
//    },
//    rafael: {
//        idade: 27
//    },
// }

// console.log(informacoes.ronaldo.idade)

const funcaoReduce = (acc, objeto) => {
    //const obj = {
    //    jose: {
    //        idade:13
    //    }
    // }
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}

const pessoas = dados.reduce(funcaoReduce, {}) //.recude = Redez o valor a apenas um array, reduzindo por exemplo, um nome e idade a apenas uma idade dentro de um nome//

console.log(pessoas)