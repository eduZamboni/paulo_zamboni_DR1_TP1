import { calcularTotalItens } from './components/calcularTotalItens';
import './App.css';

export default function App() {
    const itens = [
        { nome: "Monitor", precoUnitario: 300.98, categoria: "Eletrônicos", quantidade: 2 },
        { nome: "Cadeira Gamer", precoUnitario: 850, categoria: "Móveis", quantidade: 1 },
        { nome: "Impressora", precoUnitario: 200, categoria: "Eletrônicos", quantidade: 2 },
        { nome: "Fone de Ouvido", precoUnitario: 120, categoria: "Acessórios", quantidade: 3 },
        { nome: "HD Externo", precoUnitario: 250, categoria: "Acessórios", quantidade: 2 },
        { nome: "Caixa de Som Bluetooth", precoUnitario: 180, categoria: "Eletrônicos", quantidade: 5 },
        { nome: "Câmera Digital", precoUnitario: 1100, categoria: "Eletrônicos", quantidade: 1 },
        { nome: "Notebook", precoUnitario: 1300, categoria: "Eletrônicos", quantidade: 1 },
        { nome: "Smart TV", precoUnitario: 2200.15, categoria: "Eletrônicos", quantidade: 3 },
        { nome: "Console de Videogame", precoUnitario: 2300, categoria: "Eletrônicos", quantidade: 2 },
        { nome: "Tablet Gráfico", precoUnitario: 450, categoria: "Acessórios", quantidade: 1 }
    ];

    const total = calcularTotalItens(itens);

    return (
        <div className="carrinho-de-compras">
            <h1>Carrinho de Compras</h1>

            <ul>
                {itens.map((item, index) => (
                    <li key={index}>
                        {item.nome} - Quantidade: {item.quantidade}, Preço Unitário: R$ {item.precoUnitario}
                    </li>
                ))}
            </ul>

            <h2>Total: R$ {total}</h2>
        </div>
    );
}