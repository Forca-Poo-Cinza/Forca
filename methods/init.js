import compararLetras from "./compararletras.js";
import botaoTodos from "./botaotodos.js";
import botaoUnico from "./botaounico.js";
import {
  htmlDerrota,
  htmlErrado,
  htmlTrocarImg,
  htmlPalavraSecreta,
  htmlEnableImg
} from "./html_setters.js";

const init = (letra) => {
  // setando o valor como false antes do teste
  window.jogo.acertos = false;

  // chamando a função comparar letras na letra selecionada.
  compararLetras(letra);

  // quando o valor acerto nao for alterado executa essa funçao
  const jogadorErrouALetra = window.jogo.acertos === false
  if (jogadorErrouALetra) {
    // coloca a letra errada na variavel Errado
    window.jogo.errado.push(letra);
    // puxa o Array errado para o HTMl
    htmlErrado(window.jogo.errado)
    // altera a quantidade de chances 
    window.jogo.chances += 1;
    // desliga o botao da letra selecionada
    botaoUnico(letra);
  }
  // quando chance diferente de 0 torna a imagem visivel novamente.
  if (window.jogo.chances != 0) {
    htmlEnableImg("visible")
  }
  // altera a imagem da forca usando as chances como parametro
  if (window.jogo.chances >= 1 && window.jogo.chances <= 6) {
    const imgSource = `./Imagens/0${window.jogo.chances}.png`
    htmlTrocarImg(imgSource)
    // quando atinge a quantidade vitorias referente a derrota
  }

  const jogadorPerdeu = window.jogo.chances == 7
  if (jogadorPerdeu) {
    // altera a quantidade de derrotas
    window.jogo.usuario.addDerrota = 1;
    // altera o HTML na posição derrotas
    htmlDerrota(window.jogo.usuario)
    // altera a imagem para de derrota
    const BonecoEnforcado = `./Imagens/07.png`
    htmlTrocarImg(BonecoEnforcado)
    // mostra a palavra secreta no HTMl
    htmlPalavraSecreta(window.jogo.palavra)
    // trava o teclado virtual
    const corBranco = "808080"
    const opacidade = "0.2"
    botaoTodos(corBranco, opacidade, true);
  }
}

export default init