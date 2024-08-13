import React, { useState } from 'react';
import InputField from "./inputField";

export default function calcularPrecoTotal() {
    const [preco, setPreco] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [precoTotal, setPrecoTotal] = useState(0);

    const calculaPrecoTotal = (preco, quantidade) => {
        return preco * quantidade;
    };

    const handleCalcular = () => {
        const total = calculaPrecoTotal(preco, quantidade);
        setPrecoTotal(total);
    };

    return (
        <div>
            <h1>Calculadora de preço total</h1>

            <InputField label="Preço do produto:" value={preco} onChange={setPreco} />
            <InputField label="Quantidade comprada:" value={quantidade} onChange={setQuantidade} />

            <button onClick={handleCalcular}>Calcular</button>

            <h2>Preço total: R$ {precoTotal.toFixed(2)}</h2>
        </div>
    );
}