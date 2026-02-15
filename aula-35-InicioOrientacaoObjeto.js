class Pessoa { // Orientação Objeto cria uma classe que armazena e organiza dados
    nome; //item da classe
    idade; //item da classe
    filhos; //item da classe

        quantosFilhos() { // Função se verifica se Pessoa possui filhos
            if (this.filhos) { //Se tiver filhos
                return this.filhos.length; // retorna os nomes dos filhos
            }
            return 0; // Retorna 0 caso não tiver filhos
        }

        constructor(nome, idade, filhos) { // constructor possibilita criar meios de inserir dados apartir do new class
            this.nome = nome;
            this.idade = idade;
            this.filhos = filhos;
        }
}

const filho1 = new Pessoa("Gabriel", 17); // const que cria os dados do filho
const filho2 = new Pessoa("Ingridy", 3); // const que cria os dados do filho

const pessoa = new Pessoa("José", 54, [filho1, filho2]);  // const que cria os dados da pessoa

console.log("Quantos filhos? ", pessoa.quantosFilhos())
console.log(pessoa);