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

dados.sort((a, b) => { //.sort = Código usado para ordenar objetos de um array//
    //Ordem crescente
    if (a.idade < b.idade) {
        return -1;
    }
    if (a.idade > b.idade) {
        return 1;
    }
        return 0;
})

console.log(dados)

dados.sort((a, b) => { //.sort = Código usado para ordenar objetos de um array//
    //Ordem decrescente
    if (a.idade > b.idade) {
        return -1;
    }
    if (a.idade < b.idade) {
        return 1;
    }
        return 0;
})

console.log(dados)

dados.sort((a, b) => { //.sort = Código usado para ordenar objetos de um array//
    //Ordem Alfabética
    if (a.nome.toUpperCase() < b.nome.toUpperCase()) { //.toUpperCase = Usado para colocar todos os objetos do array com iniciais maiúsculas, porém não altera eles, somente na função. O sistema usa o maiúsculos maior que as minúsculas
        return -1;
    }
    if (a.nome.toUpperCase() > b.nome.toUpperCase()) { //.toUpperCase = Usado para colocar todos os objetos do array com iniciais maiúsculas, porém não altera eles, somente na função. O sistema usa o maiúsculos maior que as minúsculas
        return 1;
    }
        return 0;
})

console.log(dados)