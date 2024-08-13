import { verificarEstoque } from './components/verificarEstoque';
import './App.css';

export default function App() {
    const produtos = [
        { nome: "Laptop", preco: 1000, categoria: "Eletrônicos", quantidadeEmEstoque: 5 }, 
        { nome: "Tablet", preco: 400, categoria: "Eletrônicos", quantidadeEmEstoque: 0 }, 
        { nome: "Smartphone", preco: 1500, categoria: "Eletrônicos", quantidadeEmEstoque: 3 },
        { nome: "Monitor", preco: 300, categoria: "Eletrônicos", quantidadeEmEstoque: 2 },
        { nome: "Teclado Mecânico", preco: 150, categoria: "Acessórios", quantidadeEmEstoque: 10 },
        { nome: "Mouse Gamer", preco: 100, categoria: "Acessórios", quantidadeEmEstoque: 0 },
        { nome: "Cadeira Gamer", preco: 850, categoria: "Móveis", quantidadeEmEstoque: 4 },
        { nome: "Impressora", preco: 200, categoria: "Eletrônicos", quantidadeEmEstoque: 6 },
        { nome: "Fone de Ouvido", preco: 120, categoria: "Acessórios", quantidadeEmEstoque: 15 },
        { nome: "HD Externo", preco: 250, categoria: "Acessórios", quantidadeEmEstoque: 7 },
        { nome: "Caixa de Som Bluetooth", preco: 180, categoria: "Eletrônicos", quantidadeEmEstoque: 9 },
        { nome: "Smartwatch", preco: 800, categoria: "Eletrônicos", quantidadeEmEstoque: 0 },
        { nome: "Câmera Digital", preco: 1100, categoria: "Eletrônicos", quantidadeEmEstoque: 8 },
        { nome: "Drone", preco: 2000, categoria: "Eletrônicos", quantidadeEmEstoque: 1 },
        { nome: "Notebook", preco: 1300, categoria: "Eletrônicos", quantidadeEmEstoque: 6 },
        { nome: "Roteador Wi-Fi", preco: 90, categoria: "Eletrônicos", quantidadeEmEstoque: 12 },
        { nome: "Smart TV", preco: 2200, categoria: "Eletrônicos", quantidadeEmEstoque: 3 },
        { nome: "Console de Videogame", preco: 2300, categoria: "Eletrônicos", quantidadeEmEstoque: 2 },
        { nome: "Tablet Gráfico", preco: 450, categoria: "Acessórios", quantidadeEmEstoque: 5 },
        { nome: "Controle para Console", preco: 250, categoria: "Acessórios", quantidadeEmEstoque: 0 }
      ];

      const handleVerificarEstoque = () => {
        const produtosEmEstoque = verificarEstoque(produtos);
    
        const listaProdutos = document.getElementById('listaProdutos');
        listaProdutos.innerHTML = ''; 
    
        produtosEmEstoque.forEach((produto, index) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${produto.nome} - ${produto.quantidadeEmEstoque} unidades em estoque`;
          listaProdutos.appendChild(listItem);
        });
      };
    
      const handleMostrarTodos = () => {
        const listaProdutos = document.getElementById('listaProdutos');
        listaProdutos.innerHTML = ''; 
    
        produtos.forEach((produto, index) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${produto.nome} - ${produto.quantidadeEmEstoque} unidades em estoque`;
          listaProdutos.appendChild(listItem);
        });
      };
    
      return (
        <div className="container">
          <h1>Lista de Produtos</h1>
          
          <div className="filter-section">
            <button onClick={handleVerificarEstoque}>Verificar Estoque</button>
            <button onClick={handleMostrarTodos}>Mostrar Todos</button>
          </div>
    
          <ul id="listaProdutos">
            {produtos.map((produto, index) => (
              <li key={index}>
                {produto.nome} - {produto.quantidadeEmEstoque} unidades em estoque
              </li>
            ))}
          </ul>
        </div>
      );
    }