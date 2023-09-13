// Função para simular o efeito de escrita\

const textoParaEscrever = 'João Victor';
const elementoTexto = document.querySelector(".text_init")
const elementoTextoSegundario = document.querySelector(".text_primary_stack");

elementoTextoSegundario.style.fontStyle = 'oblique';
elementoTextoSegundario.style.color = 'green';

function escreverTexto(elemento, texto) {
  let textoAtual = "";
  let i = 0;


  const escreverIntervalo = setInterval(() => { //Escrevendo com um intervalo menor
    textoAtual += texto[i];
    elemento.innerText = textoAtual;
    i++;

    if (i >= texto.length) { //caso tenha chegado ao final, executar
      clearInterval(escreverIntervalo);
      escreverTextoStack(elementoTextoSegundario);
    }
  }, 200)

}

// Obtendo o elemento onde o texto será escrito

// Texto que será escrito

// Iniciar o efeito de escrita
escreverTexto(elementoTexto, textoParaEscrever);





function escreverTextoStack(elemento){
  let textoAtual = "";
  const stacks = ['Back-End', 'Full Stack'];
  i = 0;
  j = 0;

  const escreverIntervalo = setInterval(() => { //Escrevendo com um intervalo menor
    textoAtual += stacks[j][i];
    elemento.innerText = textoAtual;
    i++;

    if (i >= stacks[j].length) {
      //caso tenha chegado ao final, executar
      setTimeout(() => {
        textoAtual = "";
        i = 0;
        j = (j + 1) % stacks.length; // Avança para a próxima palavra
        
      },100);
    }
    
    if (j >= stacks.length) {
      j = 0; // Volta ao início quando todas as palavras foram exibidas
    }
  }, 400);
}

