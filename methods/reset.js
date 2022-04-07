import sorteio from "./sorteio.js";
import {
  htmlJoin,
  htmlCategoria,
  htmlErrado,
  htmlPalavraSecreta,
  htmlEnableImg
} from "./html_setters.js";
import botaoTodos from "./botaotodos.js";

const reset = () => {
  // Zerando o valor do input no HTML na posição errado 
  htmlErrado("")
  // Zerando o valor do input no HTML na posição palavraSecreta
  htmlPalavraSecreta("")
  // Escondendo a imagem da forca
  htmlEnableImg("hidden")

  // zerando as chances do jogador e os Arrays auxiliares
  window.jogo.chances = 0;
  window.jogo.segredo = [];
  window.jogo.errado = [];

  // Restaurando o valor deafult do teclado virtual
  const corDefault = 612726
  const opacidade = 1
  botaoTodos(corDefault, opacidade, false);

  // sortear uma nova palavra
  const secreta = sorteio();

  // designando a dica no HTML
  htmlCategoria(secreta.categoria)

  // Criando o Array e a separação da palavra escondida dentro do HTML
  window.jogo.segredo = new Array(window.jogo.palavra.length).fill("____")
  htmlJoin(window.jogo.segredo);
}

export default reset