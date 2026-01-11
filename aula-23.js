//Função que realiza fatorial//

const fatorial = (valor) => { //Função Recursiva, por possuir nela seu nome (valor) ele se repete sem parar//
    if (valor === 0 || valor === 1) {
        return 1;
    } //Usada para quando o fatorial - função - atingir 0 || 1 ela parar e não entrar em looping//

    return valor * fatorial(valor - 1);
    // 4.3
    // 4.2 o fatorial agora 3 subtrai com 1
    // 4.1 o fatorial agora 2 subtrai com 1
    // Valor do fatorial atinge 1, ele para
}

console.log(fatorial(4))