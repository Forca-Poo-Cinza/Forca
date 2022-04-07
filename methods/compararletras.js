import {
  htmlJoin
} from "./html_setters.js";
import botaoUnico from "./botaounico.js";
import testeVitoria from "./testvitoria.js";

const compararLetras = (letra) => {
  // split da palavra num array para identificar o index das letras
  window.jogo.palavra.split("").map((letraSecreta, i) => {
    // teste se a letra selecionada é igual a alguma letra da palavra
    if (letraSecreta == letra) {
      // setar o acerto como true pra evitar passar pelo parametro false
      window.jogo.acertos = true;
      // trocar a letra correta na posição do array respectivo da palavra secreta
      window.jogo.segredo[i] = letra;
      // colocar a letra adicinada no HTML
      htmlJoin(window.jogo.segredo);
      // testar se o jogador venceu
      testeVitoria();
      // Desligar o botao selecionado para evitar que o jogador o repita
      botaoUnico(letra);
    }
  })
};

export default compararLetras