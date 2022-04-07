class Pessoas {
  #vitoria;
  #derrota;

  constructor(nome, email, vitoria = 0, derrota = 0) {
    this.nome = nome;
    this.email = email;
    this.#vitoria = vitoria;
    this.#derrota = derrota;
  }
  set addVitoria(x) {
    this.#vitoria += x;
  }
  get showVitoria() {
    return this.#vitoria;
  }
  set addDerrota(x) {
    this.#derrota += x;
  }
  get showDerrota() {
    return this.#derrota;
  }
}

export default Pessoas