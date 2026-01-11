function teste (key){
    switch (key) {
        case 'Gabriel': //Abre um caso//
                console.log('Gabriel aqui');
            break; //Fecha o caso//
        case 'Lucas': //Abre um caso//
                console.log('Lucas aqui');
            break; //Fecha o caso//
        case 'Vitor': //Abre um caso//
                console.log('Vitor aqui');
            break //Fecha o caso//
        default: //Abre uma caso em uma situação que nenhum outro caso foi atendido
                console.log('Outro aqui')
            break; //Fecha o caso//
    } //Switch Case= Cria uma caso/situação. Não é case sensitive//
}

teste('Gabriel')