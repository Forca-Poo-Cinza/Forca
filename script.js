const dados01 = [];
const letraadv01 = [];
let segredo = [];
let palavra = "";
let chance = 6;

function cadastrar() {
    // entrada:
    const usuario = document.getElementById("usuario");
    const email = document.getElementById("email");    

    //processamento:
    const dados = {
        usuario: usuario.value,
        email: email.value
    };

    // console.log(dados);
    dados01.push(dados);

    // saída:
//    console.table(dados01);

   // limpar a saída
    usuario.value= '';
    email.value = '';

    let categoria = ["Cor", "Animal", "Fruta"];

    let teste = (Math.random()*((categoria.length - 1))).toFixed(0);
    let dica = categoria[teste]
    document.getElementById("categoria").value = dica;

    if (dica == "Cor"){
        let cores = ["ABOBORA", "AÇAFRAO", "AMARELO", "AMBAR", "AMEIXA", "AMÊNDOA", "AMETISTA", "ANIL", "AZUL", "BEGE", "BORDÔ", "BRANCO", "BRONZE", "CAQUI", "CARAMELO", "CARMESIM", "CARMIM", "CASTANHO", "CEREJA", "CHOCOLATE", "CIANO", "CINZA", "CINZENTO", "COBRE", "CORAL", "CREME", "DAMASCO", "DOURADO", "ESCARLATE", "ESMERALDA", "FERRUGEM", "FÚCSIA", "GELO", "GRENÁ", "GRIS", "ÍNDIGO", "JADE", "JAMBO", "LARANJA", "LAVANDA", "LILÁS", "LIMAO", "LOIRO", "MAGENTA", "MALVA", "MARFIM", "MARROM", "MOSTARDA", "NEGRO", "OCRE", "OLIVA", "OURO","PÊSSEGO", "PRATA", "PRETO", "PÚRPURA", "ROSA", "ROXO", "RUBRO", "SALMÃO", "SÉPIA", "TERRACOTA", "TIJOLO", "TURQUESA", "UVA", "VERDE", "VERMELHO", "VINHO", "VIOLETA"];
        let teste1 = (Math.random()*((cores.length - 1))).toFixed(0);
        palavra = cores[teste1]
        console.log(palavra)

    } else if (dica == "Fruta"){
        let frutas = ["ABACATE","ABACAXI","AÇAI","ACEROLA","AMEIXA","CAQUI","CARAMBOLA","CEREJA","DAMASCO","FRAMBOESA","GOIABA","GRAVIOLA","JABOTICABA","LARANJA","LICHIA","MANGA","MEXERICA","MIRTILO","NECTARINA","TAMARINDO"]
        let teste1 = (Math.random()*((frutas.length - 1))).toFixed(0);
        palavra = frutas[teste1]
        console.log(palavra)

    } else {
        let animal = ["CAMALEAO", "CAPIVARA", "CAMELO", "TARTARUGA", "LEBRE", "GUAXINIM", "GIRAFA", "TUCANO", "OURIÇO", "CISNE", "SAGUI", "ORANGOTANGO", "HIPOPOTAMO", "HIENA", "GUEPARDO", "MOSCA", "MOSQUITO", "CAMARAO", "PACA", "RAPOSA", "BAIACU", "DRAGAO", "MARIPOSA", "UNICORNIO", "NARVAL", "OCAPI", "CEGONHA", "PELICANO", "LACRAIA", "LEMURE", "IGUANA", "CHINCHILA", "CACATUA", "PAVAO", "TARANTULA", "KOALA", "CANGURU", "CALOPSITA", "DINOSSAURO", "TIRANOSSAURO"];
        let teste1 = (Math.random()*((animal.length - 1))).toFixed(0);
        palavra = animal[teste1]
        console.log(palavra)

    }
    
    console.log(palavra.length)

    for (let i = 1; i <= palavra.length; i++){
        segredo.push("____")

    }
    console.log(segredo.length)
    document.getElementById("secreto").innerHTML = segredo.join(" ");
    






    
};
let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let errado = [];

function letra01(letra1){
    console.log(letra1);
    let acerto = false;
    for (let j = 0; j < palavra.length; j++){

        if(palavra[j] == letra1){
            acerto = true;
            console.log(j);
            segredo[j] = letra1;
            console.log(segredo.join(" "))
            document.getElementById("secreto").innerHTML = segredo.join(" ");

        }

        
    
    }
    if (acerto === false){
        errado.push(letra1)
        document.getElementById("errado").value = errado;
        chance -= 1;
    }
    // document.getElementById("secreto").innerHTML = segredo.join(" ");

    // if (acerto == true){
    //     segredo[j] = letra1
    //     console.log("estive aqui");
    //     console.log(segredo)
    // } else {
    //     document.getElementById("errado").value = letra1;
    //     console.log("Estou na errada")
    // }

    

}

// let listaDinamica = [];
// let palavraSecretaCategoria;


// const palavras = [
//     palavra001={
//         nome : "ABACATE",
//         categoria : "FRUTAS"
//     },
//     palavra002={
//         nome : "MEXERICA",
//         categoria : "FRUTAS"
//     },
//     palavra003={
//         nome : "CAQUI",
//         categoria : "FRUTAS"
//     },
//     palavra004={
//         nome : "MANGA",
//         categoria : "FRUTAS"
//     },
//     palavra005={
//         nome : "AMEIXA",
//         categoria : "FRUTAS"
//     },
//     palavra006={
//         nome : "CEREJA",
//         categoria : "FRUTAS"
//     },
//     palavra007={
//         nome : "ABACAXI",
//         categoria : "FRUTAS"
//     },
//     palavra008={
//         nome : "LICHIA",
//         categoria : "FRUTAS"
//     },
//     palavra009={
//         nome : "ACEROLA",
//         categoria : "FRUTAS"
//     },
//     palavra010={
//         nome : "AÇAI",
//         categoria : "FRUTAS"
//     },
//     palavra011={
//         nome : "MIRTILO",
//         categoria : "FRUTAS"
//     },
//     palavra012={
//         nome : "LARANJA",
//         categoria : "FRUTAS"
//     },
//     palavra013={
//         nome : "FRAMBOESA",
//         categoria : "FRUTAS"
//     },
//     palavra014={
//         nome : "GOIABA",
//         categoria : "FRUTAS"
//     },
//     palavra015={
//         nome : "DAMASCO",
//         categoria : "FRUTAS"
//     },
//     palavra016={
//         nome : "GRAVIOLA",
//         categoria : "FRUTAS"
//     },
//     palavra017={
//         nome : "JABOTICABA",
//         categoria : "FRUTAS"
//     },
//     palavra018={
//         nome : "NECTARINA",
//         categoria : "FRUTAS"
//     },
//     palavra019={
//         nome : "CARAMBOLA",
//         categoria : "FRUTAS"
//     },
//     palavra020={
//         nome : "TAMARINDO",
//         categoria : "FRUTAS"
//     },
// ];

// criarPalavraSecreta();
// function criarPalavraSecreta(){
//     const indexPalavra = parseInt(Math.random() * palavras.length)
    
//     palavraSecretaSorteada = palavras[indexPalavra].nome;
//     palavraSecretaCategoria = palavras[indexPalavra].categoria;
//     console.log(palavraSecretaSorteada);
//     console.log(palavraSecretaCategoria);
// }

// montarPalavraNaTela(); // aparece na tela a categoria e a palavra secreta. 
// function montarPalavraNaTela(){
//     const categoria = document.getElementById("categoria");
//     categoria.innerHTML = palavraSecretaCategoria;

//     const palavraTela = document.getElementById("palavra-secreta");
//     palavraTela.innerHTML =" "; // apaguei a "palavraSecretaSorteada" para não aparecer mais na palavraSecretaSorteada 

//     // para aparecer o espaço da forca:
//     for (i = 0; i < palavraSecretaSorteada.length; i++) {
//         if(listaDinamica[i] == undefined){
//             listaDinamica[i] = "&nbsp;"
//             palavraTela.innerHtml = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i]+ "</div>"
//             }
//             else{
//                 palavraTela.innerHtml = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i]+ "</div>"
//             }
//     }           
// }









// let cores = ["ABÓBORA", "AÇAFRÃO", "AMARELO", "ÂMBAR", "AMEIXA", "AMÊNDOA", "AMETISTA", "ANIL", "AZUL", "BEGE", "BORDÔ", "BRANCO", "BRONZE", "CÁQUI", "CARAMELO", "CARMESIM", "CARMIM", "CASTANHO", "CEREJA", "CHOCOLATE", "CIANO", "CINZA", "CINZENTO", "COBRE", "CORAL", "CREME", "DAMASCO", "DOURADO", "ESCARLATE", "ESMERALDA", "FERRUGEM", "FÚCSIA", "GELO", "GRENÁ", "GRIS", "ÍNDIGO", "JADE", "JAMBO", "LARANJA", "LAVANDA", "LILÁS", "LIMÃO", "LOIRO", "MAGENTA", "MALVA", "MARFIM", "MARROM", "MOSTARDA", "NEGRO", "OCRE", "OLIVA", "OURO","PÊSSEGO", "PRATA", "PRETO", "PÚRPURA", "ROSA", "ROXO", "RUBRO", "SALMÃO", "SÉPIA", "TERRACOTA", "TIJOLO", "TURQUESA", "UVA", "VERDE", "VERMELHO", "VINHO", "VIOLETA"];

// let segredo = "";


// let teste = (Math.random()*((cores.length - 1))).toFixed(0);
// let palavra = cores[teste]
// console.log(palavra)



// for (let i = 1; i <= palavra.length; i++){
//     segredo = segredo + " _ "
// }

// console.log(segredo)

// let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// function forca(){
    
// }
