import botaoTodos from "./botaotodos.js";
import {
  htmlVitoria
} from "./html_setters.js";

const testeVitoria = () => {
  // teste para reconhecer se o array segredo contem traços
  if (!window.jogo.segredo.includes("____")) {
    // adicionando vitoria ao usuario
    window.jogo.usuario.addVitoria = 1;
    // mudando o valor de vitorias no HTML
    htmlVitoria(window.jogo.usuario);
    // travando todos os botoes para o usuario nao poder mais digitar
    const corBranco = "808080"
    const opacidade = "0.2"
    botaoTodos(corBranco, opacidade, true);
  }
};

export default testeVitoria