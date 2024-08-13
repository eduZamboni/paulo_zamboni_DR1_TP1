import './CartaoProduto.css';

export default function CartaoProduto(props) {
    return (
        <div className="cartao-produto">
          <img src={props.imagem} alt={props.nome} className="cartao-produto-imagem" />
          <h3 className="cartao-produto-nome">{props.nome}</h3>
          <p className="cartao-produto-descricao">{props.descricao}</p>
          <p className="cartao-produto-preco">{props.preco}</p>
        </div>
      );
    }