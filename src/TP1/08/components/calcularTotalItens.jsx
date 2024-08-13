export function calcularTotalItens(itens) {
    return itens.reduce((total, item) => {
      return total + (item.quantidade * item.precoUnitario);
    }, 0);
  }