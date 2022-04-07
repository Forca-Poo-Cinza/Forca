export const htmlVitoria = (user) => {
  document.getElementById("vitoria").textContent = user.showVitoria;
};

export const htmlDerrota = (user) => {
  document.getElementById("derrota").textContent = user.showDerrota;
};

export const htmlJoin = (segredo) => {
  document.getElementById("secreto").innerHTML = segredo.join(" ");
};

export const htmlErrado = (errado) => {
  document.getElementById("errado").value = errado;
}

export const htmlLetra = (letraId, backgroundColor, opacidade, botaoAtivo) => {
  // define a cor do background da letra
  document.getElementById(letraId).style.backgroundColor = `#${backgroundColor}`;
  // Define a opacidade da letra
  document.getElementById(letraId).style.opacity = `${opacidade}`;
  // Define se o botao esta ativo ou nao
  document.getElementById(letraId).disabled = botaoAtivo;
}

export const htmlCategoria = (secreta) => {
  // designando a dica no HTML
  document.getElementById("categoria").value = secreta;
}

export const htmlPalavraSecreta = (palavra) => {
  // Zerando o valor do input no HTML na posição palavraSecreta
  document.getElementById("palavraSecreta").value = palavra;
}

export const htmlTrocarImg = (value) => {
  // trocar img source
  document.getElementById("trocarimg").src = value;
}

export const htmlEnableImg = (value) => {
  // Escondendo a imagem da forca
  document.getElementById("trocarimg").style.visibility = value;
}