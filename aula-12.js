const QUANTIDADE = 6;

function numerosimpares(valor) {
    let contar = 0;
    let novoValor = valor;

    while(contar < QUANTIDADE ) {
        if (novoValor % 2 !== 0) {
            console.log(novoValor);
            contar++;
        }

        novoValor++;
    }
}

numerosimpares(8)