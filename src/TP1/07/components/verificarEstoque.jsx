export function verificarEstoque(produtos) {
    return produtos.filter(produto => produto.quantidadeEmEstoque > 0);
  }