import { filtrarPorCategoria } from './components/filtrarPorCategoria';
import './App.css';

export default function App() {
    const produtos = [ 
        { nome: "Laptop", preco: 1000, categoria: "Eletrônicos" }, 
        { nome: "Tablet", preco: 400, categoria: "Eletrônicos" }, 
        { nome: "Smartphone", preco: 1500, categoria: "Eletrônicos" },
        { nome: "Monitor", preco: 300, categoria: "Eletrônicos" },
        { nome: "Teclado Mecânico", preco: 150, categoria: "Acessórios" },
        { nome: "Mouse Gamer", preco: 100, categoria: "Acessórios" },
        { nome: "Cadeira Gamer", preco: 850, categoria: "Móveis" },
        { nome: "Impressora", preco: 200, categoria: "Eletrônicos" },
        { nome: "Fone de Ouvido", preco: 120, categoria: "Acessórios" },
        { nome: "HD Externo", preco: 250, categoria: "Acessórios" },
        { nome: "Caixa de Som Bluetooth", preco: 180, categoria: "Eletrônicos" },
        { nome: "Smartwatch", preco: 800, categoria: "Eletrônicos" },
        { nome: "Câmera Digital", preco: 1100, categoria: "Eletrônicos" },
        { nome: "Drone", preco: 2000, categoria: "Eletrônicos" },
        { nome: "Notebook", preco: 1300, categoria: "Eletrônicos" },
        { nome: "Roteador Wi-Fi", preco: 90, categoria: "Eletrônicos" },
        { nome: "Smart TV", preco: 2200, categoria: "Eletrônicos" },
        { nome: "Console de Videogame", preco: 2300, categoria: "Eletrônicos" },
        { nome: "Tablet Gráfico", preco: 450, categoria: "Acessórios" },
        { nome: "Controle para Console", preco: 250, categoria: "Acessórios" }
      ];

      const handleFiltrarCategoria = () => {
        const categoria = document.getElementById('categoria').value;
        const produtosFiltrados = filtrarPorCategoria(produtos, categoria);
    
        const listaProdutos = document.getElementById('listaProdutos');
        listaProdutos.innerHTML = ''; 
    
        produtosFiltrados.forEach((produto, index) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${produto.nome} - ${produto.categoria}`;
          listaProdutos.appendChild(listItem);
        });
      };
    
      const handleMostrarTodos = () => {
        const listaProdutos = document.getElementById('listaProdutos');
        listaProdutos.innerHTML = ''; 
    
        produtos.forEach((produto, index) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${produto.nome} - ${produto.categoria}`;
          listaProdutos.appendChild(listItem);
        });
      };
    
      return (
        <div className="container">
          <h1>Lista de Produtos</h1>
          
          <div className="filter-section">
            <label>
              Filtrar por categoria:
              <input 
                type="text" 
                id="categoria"
              />
            </label>
            <button onClick={handleFiltrarCategoria}>Filtrar</button>
            <button onClick={handleMostrarTodos}>Mostrar Todos</button>
          </div>
    
          <ul id="listaProdutos">
            {produtos.map((produto, index) => (
              <li key={index}>
                {produto.nome} - {produto.categoria}
              </li>
            ))}
          </ul>
        </div>
      );
    }