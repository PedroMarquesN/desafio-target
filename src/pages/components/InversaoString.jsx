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
        <div className="bg-white rounded-lg shadow-lg p-4">
            <label htmlFor="texto" className="block text-lg font-bold mb-2">Digite o texto para inverter:</label>
            <input
                className="border border-gray-300 bg-gray-100 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="texto"
                value={texto}
                onChange={handleInputChange}
            />
            <div className="flex items-center justify-between">
                <p className="text-lg">Texto invertido:</p>
                <p className="text-2xl font-semibold text-green-500">{textoInvertido}</p>
            </div>
        </div>
    );
}

