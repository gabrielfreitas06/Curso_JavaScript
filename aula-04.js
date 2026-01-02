const quantidade = 10;
let soma = 1;

//for= Repetição de um valor até ele atingir uma condição. Precisa de uma variável, a condição de mudança e a ação que vai atender a condição//

for(let i = 0; i < quantidade; i++)  {
    console.log(i);
    soma = soma + i;
}

console.log('Acabou', soma);