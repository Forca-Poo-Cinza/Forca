console.log("=== TESTE ===")

// contador e função, para ao enviar uma letra alterar a imagem de acordo com a variavel

let imagem_forca = 0

function Validar(){
    document.getElementById("forca").src=`Imagens/Vidas/0${imagem_forca}-vidas.png`;
}