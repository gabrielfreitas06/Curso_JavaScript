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

const funcaoReduce = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}

const pessoas = dados.reduce(funcaoReduce, {});

const chaves = Object.keys(pessoas); //.keys = Código usado para listar as propriedades de um objeto. Ex.: idade:, nome:, gênero:.

const listaDeVolta = chaves.map((chave) => ({
    nome: chave,
    idade: pessoas[chave].idade,
}))

// console.log(pessoas);

// console.log(chaves);