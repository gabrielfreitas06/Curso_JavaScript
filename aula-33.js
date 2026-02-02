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

const resultadoSome = dados.some((objeto) => objeto.idade > 50); //.some = Valida se a condição de 'se' inserida for verdadeira tendo somente um aceito. Mesmo significado do "ou", ||. Ex.: Cliente pode entrar se "x" ou "y" for true
const resultadoEvery = dados.every((objeto) => objeto.idade > 50); //.every = Valida se a condição 'se' for totalmente verdadeira não podendo ter nenhum fora da condição. Mesmo significado do "e", &&. Ex.: Cliente pode entrar se "x" e "y" for true.

console.log(resultadoSome);
console.log(resultadoEvery);