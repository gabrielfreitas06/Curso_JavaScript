
function calcular (valor) {
    if (valor === 0) {
        throw new Error("Não pode ser 0");  //throw=Cria um novo requesito que caso não for atendido para a função. Exemplo - Energia da empresa caiu, o sistema deve parar, porém sem um código ele não percebe isso// 
    }
    return valor / 2;
}

try  { //try= Verifica se a condição da função atende os requisitos//
    const resultado = calcular(0);
    console.log ('resultado', resultado)
} catch (error) { //catch= Caso o requesito especial não for atendido, ele exibirá a mensagem, porém o sistema não vai se suspender//
    console.log(error.message)
} finally { //finally= Pouco usado, quando adiciona uma informação ao banco de dados, se faltar outro ele apagará a informação incompleta, o sistema sempre lê ele//
    console.log('Chegou no finally');
}
console.log('continua');