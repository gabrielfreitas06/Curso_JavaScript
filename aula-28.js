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

const filtrar = (pessoas) => pessoas.idade < 20;

const dadosFiltrados = dados.filter(filtrar) //.filter = código que filtra uma informação específica que você deseja usar. Possui a condição de somente funcionar caso for (boleana) => atende uma condição//

console.log(dadosFiltrados);