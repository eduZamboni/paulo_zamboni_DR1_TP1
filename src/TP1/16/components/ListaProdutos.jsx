import CartaoProduto from "./CartaoProduto";
import "./ListaProdutos.css";

import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";

const produtos = [
    {
        nome: "Tênis de Corrida",
        descricao: "Tênis confortável para corridas diárias.",
        preco: "R$ 299,90",
        imagem: img1 || "https://via.placeholder.com/150"
    },
    {
        nome: "Camisa de Ciclismo",
        descricao: "Camisa respirável para ciclistas.",
        preco: "R$ 129,90",
        imagem: img2 || "https://via.placeholder.com/150"
    },
    {
        nome: "Boné Esportivo",
        descricao: "Boné ajustável para proteção solar.",
        preco: "R$ 59,90",
        imagem: img3 || "https://via.placeholder.com/150"
    }
];

export default function ListaProdutos() {
    return (
        <div className="lista-produtos">
            {produtos.map((produto, index) => (
                <CartaoProduto
                    key={index}
                    nome={produto.nome}
                    descricao={produto.descricao}
                    preco={produto.preco}
                    imagem={produto.imagem}
                />
            ))}
        </div>
    );
}