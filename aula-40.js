const qualquer = {
    abc: "fada",
    sada: "fsdsg",
    gauhdda: "hwewrsaffs",
    esgdds: "fasdas",
}

/* const novoQualquer = {
    abc: qualquer.abc,
    sada: qualquer.sada,
    gauhdda: qualquer.gauhdda,
    esgdds: qualquer.esgdds,
    final:"FINAL",
} */

    const novoQualquer = {
        ...qualquer,
        final:"FINAL"
    }

    const lista = [221313, 1231234, 653246, 2357626, 12494124, 9124814212];
    const lista2 = [13212, 4583, 9223, 8532, 2343];

console.log(lista);
console.log(lista2);

const listaJunta = {
    ...lista, ...lista2 //Spread = Quebra o array e cria um novo
}

console.log(listaJunta)

console.log(novoQualquer);
console.log(qualquer);