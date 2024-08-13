import { filtrarAcimaPreco } from "./components/filtrarAcimaPreco";
import './App.css';

export default function App() {
    const produtos = [
        { nome: "Laptop", preco: 1000 }, 
        { nome: "Tablet", preco: 400 }, 
        { nome: "Smartphone", preco: 1500 },
        { nome: "Monitor", preco: 300 },
        { nome: "Teclado Mecânico", preco: 150 },
        { nome: "Mouse Gamer", preco: 100 },
        { nome: "Cadeira Gamer", preco: 850 },
        { nome: "Impressora", preco: 200 },
        { nome: "Fone de Ouvido", preco: 120 },
        { nome: "HD Externo", preco: 250 },
        { nome: "Caixa de Som Bluetooth", preco: 180 },
        { nome: "Smartwatch", preco: 800 },
        { nome: "Câmera Digital", preco: 1100 },
        { nome: "Drone", preco: 2000 },
        { nome: "Notebook", preco: 1300 },
        { nome: "Roteador Wi-Fi", preco: 90 },
        { nome: "Smart TV", preco: 2200 },
        { nome: "Console de Videogame", preco: 2300 },
        { nome: "Tablet Gráfico", preco: 450 },
        { nome: "Controle para Console", preco: 250 }
      ];

    const handleFilter = () => {
    const valorFiltro = Number(document.getElementById('valorFiltro').value);
    const produtosFiltrados = filtrarAcimaPreco(produtos, valorFiltro);
    
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = ''; 
    
    produtosFiltrados.forEach((produto, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${produto.nome} - R$ ${produto.preco}`;
      listaProdutos.appendChild(listItem);
    });
  };
  return (
    <div className="container">
      <h1>Lista de Produtos</h1>
      
      <div className="filter-section">
        <label>
          Filtrar produtos com preço acima de:
          <input 
            type="number" 
            id="valorFiltro"
          />
        </label>
        <button onClick={handleFilter}>Filtrar</button>
      </div>

      <ul id="listaProdutos">
        {produtos.map((produto, index) => (
          <li key={index}>
            {produto.nome} - R$ {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}