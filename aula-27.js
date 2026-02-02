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

// for (let i = 0; i < dados.length; i++) {
//    console.log(dados[i]);
// }

let soma = 0

const somaIdade = (objeto) => {
    soma += objeto.idade
}

dados.forEach(somaIdade); //forEach= Método mais eficiente de usar o for, usado para percorrer cada elemento e executar uma função específica para cada um deles//

console.log ('Soma:', soma)