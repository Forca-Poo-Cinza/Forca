import {
  htmlLetra
} from "./html_setters.js";

const botaoTodos = (backgroundColor, opacidade, botaoAtivo = false) => {
  // mapeia as letras do alfabeto
  window.jogo.alfabeto.map(letra => {
    // Coleta o ID da letra no teclado no virtual
    const letraId = `btn${letra}`;
    // altera a situação do teclado virtual na letra id
    htmlLetra(letraId, backgroundColor, opacidade, botaoAtivo)
  })
}

export default botaoTodos