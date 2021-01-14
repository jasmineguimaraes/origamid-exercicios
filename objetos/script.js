// Criando um objeto qualquer

var pessoa = {
    nome: 'Jasmine', 
    sobrenome: 'Guimarães',
    idade: 23, 

    // Criando métodos

    quantosAnos() {

        return this.idade;
    }, 

    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome; 
    }
}

console.log(pessoa.nomeCompleto())


// Modifique o valor da propriedade preco para 3000

var carro = {

    preco: 1000,
    portas: 4, 
    marca: 'Audi'
}

carro.preco = 3000
console.log(carro.preco)

// Crie um objeto cachorro que represente um labrador preto com 10 anos, que late ao ver um homem 

var cachorro = {
raca: 'labrador',
cor: 'preto', 
idade: 10, 


eleVaiLatir(genero) {
    let genero = prompt('qual o seu genero?')
    if (genero === 'homem') {

        return 'woof';
    }

    else {
        return null

    }


}
}