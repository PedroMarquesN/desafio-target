import React, { useState } from 'react';

export default function InversaoString() {
    const [texto, setTexto] = useState('');
    const [textoInvertido, setTextoInvertido] = useState('');

    function inverter(texto) {
        let resultado = '';
        for (let i = texto.length - 1; i >= 0; i--) {
            resultado += texto[i];
        }
        return resultado;
    }

    const handleInputChange = (event) => {
        const texto = event.target.value;
        setTexto(texto);
        const textoInvertido = inverter(texto);
        setTextoInvertido(textoInvertido);
    };

    return (
        <div>
            <input type="text" value={texto} onChange={handleInputChange} placeholder="Digite o texto para inverter" />
            <div>Texto invertido: {textoInvertido}</div>
        </div>
    );
}

