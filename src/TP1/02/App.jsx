import { filtrarDisponiveis } from './components/filtrarDisponiveis';

export default function App() {
  const produtosIniciais = [
    { nome: "Laptop", disponivel: true },
    { nome: "Tablet", disponivel: false },
    { nome: "Smartphone", disponivel: true },
    { nome: "Monitor", disponivel: false },
    { nome: "Teclado", disponivel: true }
  ];

  let produtosExibidos = produtosIniciais;

  function renderListaProdutos() {
    return produtosExibidos.map((produto, index) => (
      <li key={index}>
        {produto.nome} {produto.disponivel ? "(Disponível)" : "(Indisponível)"}
      </li>
    ));
  }

  function handleFiltrarDisponiveis() {
    produtosExibidos = filtrarDisponiveis(produtosIniciais);
    document.getElementById('lista-produtos').innerHTML = renderListaProdutos().map(item => item.props.children).join('');
  }

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul id="lista-produtos">
        {renderListaProdutos()}
      </ul>
      <button onClick={handleFiltrarDisponiveis}>Filtrar Disponíveis</button>
    </div>
  );
}