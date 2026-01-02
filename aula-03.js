const idade = 17;
const nome = 'Gabriel';

// if=Ação com condição que você dá ao sistema, se algo variável acontecer ou deixar de acontecer //
// else=Também, mostra o que acontece caso a condição do if não for atendida //

if(idade >=18) {
    console.log('Você pode entrar')
} else {
    console.log('Você não pode entrar')
}

if(idade >=18 || nome == 'Gabriel') {
    console.log('Você pode entrar')
} else {
    console.log('Você não pode entrar')
}

if(idade>=18 && nome == 'Gabriel') {
    console.log('Você pode entrar')
} else {
    console.log('Você não pode entrar')
}

// ||= igual ao 'ou' caso o requesito primário não for atendido, o segundo pode ser atendido para atingir a meta
// &&= igual ao 'e' caso qualquer requesito não for atendido, a meta não é atingida // 
// !== = Diferente de //