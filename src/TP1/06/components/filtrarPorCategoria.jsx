export function filtrarPorCategoria(produtos, categoria) {
    return produtos.filter(produto => produto.categoria == categoria);
  }