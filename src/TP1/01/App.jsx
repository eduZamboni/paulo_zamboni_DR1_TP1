import { calcularPrecoTotal } from "./components/calculadora";

const precoUnitario = parseFloat(prompt("Insira o preço unitário do produto:"));
const quantidadeComprada = parseInt(prompt("Insira a quantidade comprada:"), 10);

let precoTotal;

if (isNaN(precoUnitario) || precoUnitario <= 0 || isNaN(quantidadeComprada) || quantidadeComprada <= 0) {
  alert("Entrada inválida. Por favor, recarregue a página e insira valores válidos.");
} else {
  precoTotal = calcularPrecoTotal(precoUnitario, quantidadeComprada);
}

export default function App() {

  return (
    <div>
      <h1>Calculadora de Preço Total</h1>
      <p>Preço Unitário: R$ {precoUnitario.toFixed(2)}</p>
      <p>Quantidade Comprada: {quantidadeComprada}</p>
      <h2>Preço Total: R$ {precoTotal.toFixed(2)}</h2>
    </div>
  );
}