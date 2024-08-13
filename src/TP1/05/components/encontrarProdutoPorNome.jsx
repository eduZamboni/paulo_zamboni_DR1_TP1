export function encontrarProdutoPorNome(produtos, nome) {
    return produtos.find(produto => produto.nome == nome);
}