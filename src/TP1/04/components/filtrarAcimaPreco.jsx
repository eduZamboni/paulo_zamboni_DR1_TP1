export function filtrarAcimaPreco(produtos, valor) {
    return produtos.filter(produto => produto.preco > valor);
}