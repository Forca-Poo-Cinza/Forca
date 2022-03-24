var num = 1;
var img = document.getElementById("teste");
function trocaImg(){
//apenas para cunho de testes
setTimeout(function () {
  if (num == 1)
    {
      img.src = "Imagens/02.png";
    }
  else if (num == 2)
    {
      img.src = "Imagens/03.png";
    }
    //garante que num fique alternando entre 1 e 2
    num = (num % 2) + 1;
    }, 1000);
}