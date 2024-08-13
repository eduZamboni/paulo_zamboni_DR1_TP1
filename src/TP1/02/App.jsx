import React, { useState } from 'react';
import { filtrarDisponiveis } from './components/filtrarDisponiveis';

export default function App() {
  const [produtos, setProdutos] = useState([
    { nome: "Laptop", disponivel: false },
    { nome: "Tablet", disponivel: true },
    { nome: "Smartphone", disponivel: true },
    { nome: "Monitor", disponivel: true }
  ]);

  const produtosDisponiveis = filtrarDisponiveis(produtos);

  return (
    <div>
      <h1>Produtos Disponíveis</h1>
      <ul>
        {produtosDisponiveis.map((produto, index) => (
          <li key={index}>{produto.nome}</li>
        ))}
      </ul>
    </div>
  );
}