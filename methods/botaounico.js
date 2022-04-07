import {
  htmlLetra
} from "./html_setters.js";

const botaoUnico = (letraIdHtml) => {
  // coleta o ID referente ao teclado virtual precionado    
  const letraId = `btn${letraIdHtml}`;

  // altera a situação do teclado virtual na letra id

  // define o background color da tecla precionada
  // define a opacidade da tecla precionada
  // define a se o botao como desativado
  const corBranco = "808080"
  const opacidade = "0.2"
  htmlLetra(letraId, corBranco, opacidade, true)
}

export default botaoUnico