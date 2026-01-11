// Atividade criar uma função que faça a soma de uma PA 1<=n<=100//

process.stdin.setEncoding('utf8');

const pa = (valor) => {
    if (valor < 0 || valor > 100) {
        throw new Error('Valor Inválido, programa será encerrado')
    }
    if (valor === 0) {
        return 1
    }

    return  valor + pa(valor - 1); 
}

process.stdin.on('data', function(data) {
    try {
        console.log('pa', pa(Number(Data)))
    } catch (error) {
        console.log(error.message)
        process.stdin.pause()
    }
});

console.log(pa(1002))