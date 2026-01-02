const salario = '1518';
const salarioNumero = Number(salario);

console.log('Seu saláario é: ', salario);
console.log('Seu saláario é: ', salarioNumero);

// Quando é string (character)= cor branca.//
// Quando é numer= cor amarela.//
// Quando se coloca o tipo da variável/constante, ex:numer(const/let) você troca o tipo dela//

const preçoPao = '20';
const precoCarro = 233223.12321444442324321;

console.log('O preço do pão é: ', Number(preçoPao).toFixed(2) );
console.log('O preço do carro é: ', precoCarro.toFixed(2));

//.toFixed()= Fixa quantas casas decimais terá depois do ponto. Pode ser usada apenas em itens do tipo -Number-.//