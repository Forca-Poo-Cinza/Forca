import init from "./methods/init.js";
import cadastrar from "./methods/cadastrar.js";
import reset from "./methods/reset.js";

const jogo = {
  errado: [],
  segredo: [],
  palavra: "",
  chances: 0,
  acertos: false,
  alfabeto: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "Ç",
  ],
  categorias: {
    dicas: ["Cor", "Fruta", "Animal"],
    Cor: [
      "ABOBORA",
      "AÇAFRAO",
      "AMARELO",
      "AMBAR",
      "AMEIXA",
      "AMÊNDOA",
      "AMETISTA",
      "ANIL",
      "AZUL",
      "BEGE",
      "BORDÔ",
      "BRANCO",
      "BRONZE",
      "CAQUI",
      "CARAMELO",
      "CARMESIM",
      "CARMIM",
      "CASTANHO",
      "CEREJA",
      "CHOCOLATE",
      "CIANO",
      "CINZA",
      "CINZENTO",
      "COBRE",
      "CORAL",
      "CREME",
      "DAMASCO",
      "DOURADO",
      "ESCARLATE",
      "ESMERALDA",
      "FERRUGEM",
      "FÚCSIA",
      "GELO",
      "GRENÁ",
      "GRIS",
      "ÍNDIGO",
      "JADE",
      "JAMBO",
      "LARANJA",
      "LAVANDA",
      "LILÁS",
      "LIMAO",
      "LOIRO",
      "MAGENTA",
      "MALVA",
      "MARFIM",
      "MARROM",
      "MOSTARDA",
      "NEGRO",
      "OCRE",
      "OLIVA",
      "OURO",
      "PÊSSEGO",
      "PRATA",
      "PRETO",
      "PÚRPURA",
      "ROSA",
      "ROXO",
      "RUBRO",
      "SALMÃO",
      "SÉPIA",
      "TERRACOTA",
      "TIJOLO",
      "TURQUESA",
      "UVA",
      "VERDE",
      "VERMELHO",
      "VINHO",
      "VIOLETA",
    ],
    Fruta: [
      "ABACATE",
      "ABACAXI",
      "AÇAI",
      "ACEROLA",
      "AMEIXA",
      "CAQUI",
      "CARAMBOLA",
      "CEREJA",
      "DAMASCO",
      "FRAMBOESA",
      "GOIABA",
      "GRAVIOLA",
      "JABOTICABA",
      "LARANJA",
      "LICHIA",
      "MANGA",
      "MEXERICA",
      "MIRTILO",
      "NECTARINA",
      "TAMARINDO",
    ],
    Animal: [
      "CAMALEAO",
      "CAPIVARA",
      "CAMELO",
      "TARTARUGA",
      "LEBRE",
      "GUAXINIM",
      "GIRAFA",
      "TUCANO",
      "OURIÇO",
      "CISNE",
      "SAGUI",
      "ORANGOTANGO",
      "HIPOPOTAMO",
      "HIENA",
      "GUEPARDO",
      "MOSCA",
      "MOSQUITO",
      "CAMARAO",
      "PACA",
      "RAPOSA",
      "BAIACU",
      "DRAGAO",
      "MARIPOSA",
      "UNICORNIO",
      "NARVAL",
      "OCAPI",
      "CEGONHA",
      "PELICANO",
      "LACRAIA",
      "LEMURE",
      "IGUANA",
      "CHINCHILA",
      "CACATUA",
      "PAVAO",
      "TARANTULA",
      "KOALA",
      "CANGURU",
      "CALOPSITA",
      "DINOSSAURO",
      "TIRANOSSAURO",
    ],
  },
  init,
  cadastrar,
  reset
};

window.jogo = jogo