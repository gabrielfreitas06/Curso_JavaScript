// Object.defineProperties = Declara várias propriedades
// Object.defineProperty = Somente uma propriedade

const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    writable: false, // se estiver true => usuario.nome = "novo nome"
    configurable: false, // se estiver como true => posso deletar o nome
    enumerable: true, // se estiver como true => ele será exibido no objeto
})

class Usuario {
    // senha;
    // email;

    constructor(email, senha, nome) {
        // this.email = email;
        // this.senha = senha;
        Object.defineProperties(this, {
        nome: propriedadePadrao(nome),
        senha: propriedadePadrao(senha),
        email: propriedadePadrao(email),
        })

        /* Object.defineProperty(this, "nome", {
            value: nome,
            writable: false, // se estiver true => usuario.nome = "novo nome"
            configurable: false, // se estiver como true => posso deletar o nome
            enumerable: true, // se estiver como true => ele será exibido no objeto
        }) */
    }
}

const usuario = new Usuario("Senha", "Email", "Nome");
// usuario.nome = "Novo Nome" não vai funcionar definido as propriedades estabelecidas para o nome na class Usuário

console.log(usuario);