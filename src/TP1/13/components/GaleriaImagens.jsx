import './GaleriaImagens.css';

export default function GaleriaImagens() {
    const imagens = [
        { url: 'https://via.placeholder.com/150', legenda: 'Imagem 1' },
        { url: 'https://via.placeholder.com/150', legenda: 'Imagem 2' },
        { url: 'https://via.placeholder.com/150', legenda: 'Imagem 3' }
    ];

    return (
        <div className="galeria">
            {imagens.map((imagem, index) => (
                <div key={index} className="imagem-container">
                    <img src={imagem.url} alt={imagem.legenda} />
                    <p>{imagem.legenda}</p>
                </div>
            ))}
        </div>
    );
}