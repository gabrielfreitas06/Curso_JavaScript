const sleep = async (ms) => { //aysnc = transforma a função em asimcronoma, 'função que faz promessas'//
    return new Promise((resolve => setTimeout(resolve, ms))) //new Promise = Cria uma nova promessa//
}

const aguardarComRetorno = async () => { //aysnc = transforma a função em asimcronoma, 'função que faz promessas'//
    await sleep(3000); //await= estimula um prazo para começar a fazer a função, enquanto essa prazo não passar, o Js não pode seguir a linha de código. Utilizado em sistemas para procurar usuários e o sistema não correr enqaunto isso acontece//
    return 30;
}


const aguardar = async () => { //aysnc = transforma a função em asimcronoma, 'função que faz promessas'//
    console.log('Passou', 2 ** 2);
    const resultado = await aguardarComRetorno(); //await= estimula um prazo para começar a fazer a função, enquanto essa prazo não passar, o Js não pode seguir a linha de código. Utilizado em sistemas para procurar usuários e o sistema não correr enqaunto isso acontece//
    console.log('resultado', resultado);
    console.log('Passou', 4 ** 4);
    console.log('Passou', 6 ** 6);
    console.log('Passou', 8 ** 8);
}

aguardar();