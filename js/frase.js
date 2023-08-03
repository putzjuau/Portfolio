  // Função para simular o efeito de escrita
  function escreverTexto(elemento, texto, intervalo) {
    let textoAtual = '';
    let i = 0;
    const escreverIntervalo = setInterval(() => {
      textoAtual += texto[i];
      elemento.innerHTML = textoAtual;
      i++;
      if (i >= texto.length) {
        clearInterval(escreverIntervalo);
      }
    }, intervalo);
  }

  // Obtendo o elemento onde o texto será escrito

  // Texto que será escrito
  const textoParaEscrever = 'Olá, mundo! Estou escrevendo texto com efeito.';

  // Intervalo entre as letras (em milissegundos)
  const intervaloEntreLetras = 100; // Pode ajustar conforme desejado

  // Iniciar o efeito de escrita
  escreverTexto(elementoTexto, textoParaEscrever, intervaloEntreLetras);

