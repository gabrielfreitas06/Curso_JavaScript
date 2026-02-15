class Usuario {
    email;
    senha;
    nome;

    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}

class Administrador extends Usuario { // extends possibilita a class administrador herdar os dados da class ussuario
    permissoes;
    
    constructor(email, senha, nome, permissoes) { // Só é possível colocar email, senha e nome porque a class extende da class usuario
        super(email, senha, nome); // Super permite usar o constructor de outra class por meio do extends
        this.permissoes = permissoes;
    }
}

class Comprador extends Usuario { // extends possibilita a class comprador herdar os dados da class ussuario
    compras;
}

const admin = new Administrador("email@gmail.com", "senha", "Nome", "1.0");

const comprador = new Comprador();
comprador.senha = "123mudar"; // dado adicionado porque senha extende da class usuario

console.log(comprador);