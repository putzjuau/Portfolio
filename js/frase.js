// Função para simular o efeito de escrita
function escreverTexto(elemento, texto) {
  let textoAtual = "";
  let i = 0;


  const escreverIntervalo = setInterval(() => {
    textoAtual += texto[i];
    elemento.innerText = textoAtual;
    i++;

    if (i >= texto.length) {
      clearInterval(escreverIntervalo);
    }
  }, 100)

}

// Obtendo o elemento onde o texto será escrito

// Texto que será escrito
const textoParaEscrever = 'João Victor';


const elementoTexto = document.querySelector(".text_init")

// Iniciar o efeito de escrita
escreverTexto(elementoTexto, textoParaEscrever);

