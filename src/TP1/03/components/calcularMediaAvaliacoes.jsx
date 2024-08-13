export function calcularMediaAvaliacoes(avaliacoes) {
    if (avaliacoes.length === 0) return 0; 
    const soma = avaliacoes.reduce((acc, avaliacao) => acc + avaliacao, 0);
    const media = soma / avaliacoes.length;
  
    return media;
  }