const CONSUMO_AUTOMOVEL = 12;

function gastoCombustivel (tempoGasto, velocidadeMedia) {
    const distancia = velocidadeMedia * tempoGasto;
    const consumoFinal = distancia / CONSUMO_AUTOMOVEL;

    return consumoFinal.toFixed(3);
}

console.log(gastoCombustivel(33,45),'L');
console.log(gastoCombustivel(2,8),'L');
console.log(gastoCombustivel(6,15),'L');

//Função para calcular o combustível gasto na viajem//