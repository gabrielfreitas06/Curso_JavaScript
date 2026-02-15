class Animal {
    fazerSom() {
        console.log("Som genérico de um animal");
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log("Meow, Meow");
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("Ruf, Ruf");
    }
}

class Vaca extends Animal {
    fazerSom() {
        console.log("Muh, Muh");
    }
}

/* Polimorfismo = capacidade de objetos de diferentes classes responderem ao mesmo método de maneiras distintas, permitindo uma única interface 
para múltiplas formas, essencialmente através da sobrescrita de métodos (redefinir um método da classe pai) e herança */