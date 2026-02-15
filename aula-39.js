class Usuario {

    constructor(email, senha, nome) {
        Object.defineProperties(this, {
        nome: {
            get: () => nome,
            set: (value) => nome = value
        },
        senha: {
            get: () => senha,
            set: (value) => {
                if (value.length < 4) {
                    throw new TypeError('Precisa de pelo menos 4 letras');
                }
                senha = value;
            }
        },
        email: {
            get: () => email,
            set: (value) => email = value
        },

        })

    }
}

const usuario = new Usuario("Nome", "Senha", "Nome");
usuario.senha = '123mudar';

console.log(usuario.senha);

// get & set = códigos usados para gerenciar acessos as propriedades de um objeto ou classe
