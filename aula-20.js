const idade = 12;

//Quando o sistema busca uma informação e uma const ou let, o elemento filho pode buscar esse dado do elemento pai, elemento vô, elemento bisavô e assim por diante//
//Contudo, o elemento pai não consegue pegar dados do elemento filho, elemento neto ... .//

const exibirIdade = () => {
    const idade = 23; //A função dá prioridade a const ou let do elemento filho, caso as duas tiverem o mesmo nome//
    console.log(idade);
}

const exibirExibirIdade = () => {
    exibirIdade() //A função pode usar outra dentro dela, porém caso se tiver uma const ou let somente dentro da função pega, não será possível usar ela//
    console.log(idade);
}

exibirIdade();
exibirExibirIdade();