//[]=ARRAY. Utilizado para armazenar mais de uma informação em uma constante ou variável. Dá sentido ao comando 'for'//
// O ARRAY existe posição, a informação armazenada nela é a primeira posição '0' e assim por diante//

const idades = [17, 23, 34, 13, 53, 29, 34];

    console.log('resultado', idades[0])
    console.log('quantas idades tem armazenadas: ', idades.length)  //.length=Mostra a quantidade de informações quem tem dentro de um array//

for(let i = 0; i < idades.length; i++) {
    console.log ('As idades que estão no sistema são ', idades[i] );
}