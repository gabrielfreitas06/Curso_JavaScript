//setTimeout= Código que estimula um prazo que o sistema vai demorar para inicializar o código//

const test1 = (callBack) => {
    setTimeout(() => {
        console.log('Teste 1');
    }, 300) //Unidade em milisegundo//
}

const test2 = (callBack) => {
    setTimeout(() => {
        console.log('Teste 2');
        callBack()  //Função dentro da função também está sujeita a ordem de tempo//
    }, 1000) //Unidade em milisegundo//
}

const test3 = (callBack) => {
    setTimeout(() => {
        console.log('Teste 3');
    }, 450) //Unidade em milisegundo//
}

const test4 = (callBack) => {
    setTimeout(() => {
        console.log('Teste 4');
    }, 100) //Unidade em milisegundo//
}

const funcaoCallBack = (callBack) => {
    console.log('Usuário Salvo'); //Muito usado para comunicação front - dba//
} 

test1();
console.log(1 + 1)
test2(funcaoCallBack); //Função dentro da função também está sujeita a ordem de tempo//
test3();
console.log(2 + 2)
test4();

//Ordem de aparecer as funções é a ordem de tempo//