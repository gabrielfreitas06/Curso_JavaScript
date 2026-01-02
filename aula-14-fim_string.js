const mensagem = 'dahgadhgahgaghddada';
const mensagem2 = 'ryeytwfgfsfsfssffda';

console.log(mensagem.length); //Vê a quantidade de caracteres na string// 
console.log(mensagem.concat(mensagem2)); //Junta as duas strins//
            // || //
console.log(mensagem + mensagem2); //Junta as duas strins//
            // || //
console.log('ES:', `fasdhsafs ${mensagem} ${mensagem2}`) //Junta as duas strins. Método que dá espaço entre as string sem utilizar ' '//

console.log(mensagem.substring(5)); //Mostra somente apartir do número da string selecionada//
console.log(mensagem.substring(5, 2)); //Mostra somente apartir do número da string selecionada. Vai somente até a quantidade do número selecionado//

console.log(mensagem.split('h')); //Quebra a string em um array. Remove a letra selecionada//

console.log(mensagem.toLocaleUpperCase()); //Passa toda a string para CapsLock//
console.log(mensagem.toLowerCase()); //Passa toda a string para minúscula//

console.log('Replace: ', mensagem.replace('hgaghd', 'Gabriel')); //Substitui uma parte da string por uma nova//