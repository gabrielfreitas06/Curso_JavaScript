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

const pessoaIdade = (objetoIdade) => objetoIdade.idade > 60;

const pessoaNome = (objetoNome) => objetoNome.nome === "Jose";

const dadosPrimordial = dados.find(pessoaIdade);

const dadosPrimordial2 = dados.find(pessoaNome);

console.log(dadosPrimordial)
console.log(dadosPrimordial2)