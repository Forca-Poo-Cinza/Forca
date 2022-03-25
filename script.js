const dados01 = [];
const letraadv01 = [];
let errado = [];
let segredo = [];
let palavra = "";
let chance = 0;
let derrota = 0;
let vitoria = 0;
let img = document.getElementById("trocarimg");
let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "Ç"]


class Pessoas {
    constructor (nome, email){
        this.nome = nome 
        this.email = email
    }
}

function cadastrar() {
    // entrada:
    document.getElementById("vitoria").textContent = 0;
    document.getElementById("derrota").textContent = 0;
    derrota = 0;
    vitoria = 0;
    
    user = document.getElementById("usuario").value;
    mail = document.getElementById("email").value;
    console.log(user, mail)
    cadastrado = new Pessoas(user,mail)

    // saída:
//    console.table(dados01);

   // limpar a saída
    usuario.value= '';
    email.value = '';

    reset();
}

function reset() {
    document.getElementById("errado").value = "";
    document.getElementById("palavraSecreta").value = ""; 
    document.getElementById("trocarimg").style.visibility = "hidden";
    chance = 0;
    segredo = [];
    palavra =[];
    errado=[];

    for (let index = 0; index < alfabeto.length; index++) {
        let a = `btn${alfabeto[index]}`;
        document.getElementById(a).style.backgroundColor = "#612726";
        document.getElementById(a).style.opacity = "1";
        document.getElementById(a).disabled = false;
    }

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
    document.getElementById("secreto").innerHTML = segredo.join("  ");
    
};



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
            comparar = segredo.find(element => element == "____");
            console.log(comparar)
            let a = `btn${letra1}`;
            document.getElementById(a).style.backgroundColor = "black";
            document.getElementById(a).style.opacity = "0.2";
            document.getElementById(a).disabled = true;
            if (comparar == undefined){
                vitoria = vitoria + 1;
                document.getElementById("vitoria").textContent = vitoria;
                console.log(vitoria)                
            }
        }
    }
    
    if (acerto === false){
        errado.push(letra1)
        document.getElementById("errado").value = errado;
        chance += 1;
        console.log(chance) 
        let a = `btn${letra1}`;
        document.getElementById(a).style.backgroundColor = "black";
        document.getElementById(a).style.opacity = "0.2";
        document.getElementById(a).disabled = true;

    }
    if (chance != 0) {
        document.getElementById("trocarimg").style.visibility = "visible"
    }

    if (chance <= 6 && chance >= 1){
        document.getElementById("trocarimg").src=`Imagens/0${chance}.png`;
        } else if (chance == 7) {
            derrota = derrota + 1;
            document.getElementById("derrota").textContent = derrota;
            console.log(palavra)
            document.getElementById("trocarimg").src=`Imagens/07.png`;
            document.getElementById("palavraSecreta").value = palavra; 
            
            for (let index = 0; index < alfabeto.length; index++) {
                let a = `btn${alfabeto[index]}`;
                document.getElementById(a).style.backgroundColor = "black";
                document.getElementById(a).style.opacity = "0.2";
                document.getElementById(a).disabled = true;
            }
            
        }      
        
    //garante que num fique alternando entre 1 e 2

    console.log(chance)
}



