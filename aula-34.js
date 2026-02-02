const dados = [
    {
        nome: 'Jose',
        idade: 72,
        cartoes: ['2753', '9280']
    },
    {
        nome: 'Maria',
        idade: 68,
        cartoes: ['6432', '2353']
    },
    {
        nome: 'Bruno',
        idade: 32,
        cartoes: ['0800', '9320']
    },
    {
        nome: 'Davi',
        idade: 17,
        cartoes: ['1039', '2026']
    },
    {
        nome: 'Hernane',
        idade: 54,
        cartoes: ['9372', '1313']
    },
    {
        nome: 'Luis',
        idade: 22,
        cartoes: ['3421', '0432']
    },
    {
        nome: 'Rose',
        idade: 59,
        cartoes: ['4063', '7212']
    },
    {
        nome: 'Nohan',
        idade: 2,
        cartoes: ['0000', '0000']
    }
]

const cartoesMap = dados.map((cartoes) => cartoes.cartoes);

console.log(cartoesMap);

const cartoesFlatmap = dados.flatMap((cartoes) => cartoes.cartoes); //.flatMap = Diferente do .map que pega todos os itens e cria arrays (listas das listas), o flatMap junta tudo é mostra todo o acumulado

console.log(cartoesFlatmap);