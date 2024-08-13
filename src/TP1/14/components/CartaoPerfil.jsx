import './CartaoPerfil.css';
import perfilImagem from './eu.png';

export default function CartaoPerfil() {
  return (
    <div className="cartao-perfil">
      <img 
        className="cartao-perfil-imagem"
        src={perfilImagem}
        alt="Imagem de Perfil"
      />
      <h2 className="cartao-perfil-nome">Paulo Eduardo Zamboni</h2>
      <p className="cartao-perfil-bio">
        Desenvolvedor de software com experiência em React, Node.js e desenvolvimento de aplicações web modernas. Apaixonado por tecnologia e sempre em busca de novos desafios.
      </p>
    </div>
  );
}