console.log("=== TESTE ===")

let cadastrado = null;

// contador e função, para ao enviar uma letra alterar a imagem de acordo com a variavel
let imagem_forca = 0
function Validar(){
    document.getElementById("forca").src=`Imagens/Vidas/0${imagem_forca}-vidas.png`;
}


class Pessoas {
    constructor (nome, email){
        this.nome = nome 
        this.email = email
    }
}


function cadastrar() {
    user = document.getElementById("usuario").value;
    mail = document.getElementById("email").value;
    console.log(user, mail)
    cadastrado = new Pessoas(user,mail)
}
