function calcular() { //não importa o lugar que você vai passar o valor a função é ativa//
    console.log('passou');
}

const calcular2 = function() {
    console.log('calcular 2');
}

const calcular3 = () => console.log('Calcular 3')

//Três jeitos de declarar uma função//

calcular();
calcular2();
calcular3()