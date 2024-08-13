import React, { useState } from 'react';
import { calcularMediaAvaliacoes } from './components/calcularMediaAvaliacoes'; 

export default function App() {
    const handleCalcularMedia = () => {
      const numeroAvaliacoes = parseInt(prompt("Informe o número de avaliações:"));
  
      if (isNaN(numeroAvaliacoes) || numeroAvaliacoes <= 0) {
        alert("Por favor, insira um número válido de avaliações.");
        return;
      }
  
      const avaliacoes = [];
      for (let i = 0; i < numeroAvaliacoes; i++) {
        const nota = parseFloat(prompt(`Insira uma nota entre 0 e 5 para a avaliação ${i + 1}:`));
        if (isNaN(nota) || nota < 0 || nota > 5) {
          alert("Por favor, insira uma nota válida entre 0 e 5.");
          return;
        }
        avaliacoes.push(nota);
      }
  
      const media = calcularMediaAvaliacoes(avaliacoes);
      alert(`A média das avaliações é: ${media.toFixed(2)}`);
    };
  
    return (
      <div>
        <h1>Calculadora de Média de Avaliações</h1>
        <button onClick={handleCalcularMedia}>Calcular Média</button>
      </div>
    );
  }