export function agruparPorCategoria(produtos) {
    return produtos.reduce((acumulador, produto) => {
      const categoria = produto.categoria;
      const nome = produto.nome;
  
      if (!acumulador[categoria]) {
        acumulador[categoria] = [];
      }
  
      acumulador[categoria].push(nome);
      return acumulador;
    }, {});
  }