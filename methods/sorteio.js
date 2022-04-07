import Palavra from "../classes/palavra.js";

const sorteio = () => {
  // gera um numero aleatorio limitado a quantidade de categorias
  const random = Math.floor(Math.random() * window.jogo.categorias.dicas.length);

  // seleciona uma categoria aleatoria
  const categoria = window.jogo.categorias.dicas[random];

  // gera um numero aleatorio limitado a quantidade de palavras dentro da categoria selecionada
  const random2 = Math.floor(Math.random() * window.jogo.categorias[categoria].length);

  // seleciona uma palavra aleatoria da categoria sorteada
  jogo.palavra = window.jogo.categorias[categoria][random2];

  // criando o objeto palavra secreta vinculado a categoria
  const secreta = new Palavra(categoria, window.jogo.palavra);
  return secreta
}

export default sorteio