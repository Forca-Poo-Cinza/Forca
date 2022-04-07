import {
  htmlVitoria,
  htmlDerrota
} from "./html_setters.js";
import Pessoas from "../classes/pessoas.js";
import reset from "./reset.js";

const cadastrar = () => {
  const user = document.getElementById("usuario").value;
  const email = document.getElementById("email").value;
  window.jogo.usuario = new Pessoas(user, email);

  // colocar vitoria no html
  htmlVitoria(window.jogo.usuario)
  htmlDerrota(window.jogo.usuario)

  reset()
}

export default cadastrar