//1 - crie uma função que exiba uma mensagem no console

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console


//*Bônus:

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function teste() {
    console.log("Será que função em JS é complicado?")
}

teste()

function cumprimento(nome) {
    console.log(`Olá, ${nome}, como você está?`)
}

cumprimento("Eduardo")

function apresentacao(nome, idade, estilomus) {
    console.log(`Com ${idade} anos, ${nome} gosta é de escutar um ${estilomus}`)
}

apresentacao("Eduardo", 29, "chorinho")

function trilhaSonora(filme, musica) {
    console.log(`${filme} é o nome do filme, ${musica} é o nome da música, não confunda!`)
}

trilhaSonora("3%", "10%")

function triplo(num) {
    console.log(3 * num)
}

triplo(3)